import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTreeLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M121.84 124.5H101.6c.54-5.08 3.81-9 7.75-9a1.5 1.5 0 0 0 0-3c-5.57 0-10.17 5.27-10.77 12H91c.67-11.22 8.79-20.44 18.32-20.44a1.5 1.5 0 0 0 0-3c-11.15 0-20.63 10.59-21.33 23.44H65.5V94.43a47 47 0 1 0-3 0v30.07H33.64a15.21 15.21 0 0 0-15.12-13.7 1.5 1.5 0 1 0 0 3 12.21 12.21 0 0 1 12.1 10.7H6.16a1.5 1.5 0 1 0 0 3h115.68a1.5 1.5 0 0 0 0-3ZM20 47.48a44 44 0 1 1 45.48 44V77.27l24.1-15.64A1.5 1.5 0 0 0 88 59.11L65.5 73.7v-36a1.5 1.5 0 0 0-3 0v18.4l-11.82-5.56a1.5 1.5 0 1 0-1.27 2.72l13.09 6.11v32.06A44 44 0 0 1 20 47.48Z" />
        </SvgWrapper>
    );
}
export default SvgTreeLg;
