'use client'

import { MyButtonProps } from "./myButton.props"

export const MyButton: React.FC<MyButtonProps> = ({
    className, 
    onClick, 
    content, 
    type, 
    ...props
}) => {
    return(
        <button 
        onClick={onClick} 
        type={type || 'button'}
        className={`flex justify-center items-center text-white rounded-lg bg-element w-full py-2 px-4 hover:bg-black transition-colors duration-300 ${className}`}
        {...props}
        >
            {content}
        </button>
    )
}