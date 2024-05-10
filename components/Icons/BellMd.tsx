import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBellMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M48.48 9.26a11 11 0 1 0 11 11 11 11 0 0 0-11-11Zm0 19.93a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z" />
            <path d="M48.48 23.1a1 1 0 0 0 1-1v-7.25a1 1 0 0 0-2 0v7.25a1 1 0 0 0 1 1ZM48.49 24.3a1.14 1.14 0 1 0 1.14 1.14 1.14 1.14 0 0 0-1.14-1.14ZM29.67 12.7a12.48 12.48 0 0 0-12.18 12.79 1 1 0 0 0 1 1 1 1 0 0 0 1-1A10.48 10.48 0 0 1 29.72 14.7a1 1 0 0 0 0-2Z" />
            <path d="M49.73 34.58a1 1 0 0 0-2 .11 22.24 22.24 0 0 0 3.39 10.54H9.26a22.1 22.1 0 0 0 3.42-12v-7.42a17.5 17.5 0 0 1 17.5-17.5 17.44 17.44 0 0 1 8.37 2.13 1 1 0 1 0 1-1.76A19.6 19.6 0 0 0 35.15 7V6a5 5 0 1 0-9.93 0v1a19.47 19.47 0 0 0-14.54 18.81v7.39c0 5.85-2.13 9.35-3.84 12.17-1.22 2-2.28 3.76-2.28 5.82a4.35 4.35 0 0 0 4.35 4.35H21.8a8.44 8.44 0 0 0 16.77 0h12.89a4.35 4.35 0 0 0 4.35-4.35c0-2.06-1.06-3.81-2.28-5.82a21.8 21.8 0 0 1-3.8-10.79ZM27.22 6a3 3 0 1 1 5.93 0v.57a19.57 19.57 0 0 0-3-.23 19.48 19.48 0 0 0-3 .24Zm3 55a6.45 6.45 0 0 1-6.36-5.46h12.69A6.46 6.46 0 0 1 30.19 61Zm21.27-7.46H8.91a2.35 2.35 0 0 1-2.35-2.35 8.17 8.17 0 0 1 1.49-4h44.27a8.17 8.17 0 0 1 1.49 4 2.35 2.35 0 0 1-2.35 2.35Z" />
        </SvgWrapper>
    );
}
export default SvgBellMd;
