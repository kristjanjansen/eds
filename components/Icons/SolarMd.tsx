import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSolarMd(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M124.8 126.5H35.1c-.8 0-1.5-.6-1.7-1.3L1.5 3.7c-.1-.5 0-1.1.3-1.6s.9-.7 1.4-.7h89.7c.8 0 1.5.6 1.7 1.3l31.9 121.5c.1.5 0 1.1-.3 1.6s-.8.7-1.4.7zm-88.3-3.6h86L91.5 5.1h-86l31 117.8z" />
            <path d="M124.8 127H35.1c-1 0-2-.7-2.2-1.7L1 3.9c-.2-.7 0-1.4.4-2 .4-.6 1.1-.9 1.8-.9h89.7c1 0 2 .7 2.2 1.7L127 124.1c.2.7 0 1.4-.4 2-.4.6-1.1.9-1.8.9zM3.2 2c-.4 0-.8.2-1 .5-.3.3-.4.7-.3 1.1l31.9 121.5c.2.6.7 1 1.3 1h89.7c.4 0 .8-.2 1-.5.2-.3.3-.7.2-1.1L94.2 2.9c-.2-.6-.7-1-1.3-1H3.2zm119.9 121.4h-87l-.1-.4L4.9 4.6h87l.1.3 31.1 118.5zm-86.2-1h85L91.1 5.6h-85l30.8 116.8z" />
            <path d="M3.3 126.5c-.5 0-.9-.2-1.3-.5-.7-.7-.7-1.8 0-2.5l25.2-24.8c.7-.7 1.8-.7 2.5 0s.7 1.8 0 2.5L4.6 126c-.3.4-.8.5-1.3.5z" />
            <path d="M3.3 127c-.6 0-1.2-.2-1.6-.7-.4-.4-.7-1-.7-1.6 0-.6.2-1.2.7-1.6L27 98.3c.9-.9 2.4-.9 3.2 0 .4.4.7 1 .7 1.6 0 .6-.2 1.2-.7 1.6L5 126.4c-.5.4-1.1.6-1.7.6zm25.3-28.4c-.3 0-.7.1-.9.4L2.4 123.8c-.2.2-.4.6-.4.9 0 .3.1.7.4.9.5.5 1.3.5 1.8 0l25.2-24.8c.2-.2.4-.6.4-.9 0-.3-.1-.7-.4-.9-.1-.2-.5-.4-.8-.4zM65.1 126.5c-.8 0-1.5-.5-1.7-1.3L31.5 3.7c-.3-1 .3-1.9 1.3-2.2 1-.3 1.9.3 2.2 1.3l31.9 121.5c.3 1-.3 1.9-1.3 2.2h-.5z" />
            <path d="M65.1 127c-1 0-2-.7-2.2-1.7L31 3.9c-.3-1.2.4-2.5 1.6-2.8.6-.2 1.2-.1 1.7.2.5.3.9.8 1.1 1.4l31.9 121.5c.3 1.2-.4 2.5-1.6 2.8h-.6zM33.2 2h-.3c-.7.2-1.1.9-.9 1.6l31.9 121.5c.2.7.9 1.1 1.6.9.7-.2 1.1-.9.9-1.6L34.5 2.9c-.1-.3-.3-.6-.6-.8-.2-.1-.5-.1-.7-.1zM94.9 126.5c-.8 0-1.5-.5-1.7-1.3L61.3 3.7c-.3-1 .3-1.9 1.3-2.2 1-.3 1.9.3 2.2 1.3l31.9 121.5c.3 1-.3 1.9-1.3 2.2h-.5z" />
            <path d="M94.9 127c-1 0-2-.7-2.2-1.7L60.8 3.9c-.3-1.2.4-2.5 1.6-2.8.6-.2 1.2-.1 1.7.2.5.3.9.8 1.1 1.4l31.9 121.5c.3 1.2-.4 2.5-1.6 2.8h-.6zM63.1 2h-.3c-.7.2-1.1.9-.9 1.6l31.9 121.5c.2.7.9 1.1 1.6.9.7-.2 1.1-.9.9-1.6L64.3 2.9c-.1-.3-.3-.6-.6-.8-.2-.1-.4-.1-.6-.1z" />
            <path d="M32.4 116c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c21.7 0 40.1-40.5 40.3-40.9.6-1.2 13.7-30.2 30.7-30.2 1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8c-14.7 0-27.3 27.7-27.5 28-.8 1.9-19.5 43.1-43.5 43.1z" />
            <path d="M32.4 116.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3c11 0 21.2-10.9 27.8-20.1 7.3-10.1 12-20.4 12-20.5.6-1.2 13.8-30.4 31.2-30.4 1.3 0 2.3 1 2.3 2.3 0 1.3-1 2.3-2.3 2.3-14.3 0-26.9 27.5-27 27.7-.8 1.8-19.7 43.3-44 43.3zm71-74.6c-16.7 0-29.7 28.6-30.3 29.9-.2.4-18.6 41.2-40.8 41.2-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c23.7 0 42.3-41 43.1-42.7.1-.3 12.8-28.3 27.9-28.3.7 0 1.3-.6 1.3-1.3s-.5-1.4-1.2-1.4zM14.4 45c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8C33.7 41.4 50.5 9 53.7 2.5c.4-.9 1.5-1.3 2.4-.8.9.4 1.3 1.5.8 2.4C52.2 13.7 35.3 45 14.4 45z" />
            <path d="M14.4 45.5c-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3 19 0 35.7-32.2 38.9-38.6.3-.6.7-1 1.3-1.2.6-.2 1.2-.2 1.7.1.5.3 1 .7 1.2 1.3.2.6.2 1.2-.1 1.8-4.7 9.6-21.8 41.2-43 41.2zM55.3 2c-.1 0-.3 0-.4.1-.3.1-.6.3-.7.7C51 9.2 34 41.9 14.4 41.9c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c20.6 0 37.5-31.1 42.1-40.6.2-.3.2-.7.1-1-.1-.3-.3-.6-.7-.7-.2-.2-.4-.2-.6-.2z" />
        </SvgWrapper>
    );
}
export default SvgSolarMd;
