import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCalculatorLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M105.28 2.71H22.72A9.73 9.73 0 0 0 13 12.43v103.14a9.73 9.73 0 0 0 9.72 9.72h82.56a9.73 9.73 0 0 0 9.72-9.72V12.43a9.73 9.73 0 0 0-9.72-9.72ZM112 115.57a6.72 6.72 0 0 1-6.72 6.72H22.72a6.73 6.73 0 0 1-6.72-6.72V12.43a6.73 6.73 0 0 1 6.72-6.72h82.56a6.72 6.72 0 0 1 6.72 6.72Z" />
            <path d="M98.4 16.06H29.6a1.5 1.5 0 0 0-1.5 1.5v16.51a1.5 1.5 0 0 0 1.5 1.5h68.8a1.5 1.5 0 0 0 1.5-1.5V17.56a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 16.51H31.1V19.06h65.8ZM98.4 40H29.6a1.5 1.5 0 0 0-1.5 1.5v68.95a1.5 1.5 0 0 0 1.5 1.5h68.8a1.5 1.5 0 0 0 1.5-1.5V41.49A1.5 1.5 0 0 0 98.4 40ZM51 108.94H31.1V89H51Zm0-23H31.1V66H51Zm0-23H31.1V43H51Zm22.94 46H54V89h20Zm0-23H54V66h20Zm0-23H54V43h20Zm22.93 46H77V66h19.9Zm0-46H77V43h19.9Z" />
        </SvgWrapper>
    );
}
export default SvgCalculatorLg;
