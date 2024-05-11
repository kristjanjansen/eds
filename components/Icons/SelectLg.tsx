import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSelectLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M93.82 75.15H70.63V59a7 7 0 0 0-14 0v23.93h-2.79a9 9 0 0 0-6.74 2.77 7.64 7.64 0 0 0-1.87 6 45.07 45.07 0 0 0 1.27 5.11l5.34 18.62a.65.65 0 0 0 0 .13c2 5 5.33 6.11 7.8 6.11h32.87a8 8 0 0 0 8-8V81.42a6.32 6.32 0 0 0-6.69-6.27Zm-1.31 43.49H59.68c-2.25 0-3.87-1.36-5-4.14l-5.3-18.58a38.09 38.09 0 0 1-1.16-4.55 4.6 4.6 0 0 1 1.11-3.66 6 6 0 0 1 4.51-1.78h2.78v8.77a1.5 1.5 0 0 0 3 0V59a4 4 0 0 1 8 0v24.92a1.5 1.5 0 1 0 3 0v-5.77h7v5.77a1.5 1.5 0 0 0 3 0v-5.77h7v5.77a1.5 1.5 0 0 0 3 0v-5.77h3.28a3.3 3.3 0 0 1 3.63 3.27v32.24a5 5 0 0 1-5.02 4.98ZM126 13.09H93a1.5 1.5 0 0 0-1.5 1.5v44.86A1.5 1.5 0 0 0 93 61h33a1.5 1.5 0 0 0 1.5-1.5V14.59a1.5 1.5 0 0 0-1.5-1.5ZM124.5 58h-30V16.09h30ZM35 13.09H2a1.5 1.5 0 0 0-1.5 1.5v44.86A1.5 1.5 0 0 0 2 61h33a1.5 1.5 0 0 0 1.5-1.5V14.59a1.5 1.5 0 0 0-1.5-1.5ZM33.47 58H3.5V16.09h30Z" />
            <path d="M53.5 66.17a1.5 1.5 0 0 0-1.5-1.5h-7.85V9.36h39.7v55.31H75a1.5 1.5 0 0 0 0 3h10.35a1.5 1.5 0 0 0 1.5-1.5V7.86a1.5 1.5 0 0 0-1.5-1.5h-42.7a1.5 1.5 0 0 0-1.5 1.5v58.31a1.5 1.5 0 0 0 1.5 1.5H52a1.5 1.5 0 0 0 1.5-1.5Z" />
        </SvgWrapper>
    );
}
export default SvgSelectLg;
