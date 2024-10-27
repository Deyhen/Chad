
export const EyeOff = ({width, height, className}: {width?: string, height?: string, className?: string}) => {
    return (
        <svg width={width || '16'} height={height || '17'} className={className} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3856_26)">
                <path d="M6.60008 3.32664C7.05897 3.21923 7.52879 3.16554 8.00008 3.16664C12.6667 3.16664 15.3334 8.49998 15.3334 8.49998C14.9287 9.25705 14.4461 9.9698 13.8934 10.6266M9.41341 9.91331C9.23032 10.1098 9.00951 10.2674 8.76418 10.3767C8.51885 10.486 8.25402 10.5448 7.98547 10.5496C7.71693 10.5543 7.45019 10.5049 7.20115 10.4043C6.95212 10.3037 6.7259 10.154 6.53598 9.96408C6.34606 9.77416 6.19634 9.54794 6.09575 9.2989C5.99516 9.04987 5.94577 8.78312 5.9505 8.51458C5.95524 8.24604 6.01402 7.98121 6.12333 7.73587C6.23264 7.49054 6.39025 7.26974 6.58675 7.08664M11.9601 12.46C10.8205 13.3286 9.43282 13.8099 8.00008 13.8333C3.33341 13.8333 0.666748 8.49998 0.666748 8.49998C1.49601 6.95457 2.64617 5.60438 4.04008 4.53998L11.9601 12.46Z" stroke="#4F637D" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.666748 1.16663L15.3334 15.8333" stroke="#4F637D" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_3856_26">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
}