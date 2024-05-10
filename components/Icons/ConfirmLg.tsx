import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgConfirmLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M100.37 21.67H84.73v-6a1.5 1.5 0 0 0-1.5-1.5h-8.15c0-3.72-.5-8.2-4.71-10.86A12.42 12.42 0 0 0 64 1.45a12.42 12.42 0 0 0-6.33 1.86C53.42 6 53 10.45 52.92 14.17h-8.15a1.5 1.5 0 0 0-1.5 1.5v6H27.63a17 17 0 0 0-17 17v70.89a17 17 0 0 0 17 17h72.74a17 17 0 0 0 17-17v-70.9a17 17 0 0 0-17-16.99Zm-54.1-4.5h8.16a1.55 1.55 0 0 0 1.07-.45 1.51 1.51 0 0 0 .43-1.07c0-4.49.16-7.82 3.3-9.8A9.43 9.43 0 0 1 64 4.45a9.43 9.43 0 0 1 4.73 1.4c3.14 2 3.35 5.31 3.3 9.8a1.51 1.51 0 0 0 .43 1.07 1.55 1.55 0 0 0 1.07.45h8.16v13.9H46.27Zm68.09 92.38a14 14 0 0 1-14 14H27.63a14 14 0 0 1-14-14V38.66a14 14 0 0 1 14-14h15.64v7.9a1.5 1.5 0 0 0 1.5 1.5h38.46a1.5 1.5 0 0 0 1.5-1.5v-7.9h15.64a14 14 0 0 1 14 14Z" />
            <path d="M89.07 59.26 59.54 88.79l-11-17.19A1.5 1.5 0 1 0 46 73.22L58 92a1.5 1.5 0 0 0 1.1.68h.16a1.5 1.5 0 0 0 1.06-.44l30.87-30.86a1.51 1.51 0 0 0 0-2.12 1.49 1.49 0 0 0-2.12 0Z" />
        </SvgWrapper>
    );
}
export default SvgConfirmLg;
