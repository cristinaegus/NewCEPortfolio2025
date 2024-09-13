import { useState, useEffect, memo } from 'react';
import IconCloud from '../../../@/components/magicui/icon-cloud';

const MemoizedIconCloud = memo(IconCloud);

const IconCloudWrapper = ({ iconSlugs }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 700); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`transition duration-500 ${isLoaded ? 'blur-0' : 'blur-sm'}`}
      >
        <MemoizedIconCloud iconSlugs={iconSlugs} />
      </div>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Loading Spinner */}
          <svg
            className="animate-spin h-8 w-8 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default IconCloudWrapper;
