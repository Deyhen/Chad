

export const Check = ({width, height, className, fill}: {width?: string, height?: string, className?: string, fill?: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width || '16'} height={height || '17'} className={className} viewBox="0 0 48 48">
        <path fill={fill} d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
        </svg>
    )
}

