import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgGasMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M22.65 63a1 1 0 0 1-.53-.15c-.56-.34-13.77-8.63-13.77-21.72 0-9.67 5.28-15.55 10.86-21.78 4.45-5 9-10.08 11.82-17.7a1 1 0 0 1 .68-.65 1 1 0 0 1 .9.2c15.29 12.78 23 26.21 23 39.9 0 14.58-13.37 21.48-13.93 21.77a1 1 0 0 1-1.11-1.65s4.94-4.41 4.94-11c0-4.93-1.84-7.89-4-11.33a37.69 37.69 0 0 1-4.22-8.49 35 35 0 0 0-6.81 14.8 1 1 0 0 1-.76.79 1 1 0 0 1-1-.4A25.27 25.27 0 0 1 25.46 40c-3.87 4.45-5.83 9-5.83 13.68a9.27 9.27 0 0 0 3.58 7.49 1 1 0 0 1-.56 1.83Zm15.14-35.67a.82.82 0 0 1 .22 0 1 1 0 0 1 .75.73 33 33 0 0 0 4.53 9.83c2.19 3.54 4.26 6.88 4.26 12.38a16.1 16.1 0 0 1-1.75 7.23c3.61-3.24 7.85-8.69 7.85-16.39 0-12.75-7.15-25.35-21.25-37.46-3 7.26-7.59 12.43-11.7 17-5.55 6.2-10.35 11.55-10.35 20.45 0 6.9 4.17 12.44 7.75 15.9a11.9 11.9 0 0 1-.47-3.36c0-5.6 2.53-11.08 7.5-16.28a1 1 0 0 1 1.69.41A17.65 17.65 0 0 0 29 42.56a39.59 39.59 0 0 1 8-14.87 1 1 0 0 1 .79-.36Z" />
        </SvgWrapper>
    );
}
export default SvgGasMd;