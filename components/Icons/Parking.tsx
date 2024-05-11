import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgParking(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M117.2 6.8a4 4 0 0 1 4 4v106.4a4 4 0 0 1-4 4H10.8a4 4 0 0 1-4-4V10.8a4 4 0 0 1 4-4h106.4m0-4H10.8a8 8 0 0 0-8 8v106.4a8 8 0 0 0 8 8h106.4a8 8 0 0 0 8-8V10.8a8 8 0 0 0-8-8Z" />
            <path d="M42.05 32h22.67q10.56 0 16.52 5.82t6 16q0 10.39-6 16.17t-16.52 5.79H51.55v18.9c0 .9-.42 1.34-1.26 1.34h-8.24c-.83 0-1.25-.44-1.25-1.34V33.32c0-.9.42-1.32 1.25-1.32Zm9.5 33.77h11.91q6.54 0 9.63-2.91t3.09-9q0-6.09-3.09-9T63.46 42H51.55Z" />
        </SvgWrapper>
    );
}
export default SvgParking;
