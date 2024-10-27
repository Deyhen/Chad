

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface MyButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    content: string,
    onClick?: () => void,
    
}