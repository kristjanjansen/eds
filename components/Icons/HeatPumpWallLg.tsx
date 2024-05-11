import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHeatPumpWallLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M122.41 3.82a1.5 1.5 0 0 0-1.5 1.5v117.36a1.5 1.5 0 0 0 3 0V5.32a1.5 1.5 0 0 0-1.5-1.5ZM104.41 24.43H5.59a1.5 1.5 0 0 0-1.5 1.5v71.93a1.5 1.5 0 0 0 1.5 1.5h98.82a1.5 1.5 0 0 0 1.5-1.5V25.93a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 71.93H7.09V27.43h95.82ZM25.72 100.57H14.88a1.5 1.5 0 1 0 0 3h10.84a1.5 1.5 0 0 0 0-3ZM95.12 100.57H84.28a1.5 1.5 0 0 0 0 3h10.84a1.5 1.5 0 0 0 0-3Z" />
            <path d="M80.4 51.25h12.33a1.5 1.5 0 1 0 0-3H80.4a1.5 1.5 0 0 0 0 3ZM80.4 59.35h12.33a1.5 1.5 0 0 0 0-3H80.4a1.5 1.5 0 0 0 0 3ZM80.4 67.45h12.33a1.5 1.5 0 0 0 0-3H80.4a1.5 1.5 0 0 0 0 3ZM80.4 75.55h12.33a1.5 1.5 0 0 0 0-3H80.4a1.5 1.5 0 0 0 0 3ZM42.56 88.69A26.79 26.79 0 1 0 15.77 61.9a26.82 26.82 0 0 0 26.79 26.79Zm0-50.58A23.79 23.79 0 1 1 18.77 61.9a23.81 23.81 0 0 1 23.79-23.79Z" />
            <path d="M28.73 74.94a4.55 4.55 0 0 0 3.07 4.31 5.89 5.89 0 0 0 2.05.35 9.68 9.68 0 0 0 5.48-2 22.49 22.49 0 0 0 7.33-9.6c5.59 1 11.66.41 14.84-1.43 2.13-1.22 2.6-2.73 2.62-3.77s-.42-2.64-2.62-4c-3.22-2-9.28-3.09-14.81-2.41a23.72 23.72 0 0 0-9-10.87c-3-1.76-5-1.38-6.11-.75a4.81 4.81 0 0 0-2.26 4.49c0 3.55 2.38 8.71 6 12.63-3.89 3.83-6.82 9.25-6.59 13.05ZM47.6 59.26c4.64-.45 9.71.39 12.29 2 .79.5 1.24 1 1.23 1.44s-.7 1-1.12 1.23c-2.55 1.48-7.71 2-12.45 1.13A14.51 14.51 0 0 0 47.9 62a12.53 12.53 0 0 0-.3-2.74ZM44.9 62a11.24 11.24 0 0 1-.27 2.43 16.2 16.2 0 0 1-2.94-1.23 14.41 14.41 0 0 1-1.87-1.24 13.52 13.52 0 0 1 4.82-2.15A9.91 9.91 0 0 1 44.9 62ZM32.31 49.21c0-1 .24-1.6.71-1.86a1.32 1.32 0 0 1 .66-.15 5.36 5.36 0 0 1 2.47.86 20.89 20.89 0 0 1 7.5 8.85 17.29 17.29 0 0 0-3.37 1.23 18.21 18.21 0 0 0-2.71 1.71c-3.11-3.35-5.26-7.8-5.26-10.64Zm5.17 14.67a17.85 17.85 0 0 0 2.76 1.9 19 19 0 0 0 3.48 1.47 19.29 19.29 0 0 1-6.12 7.88c-1.82 1.29-3.53 1.75-4.8 1.3-.49-.18-1-.51-1.07-1.68-.17-2.75 2.27-7.48 5.75-10.87Z" />
        </SvgWrapper>
    );
}
export default SvgHeatPumpWallLg;