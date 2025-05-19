import React, { useEffect, useRef } from 'react';

const ClickHuntsPage = () => {
  // Reference for handling image zoom
  const imageContainersRef = useRef([]);
  // Reference for header scroll effect
  const headerRef = useRef(null);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add('shadow-md');
        } else {
          headerRef.current.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set up image zoom functionality for each container
    imageContainersRef.current.forEach(container => {
      if (!container) return;
      
      const img = container.querySelector('img');
      if (!img) return;

      // Mouse move zoom
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const originX = ((x / rect.width) * 100);
        const originY = ((y / rect.height) * 100);
        
        img.style.transformOrigin = `${originX}% ${originY}%`;
      };

      // Mouse enter/leave handlers
      const handleMouseEnter = () => {
        container.classList.add('overflow-visible');
        img.classList.add('scale-200', 'z-50', 'relative');
      };

      const handleMouseLeave = () => {
        container.classList.remove('overflow-visible');
        img.classList.remove('scale-200', 'z-50', 'relative');
      };

      // Touch device handling
      let touchTimeout;
      const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        const originX = ((x / rect.width) * 100);
        const originY = ((y / rect.height) * 100);
        
        img.style.transformOrigin = `${originX}% ${originY}%`;
        
        container.classList.add('overflow-visible');
        img.classList.add('scale-200', 'z-50', 'relative');
        
        clearTimeout(touchTimeout);
        touchTimeout = setTimeout(() => {
          container.classList.remove('overflow-visible');
          img.classList.remove('scale-200', 'z-50', 'relative');
        }, 1000);
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('touchstart', handleTouchStart);

      // Cleanup event listeners
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('touchstart', handleTouchStart);
      };
    });

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Current year for footer
  const currentYear = new Date().getFullYear();

  // Function to add elements to the image containers ref array
  const addToImageContainersRef = (el, index) => {
    if (el && !imageContainersRef.current[index]) {
      imageContainersRef.current[index] = el;
    }
  };

  return (
    <div className="pt-24 font-sans text-gray-800 bg-white">

      {/* Main Content */}
      <div className="max-w-3xl mx-auto bg-white border border-teal-200 rounded-lg p-4 md:p-6 shadow-sm">
        <h1 className="text-teal-600 text-center text-xl md:text-2xl mb-6 pb-2 border-b-2 border-teal-600">
          ClickHunts Account Management Guide
        </h1>

        <div className="mb-10 p-4 md:p-6 border border-teal-200 rounded-lg">
          <h2 className="text-teal-600 text-lg mb-4 pl-2 border-l-4 border-teal-600">
            Profile Information
          </h2>
          <div 
            className="mx-auto rounded-lg overflow-hidden border border-teal-200 max-w-2xl cursor-zoom-in relative"
            ref={(el) => addToImageContainersRef(el, 0)}
          >
            <img 
              src="https://imgur.com/0yNpBzy.png" 
              alt="Company Settings Profile" 
              loading="lazy"
              className="w-full h-auto max-h-96 object-contain transition-transform duration-300"
            />
          </div>
          <ul className="list-none p-0 mt-4">
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              1. Navigate to Company Settings
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              2. Select "My Account"
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              3. Access the General tab
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              4. Click Edit to modify your information
            </li>
          </ul>
          <div className="bg-teal-50 p-3 rounded-lg mt-4 border border-teal-200">
            <strong>Note:</strong> Profile settings can be found under the General tab.
          </div>
        </div>

        <div className="mb-10 p-4 md:p-6 border border-teal-200 rounded-lg">
          <h2 className="text-teal-600 text-lg mb-4 pl-2 border-l-4 border-teal-600">
            Billing Information
          </h2>
          <div 
            className="mx-auto rounded-lg overflow-hidden border border-teal-200 max-w-2xl cursor-zoom-in relative"
            ref={(el) => addToImageContainersRef(el, 1)}
          >
            <img 
              src="https://imgur.com/ufRxgqd.png" 
              alt="Billing Settings" 
              loading="lazy"
              className="w-full h-auto max-h-96 object-contain transition-transform duration-300"
            />
          </div>
          <ul className="list-none p-0 mt-4">
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              1. Go to Company Settings
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              2. Click on "Billing"
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              3. Select Edit option in the upper right
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              4. Update your billing details
            </li>
            <li className="p-3 mb-2 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
              5. Save your changes
            </li>
          </ul>
          <div className="bg-teal-50 p-3 rounded-lg mt-4 border border-teal-200">
            <strong>Important:</strong> Verify all billing information before saving.
          </div>
        </div>

        <div className="mb-10 p-4 md:p-6 border border-teal-200 rounded-lg">
          <h2 className="text-teal-600 text-lg mb-4 pl-2 border-l-4 border-teal-600">
            Edit Billing Settings
          </h2>
          <div 
            className="mx-auto rounded-lg overflow-hidden border border-teal-200 max-w-2xl cursor-zoom-in relative"
            ref={(el) => addToImageContainersRef(el, 2)}
          >
            <img 
              src="https://imgur.com/JmIcNDF.png" 
              alt="Edit Billing Information" 
              loading="lazy"
              className="w-full h-auto max-h-96 object-contain transition-transform duration-300"
            />
          </div>
          <div className="bg-teal-50 p-3 rounded-lg mt-4 border border-teal-200">
            <strong>Reminder:</strong> Keep your billing information up-to-date for uninterrupted service.
          </div>
        </div>
      </div>



      {/* Custom CSS for scale-200 class that Tailwind doesn't have by default */}
      <style jsx>{`
        .scale-200 {
          transform: scale(2);
        }
      `}</style>
    </div>
  );
};

export default ClickHuntsPage;