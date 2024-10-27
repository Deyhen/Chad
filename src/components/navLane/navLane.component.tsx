'use client'

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ProgressStepsProps } from './navLane.props';

export const NavLane: React.FC<ProgressStepsProps> = ({ steps }) => {
  const pathname = usePathname();
  const router = useRouter();

  let currentIndex = steps.findIndex((step) => step.route === pathname);

  if (currentIndex === -1) {
    currentIndex = steps.slice().reverse().findIndex((step) => step.isCompleted);
    currentIndex = currentIndex !== -1 ? steps.length - 1 - currentIndex : 0;
  }

  const nextIsAble = currentIndex < steps.length - 1 && steps[currentIndex].isCompleted;
  const backIsAble = currentIndex > 0;

  const handleBack = () => {
    if (backIsAble) {
      router.push(steps[currentIndex - 1].route);
    }
  };

  const handleNext = () => {
    if (nextIsAble) {
      router.push(steps[currentIndex + 1].route);
    }
  };

  const progressPercentage = ((currentIndex + 1) / steps.length) * 100;

  return (
    <div className="flex flex-col w-full items-center space-y-1">
      <div className="flex flex-col w-full justify-start items-start text-gray-500 text-sm">
        <span>Step {currentIndex + 1} of {steps.length}</span>
        <div className="relative w-full mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-element rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <button 
          disabled={!backIsAble} 
          className={`py-1 px-4 rounded-lg text-sm transition-colors duration-300 ${backIsAble ? 'text-element hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
          onClick={handleBack}
        >
          &lt; Prev
        </button>
        
        <button 
          disabled={!nextIsAble} 
          className={`py-1 px-4 rounded-lg text-sm transition-colors duration-300 ${nextIsAble ? 'text-element hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
          onClick={handleNext}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};
