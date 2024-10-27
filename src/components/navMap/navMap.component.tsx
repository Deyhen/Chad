'use client'

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ProgressStepsProps } from './navMap.props';
import { Check } from '../icons/check';

export const NavMap: React.FC<ProgressStepsProps> = ({ steps }) => {
    const pathname = usePathname();
    const router = useRouter();

    let currentIndex = steps.findIndex((step) => step.route === pathname);

    if (currentIndex === -1) {
      currentIndex = steps
        .slice() 
        .reverse() 
        .findIndex((step) => step.isCompleted);
      
      if (currentIndex !== -1) {
        currentIndex = steps.length - 1 - currentIndex;
      } else {
        currentIndex = 0; 
      }
    }
    

    const nextIsAble = steps.length - 1 !== currentIndex && steps[currentIndex].isCompleted;
    const backIsAble = currentIndex > 0;

    const handleBack = () => {
      router.push(steps[currentIndex - 1].route);
    };
    const handleNext = () => {
      router.push(steps[currentIndex + 1].route);
    };

  return (
    <div className="flex flex-col items-start">
      {steps.map((step, index) => (
        <div key={index}>
          <div className="flex items-center last:mb-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentIndex === index ?  
                      step.isCompleted ? 
                          'bg-element text-white outline-offset-4 outline-2 outline-element outline border-2 border-element' 
                          : 
                          'border-2 border-element'
                      :
                      currentIndex > index ?
                        'bg-element text-white border-2 border-element'
                        :
                        step.isCompleted ? 
                          'bg-navmap_secondary text-white border-2 border-navmap_secondary' 
                          : 
                          'border-2 border-navmap_secondary'
              }`}
            >
              {step.isCompleted && (
                <Check width='20' height='20' fill="white"/>
              )}
            </div>
            <span
              className={`ml-4 ${
                step.isCompleted ? 'text-white font-semibold' : step.route === pathname ? "text-white" : "text-navmap_secondary"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
              <div className={`${step.isCompleted && step.route === pathname ? 'mt-1.5 h-9 ' : 'h-10 '} border-l-2 ml-[15px] 
                              ${step.isCompleted ? 'border-element' : 'border-navmap_secondary'}`}/>
          )}
        </div>
      ))}
      <div className='mt-8 w-full flex justify-between'>
        <button 
          disabled={!backIsAble} 
          className={`py-1 px-4 rounded-lg transition-colors duration-300 ${backIsAble ? 'hover:bg-[#164a73] bg-navmap_focused text-navmap_element ' : 'text-navmap_secondary'}`}
          onClick={handleBack}
        >
          &lt; Back
        </button>
        <button 
          disabled={!nextIsAble} 
          className={`py-1 px-4 rounded-lg transition-colors duration-300  ${nextIsAble ? 'hover:bg-[#164a73] bg-navmap_focused text-navmap_element' : 'text-navmap_secondary'}`}
          onClick={handleNext}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};
