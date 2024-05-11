import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLoginMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M39.07 63h-5.15a1 1 0 0 1-1-1v-5.2a1 1 0 0 1 .29-.71L45 44.27a9.17 9.17 0 0 1 15.31-9 9.17 9.17 0 0 1-8.58 15.41l-2.09 2.09a1 1 0 0 1-.71.29h-2V55a1 1 0 0 1-1 1H44v1.91a1 1 0 0 1-1 1h-1.9v2a1 1 0 0 1-.27.68l-1.03 1.12a1 1 0 0 1-.73.29Zm-4.15-2h3.72l.49-.52v-2.6a1 1 0 0 1 1-1H42V55a1 1 0 0 1 1-1h1.91v-1.94a1 1 0 0 1 1-1h2.61l2.2-2.2a1 1 0 0 1 1-.25 7.17 7.17 0 0 0 7.17-1.79 7.17 7.17 0 0 0 0-10.14 7.17 7.17 0 0 0-11.78 7.52 1 1 0 0 1-.23 1l-12 12ZM2 52.94h-.16A1 1 0 0 1 1 51.78l1.31-8.1a1 1 0 0 1 .54-.68l13-6.41h.08l4.17-2.06a1 1 0 1 1 .9 1.7l-3.08 1.52a12.15 12.15 0 0 0 9.07 4 12.34 12.34 0 0 0 9.21-4.15l-2.7-1.37a1 1 0 0 1-.5-1.35 1 1 0 0 1 1.34-.43l3.77 1.92 4 2a1 1 0 0 1-.91 1.79L38 38.54a14.34 14.34 0 0 1-11 5.21 14.16 14.16 0 0 1-11-5.08L4.19 44.51 3 52.1a1 1 0 0 1-1 .84Zm53.68-9.88a3.12 3.12 0 1 1 2.21-5.33 3.12 3.12 0 0 1-2.21 5.32Zm0-4.24a1.12 1.12 0 1 0 .79.33 1.09 1.09 0 0 0-.81-.33Zm-28.8-5.39c-5.22 0-9.86-4-11.49-9.8a2.88 2.88 0 0 1-1.93-2.27L13 18.69a3.87 3.87 0 0 1 .17-2.18 1 1 0 0 1-.25-.66c0-8.48 6-14.87 14-14.87s14 6.39 14 14.87a1 1 0 0 1-.25.66 3.78 3.78 0 0 1 .17 2.18l-.47 2.66a2.91 2.91 0 0 1-1.94 2.28c-1.68 5.8-6.33 9.8-11.55 9.8Zm-11.8-16.28a1.64 1.64 0 0 0-.08 1.19l.43 2.66a.88.88 0 0 0 .88.8 1 1 0 0 1 .87.76c1.24 5.23 5.23 8.88 9.7 8.88s8.46-3.65 9.7-8.87a1 1 0 0 1 .87-.77.89.89 0 0 0 .89-.81l.47-2.64a1.59 1.59 0 0 0-.12-1.19c-.24-.29-1-.3-1-.3-5.75 0-9.73 0-12.82-4.08a9.23 9.23 0 0 1-8.07 4.08s-1.44-.07-1.72.29Zm9.72-7.27a1 1 0 0 1 .86.5c2.64 4.47 5.77 4.47 12 4.47h1.15C38.38 8 33.38 3 26.85 3S15.38 8 14.93 14.85h1.86a7.36 7.36 0 0 0 7.11-4.4 1 1 0 0 1 .86-.57Z" />
        </SvgWrapper>
    );
}
export default SvgLoginMd;
