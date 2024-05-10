import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBusLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M97.08 88.41a3 3 0 1 0 3 3 3 3 0 0 0-3-3ZM28.6 88.41a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
            <path d="M99.68 23.11H10.52c-3.7 0-6.71 3.48-6.71 7.76v57.2c0 4.28 3 7.76 6.71 7.76h5.36a13.46 13.46 0 0 0 25.44 0h43a13.46 13.46 0 0 0 25.44 0h4.78c6.68 0 9.06-.94 9.52-6.92a1.43 1.43 0 0 0 .09-.5V47.62a24.54 24.54 0 0 0-24.47-24.51Zm-35.34 34v-31h26.48v31Zm-29 0v-31h26v31ZM6.81 30.87c0-2.58 1.7-4.76 3.71-4.76h21.83v31h-4.63A20.94 20.94 0 0 1 6.81 36.17v-5.3Zm21.78 71a10.48 10.48 0 1 1 10.48-10.46 10.49 10.49 0 0 1-10.48 10.48Zm68.49 0a10.48 10.48 0 1 1 10.48-10.48 10.49 10.49 0 0 1-10.48 10.5Zm17.5-9.06h-4.1a13.48 13.48 0 1 0-26.8 0H42a13.48 13.48 0 1 0-26.81 0h-4.67c-2 0-3.71-2.18-3.71-4.76v-40.3a23.92 23.92 0 0 0 20.91 12.34h68.55A25 25 0 0 1 121.19 85v1.27c0 6.56-.5 6.56-6.61 6.56ZM96.27 57.09h-2.45v-31h5.86a21.54 21.54 0 0 1 21.51 21.51v24.84a27.93 27.93 0 0 0-24.92-15.35Z" />
        </SvgWrapper>
    );
}
export default SvgBusLg;
