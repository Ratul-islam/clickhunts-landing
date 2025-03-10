import React, { useEffect, useState } from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 flex items-center justify-center p-4">
      <div className={`max-w-lg w-full bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="p-5 sm:p-10">
          <div className="flex items-center space-x-4 mb-8">
            <div className={`text-red-500 transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <AlertCircle size={48} className="animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">404</h1>
              <p className="text-lg font-medium text-gray-600">Page not found</p>
            </div>
          </div>
          
          <div className={`space-y-6 transition-all delay-300 duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-gray-600">
              We're sorry, but the page you were looking for doesn't exist or has been moved.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
              <p className="text-sm text-gray-500">
                The URL may be misspelled or the page you're looking for is no longer available.
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Go back
              </button>
            </div>
          </div>
        </div>
        
        <div className={`bg-gray-50 p-5 sm:p-6 border-t border-gray-100 transition-all delay-500 duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center">
            <a href="/" className="px-4 py-2 bg-[#068896] hover:bg-[#166169] text-white text-sm font-medium rounded-md transition-colors">
              Return home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;