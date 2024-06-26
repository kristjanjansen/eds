import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgAwardMd(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64 68.6c12.6 0 22.8-10.2 22.8-22.8C86.8 33.2 76.6 23 64 23c-12.6 0-22.8 10.2-22.8 22.8 0 12.5 10.2 22.8 22.8 22.8zm0-42.7c10.9 0 19.8 8.9 19.8 19.8S74.9 65.6 64 65.6s-19.8-8.9-19.8-19.8S53.1 25.9 64 25.9z" />
            <path d="M64 69.6c-13.1 0-23.8-10.7-23.8-23.8S50.9 21.9 64 21.9c13.1 0 23.8 10.7 23.8 23.8S77.1 69.6 64 69.6zm0-45.7c-12 0-21.8 9.8-21.8 21.8S52 67.6 64 67.6s21.8-9.8 21.8-21.8S76 23.9 64 23.9zm0 42.7c-11.5 0-20.8-9.4-20.8-20.8S52.5 24.9 64 24.9s20.8 9.4 20.8 20.8S75.5 66.6 64 66.6zm0-39.7c-10.4 0-18.8 8.5-18.8 18.8S53.6 64.6 64 64.6s18.8-8.5 18.8-18.8S74.4 26.9 64 26.9z" />
            <path d="M93.4 78.1c8.8-8 14.3-19.5 14.3-32.3C107.7 21.6 88.1 2 64 2S20.3 21.6 20.3 45.8c0 13.3 5.9 25.1 15.3 33.2l-12.8 35.5c-.2.5-.1 1.1.3 1.5.4.4.9.6 1.5.4l15.5-4.1 9.3 13c.3.4.7.6 1.2.6h.2c.6-.1 1-.5 1.2-1l12.7-35.3L77.4 125c.2.5.7.9 1.2 1h.2c.5 0 .9-.2 1.2-.6l9.3-13 15.5 4.1c.5.1 1.1 0 1.5-.4.4-.4.5-1 .3-1.5L93.4 78.1zM23.3 45.8C23.3 23.3 41.5 5 64 5c22.5 0 40.7 18.3 40.7 40.7 0 21.7-17.1 39.6-38.6 40.7-.3-.1-.7-.2-1.1 0 0 0-.1 0-.1.1h-.6l-.1-.1c-.4-.1-.8-.1-1.2.1-9.2-.2-17.6-3.5-24.4-8.8-.2-.3-.5-.6-.8-.7h-.1c-8.8-7.6-14.4-18.8-14.4-31.2zM50 121.3l-8.2-11.5c-.4-.5-1-.7-1.6-.6l-13.7 3.6L38 80.9c6.7 4.9 14.7 8 23.5 8.5L50 121.3zm39.1-12.1c-.6-.2-1.2.1-1.6.6l-8.2 11.5-11.5-32c8.7-.7 16.7-4 23.3-9.2l11.8 32.7-13.8-3.6z" />
            <path d="M78.8 127h-.3c-.9-.1-1.7-.8-2-1.6L64.6 92.6l-11.8 32.7c-.3.9-1.1 1.5-2 1.6h-.3c-.8 0-1.6-.4-2-1l-8.9-12.5-14.8 3.9c-.9.2-1.9 0-2.5-.7-.6-.7-.8-1.7-.5-2.5l12.6-34.9a44.76 44.76 0 0 1-15.1-33.5C19.3 21.1 39.3 1 64 1c24.7 0 44.7 20.1 44.7 44.7 0 12.3-5.1 24.2-14.1 32.6l12.9 35.8c.3.9.1 1.8-.5 2.5s-1.6 1-2.5.7l-14.8-3.9-8.9 12.5c-.4.7-1.2 1.1-2 1.1zm-38.4-15.8 9.7 13.6c.1.1.2.2.4.2.3 0 .4-.2.5-.3l13.4-37.2h-.2l-.3-.2h-.3l-.2.1h-.2c-9.2-.2-17.8-3.3-25-9l-.2-.1-.1-.2c0-.1-.1-.2-.3-.2l-.3-.1-.2-.1c-9.4-8-14.8-19.6-14.8-31.9C22.3 22.7 41 4 64 4c23 0 41.7 18.7 41.7 41.7 0 22.2-17.4 40.5-39.6 41.7h-.2l-.2-.1c-.1 0-.2-.1-.4 0l-.2.1h-.3l13.4 37.2c.1.2.2.3.4.3s.4-.1.5-.2l9.7-13.6 16.1 4.3c.2 0 .4 0 .5-.1.1-.1.2-.3.1-.5l-13.4-37 .5-.5c8.9-8.1 14-19.6 14-31.6C106.7 22.2 87.6 3 64 3S21.3 22.2 21.3 45.8c0 12.4 5.4 24.3 14.9 32.4l.5.4-13.1 36.2c-.1.2 0 .4.1.5.1.1.3.2.5.1l16.2-4.2zm23.3-25.9c.3 0 .6 0 .8.1h.1c.5-.2 1-.2 1.6 0 21-1.2 37.5-18.6 37.5-39.7C103.7 23.8 85.9 6 64 6 42.1 6 24.3 23.8 24.3 45.8c0 11.6 5.1 22.6 14 30.2.5.2 1 .6 1.2 1 6.7 5.3 14.8 8.2 23.4 8.5.3-.1.5-.2.8-.2zm-13.4 38.1L41 110.3c-.1-.2-.3-.2-.5-.2L25 114.2l12.6-34.9 1.1.8c6.7 5 14.7 7.8 23 8.3l1.3.1-12.7 34.9zm-9.7-15.3c.8 0 1.6.4 2 1l7.1 10 10.4-28.8c-7.8-.7-15.2-3.4-21.6-7.8l-10.4 28.8 11.8-3.1c.3-.1.5-.1.7-.1zm38.3 15.3-12.6-35 1.3-.1c8.3-.7 16.2-3.8 22.7-9l1.1-.9 12.9 35.8-15.5-4.1c-.2-.1-.4 0-.5.2l-9.4 13.1zm-9.8-33.2 10.5 29 7.1-10c.6-.8 1.7-1.2 2.7-1l11.8 3.1-10.7-29.5c-6.3 4.6-13.7 7.5-21.4 8.4z" />
        </SvgWrapper>
    );
}
export default SvgAwardMd;
