import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBellLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M98.05 17.56a22.11 22.11 0 1 0 22.11 22.1 22.13 22.13 0 0 0-22.11-22.1Zm0 41.21a19.11 19.11 0 1 1 19.11-19.11 19.13 19.13 0 0 1-19.11 19.11Z" />
            <path d="M98.05 45a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 1 0-3 0v15a1.5 1.5 0 0 0 1.5 1.5ZM98.08 48.09a2.35 2.35 0 1 0 2.35 2.35 2.35 2.35 0 0 0-2.35-2.35ZM34.56 50.52a1.5 1.5 0 0 0 1.5 1.48 1.5 1.5 0 0 0 1.46-1.54 22.28 22.28 0 0 1 21.76-22.78 1.51 1.51 0 0 0 1.46-1.54 1.48 1.48 0 0 0-1.54-1.46 25.29 25.29 0 0 0-24.64 25.84Z" />
            <path d="M100.08 69.36A1.48 1.48 0 0 0 98.5 68a1.5 1.5 0 0 0-1.41 1.58c.61 10.28 4.19 17 7.42 22.39H16c3.55-5.97 7.5-13.46 7.5-25.49V51.21a36.75 36.75 0 0 1 36.75-36.75 36.69 36.69 0 0 1 17.58 4.47 1.5 1.5 0 1 0 1.44-2.63 39.13 39.13 0 0 0-9.33-3.64v-2.47a9.69 9.69 0 0 0-19.38 0v2.45A39.79 39.79 0 0 0 20.5 51.21v15.27c0 12.26-4.44 19.57-8 25.44C10 96 7.84 99.56 7.84 103.66a8.44 8.44 0 0 0 8.43 8.43h27.17a16.87 16.87 0 0 0 33.62 0h27.17a8.45 8.45 0 0 0 8.43-8.43c0-4.1-2.16-7.64-4.65-11.74-3.25-5.36-7.3-12.02-7.93-22.56ZM53.56 10.19a6.69 6.69 0 1 1 13.38 0V12a40.37 40.37 0 0 0-6.69-.58 40.06 40.06 0 0 0-6.68.57Zm6.69 114.31a13.91 13.91 0 0 1-13.81-12.41h27.62a13.91 13.91 0 0 1-13.81 12.41Zm44-15.41h-88a5.44 5.44 0 0 1-5.43-5.43c0-2.85 1.42-5.53 3.34-8.74h92.14c1.92 3.21 3.34 5.89 3.34 8.74a5.44 5.44 0 0 1-5.41 5.43Z" />
        </SvgWrapper>
    );
}
export default SvgBellLg;
