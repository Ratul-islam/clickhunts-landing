import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { SHEET_ID, SHEET_KEY } from '../../lib/config';
import mainLogo from "../../assets/ClickHunts.png";

const GoogleSheetAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalData, setModalData] = useState(null);
  const [modalHeader, setModalHeader] = useState('');
  const [modalContent, setModalContent] = useState('');

  const API_KEY = SHEET_KEY;
  const SHEET_NAME = 'Sheet1';

  const tableRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        setData(res.data.values);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch Google Sheet data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [SHEET_ID, API_KEY]);

  // Show cell content in modal
  const showCellContent = (header, content) => {
    setModalHeader(header);
    setModalContent(content);
    setModalData('cell');
  };

  // Close modal
  const closeModal = () => {
    setModalData(null);
    setModalHeader('');
    setModalContent('');
  };

  // Check if the row contains a section header
  const isSectionHeader = (row) => {
    if (row && row.length > 0) {
      const contentCells = row.filter(cell => cell.trim() !== '');
      
      // Check for "Top Offer" in any cell or single-cell rows like "Health USA"
      if (contentCells.length === 1) {
        const cellContent = contentCells[0].toLowerCase();
        return cellContent.includes('top offer') || 
               cellContent.includes('health usa') || 
               cellContent.includes('latin & europe');
      }
    }
    return false;
  };

  // Check if a row should have the "Active" marker
  const isActiveRow = (rowIndex, rowData) => {
    return rowData && rowData[0] === 'Active';
  };

  // Check if a row should have the "Pause" marker
  const isPauseRow = (rowIndex, rowData) => {
    return rowData && rowData[0] === 'Pause';
  };

  // Filter data based on search term and active filter
  const filteredData = React.useMemo(() => {
    if (!data || data.length <= 2) return []; // Changed from <= 1 to <= 2
    
    return data.slice(2).filter((row, index) => { // Changed from slice(1) to slice(2)
      // Always include section headers in filtered results
      if (isSectionHeader(row)) return true;
      
      // Filter by search term
      const matchesSearch = !searchTerm || row.some(cell => 
        cell && cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      // Filter by active status
      const isActive = row[0] === 'Active';
      const matchesActiveFilter = 
        activeFilter === 'all' || 
        (activeFilter === 'active' && isActive) || 
        (activeFilter === 'inactive' && !isActive);
      
      return matchesSearch && matchesActiveFilter;
    });
  }, [data, searchTerm, activeFilter]);

  // Generate table headers
  const renderTableHeaders = () => {
    if (!data || data.length <= 1) return null;
    
    // Get the headers from the second row (index 1)
    const headers = data[1] || [];
    // Calculate the width for each column based on content
    const columnCount = headers.length;
    
    return (
      <tr className="bg-gradient-to-r from-[#048998] to-[#036d7a] text-white">
        {headers.map((header, index) => (
          <th 
            key={index} 
            className="px-1 py-2 text-left font-semibold border-b border-[#03808e] bg-slate-800"
          >
            <div className="truncate text-xs">{header}</div>
          </th>
        ))}
      </tr>
    );
  };

  // Render data rows with section headers
  const renderTableRows = () => {
    if (!data || data.length <= 2) return null;
    
    // Make sure we use the correct column count from the headers
    const headerColSpan = data[1] ? data[1].length : 9;
    
    return filteredData.map((row, rowIndex) => {
      // Check if this is a section header row
      if (isSectionHeader(row)) {
        // Create separate table row for section header that spans all columns
        return (
          <tr key={`section-${rowIndex}`} className="section-header-row">
            <td 
              colSpan={headerColSpan} 
              className="bg-gradient-to-r from-[#f8a978] to-[#f4b183] py-2 px-4 border-y border-[#e8a070] text-[#703b15] font-bold sticky top-[53px] z-10"
            >
              {row[0]}
            </td>
          </tr>
        );
      }
      
      // Check if this is an active row
      const isActive = isActiveRow(rowIndex, row);
      
      // Check if this is a pause row
      const isPause = isPauseRow(rowIndex, row);
      
      // Check if this is the last row (Summary)
      const isLastRow = rowIndex === filteredData.length - 1 && !isSectionHeader(row) && row[0]?.includes("Total");
      
      if (isLastRow) {
        return (
          <tr key={rowIndex} className="sticky bottom-0 z-10">
            <td 
              colSpan={headerColSpan} 
              className="bg-gradient-to-r from-[#1e6c59] to-[#1a8c72] text-white text-center py-3 font-bold border-t border-[#0e594a] shadow-md"
            >
              {row[0]}
            </td>
          </tr>
        );
      }
      
      return (
        <tr 
          key={rowIndex} 
          className={`transition-colors duration-150 ${
            isPause ? "bg-red-100 hover:bg-red-200" : 
            rowIndex % 2 === 0 ? "bg-white hover:bg-[#f0f9fa]" : "bg-[#f8fbfb] hover:bg-[#f0f9fa]"
          }`}
        >
          {/* Ensure we don't try to render more cells than there are columns */}
          {row.slice(0, headerColSpan).map((cell, colIndex) => {
            // Get the corresponding header for this column
            const headerLabel = data[1] && data[1][colIndex] ? data[1][colIndex] : `Column ${colIndex + 1}`;
            const isCellLong = cell && cell.toString().length > 15;
            
            return (
              <td 
                key={colIndex} 
                className={`border-b ${isPause ? 'border-red-200' : 'border-[#e5eef0]'} py-1 px-1 text-xs`}
              >
                {isActive && colIndex === 0 ? (
                  <div className="flex items-center text-emerald-600 font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                    <span>Active</span>
                  </div>
                ) : isPause && colIndex === 0 ? (
                  <div className="flex items-center text-red-600 font-medium">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1"></span>
                    <span>Pause</span>
                  </div>
                ) : (
                  <div className="relative group">
                    <div 
                      className={`truncate ${isCellLong ? 'cursor-pointer text-[#048998] hover:underline' : ''}`}
                      onClick={() => isCellLong && showCellContent(headerLabel, cell)}
                      title={cell}
                    >
                      {cell || "—"}
                    </div>
                    
                    {/* Tooltip for long content that stays within viewport */}
                    {isCellLong && (
                      <div className="hidden group-hover:block absolute left-0 -top-2 transform -translate-y-full bg-gray-800 text-white text-xs rounded py-1 px-2 min-w-[150px] max-w-[200px] z-50 whitespace-normal break-words">
                        <div className="font-bold mb-1 text-xs">{headerLabel}:</div>
                        <div className="text-xs">{cell}</div>
                        <div className="text-gray-300 text-[10px] mt-1 italic">Click to view full content</div>
                        <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                      </div>
                    )}
                  </div>
                )}
              </td>
            );
          })}
          
          {/* If row has fewer cells than headers, add empty cells to maintain structure */}
          {row.length < headerColSpan && Array(headerColSpan - row.length).fill(0).map((_, i) => (
            <td 
              key={`empty-${i}`}
              className={`border-b ${isPause ? 'border-red-200' : 'border-[#e5eef0]'} py-1 px-1 text-xs`}
            >
              <div className="text-gray-400">—</div>
            </td>
          ))}
        </tr>
      );
    });
  };

  // Content modal for viewing cell data
  const renderContentModal = () => {
    if (!modalData) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden flex flex-col">
          {/* Modal header */}
          <div className="bg-gradient-to-r from-[#048998] to-[#036d7a] px-6 py-4 text-white flex justify-between items-center">
            <h3 className="text-xl font-bold truncate">{modalHeader}</h3>
            <button 
              onClick={closeModal}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Modal content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="whitespace-pre-wrap break-words">{modalContent}</div>
          </div>
          
          {/* Modal footer */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans bg-white rounded-xl overflow-hidden mx-auto max-w-6xl my-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      {/* Header with controls and search */}
      <div className="bg-gradient-to-r from-[#f8f8fb] to-white p-5 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={mainLogo} alt="Click Hunts Logo" className="h-8" />
            <div className="border-l border-gray-300 pl-3">
              <h2 className="text-xl font-bold text-gray-800">Data Explorer</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048998]/30 focus:border-[#048998]"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#048998]/30 focus:border-[#048998] text-sm"
            >
              <option value="all">All Status</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="flex flex-col justify-center items-center h-64 bg-gray-50">
          <div className="w-12 h-12 border-4 border-[#048998]/20 border-t-[#048998] rounded-full animate-spin mb-4"></div>
          <div className="text-gray-600 font-medium">Loading data...</div>
        </div>
      ) : (
        <div className="overflow-y-auto h-[calc(100vh-200px)] scrollbar-thin scrollbar-thumb-[#048998]/20 scrollbar-track-transparent" ref={tableRef}>
          {data.length > 1 ? (
            <div className="w-full inline-block align-middle">
              {/* Wrap table in a div with overflow-hidden to prevent horizontal scrolling */}
              <div className="overflow-x-hidden">
                <table className="w-full table-fixed divide-y divide-gray-200">
                  <thead className="sticky top-0 z-20">
                    {renderTableHeaders()}
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {renderTableRows()}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 font-medium">No data available</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-[#048998] text-white rounded-lg hover:bg-[#037885] transition-colors"
              >
                Refresh Data
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Footer with metadata */}
      <div className="bg-[#f8f8fb] border-t border-gray-200 p-3 flex justify-between items-center text-xs text-gray-500">
        <div>
          {data.length > 0 ? (
            <span>Showing {filteredData.length} of {data.length - 2} rows</span>
          ) : (
            'No data available'
          )}
        </div>
      </div>
      
      {/* Content viewing modal */}
      {renderContentModal()}
    </div>
  );
};

export default GoogleSheetAPI;