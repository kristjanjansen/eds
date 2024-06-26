import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgInfo(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            {...props}
        >
            <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm2.08 15.5c-.51.2-.92.36-1.23.46a3.17 3.17 0 0 1-1.07.16 2.13 2.13 0 0 1-1.45-.45 1.47 1.47 0 0 1-.52-1.16 3.6 3.6 0 0 1 0-.56c0-.19.07-.4.12-.64L8.62 11c.05-.22.1-.42.14-.62a2.61 2.61 0 0 0 .06-.53.82.82 0 0 0-.18-.61A1 1 0 0 0 8 9.1a1.55 1.55 0 0 0-.51.08L7 9.33l.17-.71c.42-.17.83-.31 1.21-.44A3.7 3.7 0 0 1 9.46 8a2.11 2.11 0 0 1 1.44.45 1.51 1.51 0 0 1 .5 1.16v.53a4.56 4.56 0 0 1-.13.68l-.64 2.27a6.3 6.3 0 0 0-.15.62 3.51 3.51 0 0 0-.06.53.78.78 0 0 0 .2.62 1.15 1.15 0 0 0 .7.16 1.75 1.75 0 0 0 .53-.08 2.69 2.69 0 0 0 .43-.14ZM12 6.29a1.53 1.53 0 0 1-1.08.42 1.57 1.57 0 0 1-1.09-.42 1.36 1.36 0 0 1 0-2 1.57 1.57 0 0 1 1.09-.42 1.53 1.53 0 0 1 1.08.4 1.36 1.36 0 0 1 0 2Z" />
        </SvgWrapper>
    );
}
export default SvgInfo;
