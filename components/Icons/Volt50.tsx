import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgVolt50(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path
                d="M63.29 51.77a4.63 4.63 0 0 0-3.82-3.59 5 5 0 0 0-.86 0h-7l5.17-14.77-14 16.07a4.56 4.56 0 0 0-1.19 3.22 4 4 0 0 0 1.78 3.18 3.88 3.88 0 0 0 2.23.69h7.06l-4.9 14.18c-1.51 4.61-2.95 9.3-4.46 13.76H43c-1.37-4.39-2.88-9.3-4.4-13.76l-9.21-27a4.6 4.6 0 1 0-8.69 3l15.09 42.64c0 .06 0 .11.07.17A7.79 7.79 0 0 0 43 94.64h.37a7.81 7.81 0 0 0 7.13-5.1.78.78 0 0 1 0-.14l12.56-34.94a3 3 0 0 0 .13-.39 4.55 4.55 0 0 0 .1-2.3Z"
                data-name="Shape 14"
            />
            <path d="M76.39 77.73a9.93 9.93 0 0 0 7.13-2.49 8.85 8.85 0 0 0 2.62-6.74 8.27 8.27 0 0 0-2.32-6.19A8.64 8.64 0 0 0 77.54 60a7.18 7.18 0 0 0-4.14 1.07l.18-5h10.24c.44 0 .66-.2.66-.62v-4a.59.59 0 0 0-.66-.67H68.89a.59.59 0 0 0-.66.67l-.48 13a.73.73 0 0 0 .55.74l2.85.92A.94.94 0 0 0 72 66a7.57 7.57 0 0 1 4.36-1.22c2.68 0 4 1.18 4 3.54q0 4.07-4.18 4.07a9.83 9.83 0 0 1-5.68-1.89c-.37-.29-.68-.28-.93 0l-2.29 3a.68.68 0 0 0 0 .92 12.89 12.89 0 0 0 9.11 3.31ZM104.92 52.84a11 11 0 0 0-13.79 0c-1.77 1.63-2.66 4-2.66 7v8.27q0 4.7 2.66 7.17a10.86 10.86 0 0 0 13.79 0c1.76-1.65 2.65-4 2.65-7.17v-8.25c0-3.06-.89-5.39-2.65-7.02Zm-3 15.55a3.76 3.76 0 0 1-1.07 3 4.55 4.55 0 0 1-5.54 0 3.73 3.73 0 0 1-1.08-3v-8.64a3.76 3.76 0 0 1 1.08-3 4.55 4.55 0 0 1 5.54 0 3.79 3.79 0 0 1 1.07 3ZM69.4 87.92l3.13-3.08a.16.16 0 0 0 .06-.14s-.06-.07-.13-.07h-1.08a.24.24 0 0 0-.2.09L67.84 88v-6.13c0-.11-.06-.17-.18-.17h-.87c-.11 0-.16.06-.16.17v10.24a.14.14 0 0 0 .16.16h.87c.12 0 .18-.06.18-.16v-2.63l.75-.73 2.81 3.41a.28.28 0 0 0 .22.11h1.09q.24 0 .09-.21ZM86.63 81.7h-1a.18.18 0 0 0-.18.15l-1.54 5.78q-.31 1.2-.72 3.12-.31-1.25-.9-3.3L80.62 82a.18.18 0 0 0-.18-.14h-1a.18.18 0 0 0-.18.14l-1.63 5.44q-.52 1.81-.9 3.3c-.21-1-.45-2-.74-3.12l-1.53-5.78a.16.16 0 0 0-.18-.15h-1c-.14 0-.19.07-.15.2L76 92.12a.19.19 0 0 0 .19.15h1.08a.18.18 0 0 0 .18-.15l1.7-5.51c.31-1 .58-2 .81-3.12q.25 1.26.81 3.12l1.7 5.51a.16.16 0 0 0 .18.15h1.07a.18.18 0 0 0 .18-.15l2.88-10.22c.04-.13-.01-.2-.15-.2Z" />
        </SvgWrapper>
    );
}
export default SvgVolt50;
