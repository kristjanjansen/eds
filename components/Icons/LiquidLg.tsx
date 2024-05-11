import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgLiquidLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M103.64 102.86a43.58 43.58 0 0 0 4.2-18.7 44.27 44.27 0 0 0-26.21-40.09v-29h.51a7.55 7.55 0 0 0 0-15.1H45.86a7.55 7.55 0 1 0 0 15.1h.51v29a44.27 44.27 0 0 0-26.21 40.09c0 .67 0 1.33.05 2a43.82 43.82 0 0 0 83.4 16.68s.02.03.03.02ZM45.86 12.1a4.55 4.55 0 1 1 0-9.1h36.28a4.55 4.55 0 0 1 0 9.1H45.86Zm2.58 34.34a1.49 1.49 0 0 0 .93-1.38v-30h29.26v30a1.49 1.49 0 0 0 .93 1.38 41.25 41.25 0 0 1 25.28 37.72 40.67 40.67 0 0 1-3.57 16.66L85 101c-7.11-.23-17.12-3.27-22.51-8.62l-.11-.12C57.5 87.53 47 84.68 39.61 84.68H23.18v-.52a41.25 41.25 0 0 1 25.26-37.72ZM64 125a40.89 40.89 0 0 1-40.67-37.32h16.28c6.61 0 16.39 2.58 20.67 6.77l.1.1c5.94 5.89 16.83 9.23 24.59 9.49l14.8-.2A40.87 40.87 0 0 1 64 125Z" />
            <path d="M90.21 93.32a5.13 5.13 0 1 0-5.13-5.13 5.13 5.13 0 0 0 5.13 5.13Zm0-7.26a2.13 2.13 0 1 1-2.13 2.13 2.14 2.14 0 0 1 2.13-2.13ZM76.1 79.61a7.55 7.55 0 1 0-7.55-7.55 7.55 7.55 0 0 0 7.55 7.55Zm0-12.09a4.55 4.55 0 1 1-4.55 4.54 4.55 4.55 0 0 1 4.55-4.54Z" />
        </SvgWrapper>
    );
}
export default SvgLiquidLg;
