'use client'

import React, { useState } from 'react';
import { MyInputProps } from './myInput.props';
import { EyeOff } from '@/components/icons/eyeOff';
import { EyeOn } from '@/components/icons/eyeOn';

export const MyInput: React.FC<MyInputProps> = ({
  label,
  labelStyle,
  id,
  className,
  type,
  placeholder,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative mt-4">
      {label && (
        <label className={`md:text-sm text-xs mb-1 text-main_text ${labelStyle}`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        placeholder={placeholder}
        className={`w-full p-2 pr-10 transition-colors placeholder:text-gray-500 text duration-300 outline-none rounded-lg bg-[#F8F9FC] border-white border hover:bg-white hover:border-secondary_text ${className}`}
        type={type === 'password' ? 
            !isPasswordVisible ? 
                'password' 
                : 
                'text' 
            : type}
          {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute bottom-2.5 right-3 "
        >
          {isPasswordVisible ? (
            <EyeOff width="20" height="20" className='text-secondary_text'/>
          ) : (
            <EyeOn  width="20" height="20"  className='text-secondary_text'/>
          )}
        </button>
      )}
    </div>
  );
};