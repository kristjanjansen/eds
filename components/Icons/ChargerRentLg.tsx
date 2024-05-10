import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgChargerRentLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path
                d="M50.8 33a2 2 0 0 0-1.65-1.55 1.53 1.53 0 0 0-.37 0h-3L48 25.06l-6.06 7a2 2 0 0 0-.52 1.39 1.77 1.77 0 0 0 .77 1.38 1.74 1.74 0 0 0 1 .3h3l-2.1 6.15c-.66 2-1.28 4-1.94 6H42c-.59-1.9-1.24-4-1.9-6l-4-11.69a2 2 0 1 0-3.76 1.31l6.56 18.41v.08a3.36 3.36 0 0 0 3.1 2.19h.16a3.36 3.36 0 0 0 3.08-2.21l5.44-15.13a1 1 0 0 0 0-.16A1.87 1.87 0 0 0 50.8 33Z"
                data-name="Shape 14"
            />
            <path d="M108.72 65.23V59.1a17.72 17.72 0 1 0-17.47.42V93a1.47 1.47 0 0 0 .44 1.06l7.31 7.32a1.5 1.5 0 0 0 2.12 0l7.24-7.23a1.5 1.5 0 0 0 .43-1.11l-.1-3.06a1.48 1.48 0 0 0-.43-1l-3.19-3.18 3-3a1.49 1.49 0 0 0 0-2.12l-3-3 3-3a1.49 1.49 0 0 0 0-2.12l-3-3 3.19-3.18a1.52 1.52 0 0 0 .46-1.15Zm-3-7v6.39l-3.81 3.8a1.51 1.51 0 0 0 0 2.12l3 3-3 3a1.51 1.51 0 0 0 0 2.12l3 3-3 3a1.51 1.51 0 0 0 0 2.12l3.83 3.82.05 1.82-5.71 5.71-5.83-5.83V58.6a1.49 1.49 0 0 0-.87-1.36 14.73 14.73 0 1 1 13.13-.34 1.49 1.49 0 0 0-.79 1.32Z" />
            <path d="M99.61 33.11a5.71 5.71 0 1 0 5.71 5.71 5.71 5.71 0 0 0-5.71-5.71Zm0 8.42a2.71 2.71 0 1 1 2.71-2.71 2.71 2.71 0 0 1-2.71 2.71ZM69.1 5.45H14a3.35 3.35 0 0 0-3.34 3.34v110.42a3.35 3.35 0 0 0 3.34 3.34h55.1a3.34 3.34 0 0 0 3.33-3.34V8.79a3.34 3.34 0 0 0-3.33-3.34Zm.33 113.76a.34.34 0 0 1-.33.34H14a.34.34 0 0 1-.34-.34V8.79a.34.34 0 0 1 .34-.34h55.1a.34.34 0 0 1 .33.34Z" />
            <path d="M57.89 72.77H25.21a3.47 3.47 0 0 0-3.46 3.46v32.68a3.48 3.48 0 0 0 3.46 3.47h32.68a3.48 3.48 0 0 0 3.47-3.47V76.23a3.47 3.47 0 0 0-3.47-3.46Zm.47 36.14a.47.47 0 0 1-.47.47H25.21a.47.47 0 0 1-.46-.47V76.23a.47.47 0 0 1 .46-.46h32.68a.47.47 0 0 1 .47.46Z" />
            <path d="M41.55 79.42A13.15 13.15 0 1 0 54.7 92.57a13.16 13.16 0 0 0-13.15-13.15Zm0 23.3A10.15 10.15 0 1 1 51.7 92.57a10.16 10.16 0 0 1-10.15 10.15Z" />
        </SvgWrapper>
    );
}
export default SvgChargerRentLg;
