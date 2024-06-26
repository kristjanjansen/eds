import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSocketLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M53 60.57A3.43 3.43 0 1 0 56.41 64 3.44 3.44 0 0 0 53 60.57ZM75 60.57A3.43 3.43 0 1 0 78.45 64 3.43 3.43 0 0 0 75 60.57Z" />
            <path d="M64 30.27A33.73 33.73 0 1 0 97.69 64 33.77 33.77 0 0 0 64 30.27Zm0 64.46A30.73 30.73 0 1 1 94.69 64 30.76 30.76 0 0 1 64 94.73Z" />
            <path d="M109.19 6.46H18.81A12.36 12.36 0 0 0 6.46 18.81v90.38a12.36 12.36 0 0 0 12.35 12.35h90.38a12.36 12.36 0 0 0 12.35-12.35V18.81a12.36 12.36 0 0 0-12.35-12.35Zm9.35 102.73a9.37 9.37 0 0 1-9.35 9.35H18.81a9.37 9.37 0 0 1-9.35-9.35V18.81a9.37 9.37 0 0 1 9.35-9.35h90.38a9.37 9.37 0 0 1 9.35 9.35Z" />
        </SvgWrapper>
    );
}
export default SvgSocketLg;
