import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgOffGridLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M117.45 111.09H70.68a2.69 2.69 0 1 1 0-5.37h11.1a9.29 9.29 0 0 0 9.28-9.27V62.29a1.5 1.5 0 1 0-3 0v34.16a6.28 6.28 0 0 1-6.28 6.27h-11.1a5.69 5.69 0 1 0 0 11.37h46.77a3.59 3.59 0 0 1 3.58 3.52 3.59 3.59 0 0 1-3.56 3.63c-12.53.06-55.1.24-76.76.09a14.73 14.73 0 0 1-14.62-14.87V58h17.62a1.5 1.5 0 0 0 1.5-1.5V5.11a1.5 1.5 0 0 0-1.5-1.5H5.47A1.5 1.5 0 0 0 4 5.11v51.36A1.5 1.5 0 0 0 5.47 58h17.62v48.48a17.72 17.72 0 0 0 17.61 17.85c6 0 13.5.06 21.56.06 21.26 0 46.14-.11 55.23-.15a6.59 6.59 0 0 0 6.54-6.67 6.61 6.61 0 0 0-6.58-6.48ZM7 6.61h35.21V55H7ZM89.19 15.69a1.5 1.5 0 0 0 1.5-1.5V5.11a1.5 1.5 0 1 0-3 0v9.08a1.5 1.5 0 0 0 1.5 1.5ZM106.29 22.67a1.53 1.53 0 0 0 1.06-.44l6.42-6.42a1.51 1.51 0 0 0 0-2.12 1.49 1.49 0 0 0-2.12 0l-6.43 6.42a1.51 1.51 0 0 0 0 2.12 1.53 1.53 0 0 0 1.07.44ZM111.94 38.19a1.5 1.5 0 0 0 1.5 1.5h9.09a1.5 1.5 0 0 0 0-3h-9.09a1.51 1.51 0 0 0-1.5 1.5ZM105.41 54.23a1.49 1.49 0 0 0 0 2.12l6.42 6.43a1.5 1.5 0 1 0 2.17-2.13l-6.42-6.42a1.51 1.51 0 0 0-2.17 0Z" />
            <path d="m71.28 54.42-6.42 6.42a1.51 1.51 0 0 0 0 2.12 1.53 1.53 0 0 0 1.06.44A1.49 1.49 0 0 0 67 63l6.43-6.42a1.5 1.5 0 0 0-2.13-2.12ZM56.1 40h9.09a1.5 1.5 0 0 0 0-3H56.1a1.5 1.5 0 0 0 0 3ZM71.1 22.41a1.47 1.47 0 0 0 1.06.44 1.45 1.45 0 0 0 1.06-.44 1.49 1.49 0 0 0 0-2.12l-6.42-6.42A1.5 1.5 0 0 0 64.68 16ZM89.31 55.28a17 17 0 1 0-17-17 17 17 0 0 0 17 17Zm0-30.92a14 14 0 1 1-14 14 14 14 0 0 1 14-14ZM31.59 29.8a1.49 1.49 0 0 0-1.31-.8h-8.61l6.93-10.69a1.5 1.5 0 0 0-2.52-1.63l-8.43 13A1.5 1.5 0 0 0 18.91 32h8.62L20.3 43.28a1.51 1.51 0 0 0 .45 2.07 1.55 1.55 0 0 0 .81.24 1.52 1.52 0 0 0 1.27-.69l8.71-13.57a1.5 1.5 0 0 0 .05-1.53Z" />
        </SvgWrapper>
    );
}
export default SvgOffGridLg;
