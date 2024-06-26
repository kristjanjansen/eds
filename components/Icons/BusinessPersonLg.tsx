import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgBusinessPersonLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M63.8 78.7c-12.3 0-23.2-9.6-26.9-23.4-2.4-.6-4-2.3-4.5-4.9L31.3 44c-.4-2.5-.1-4.5 1.1-6 1-1.3 2.7-2.1 4.7-2.2.8 0 1.5.6 1.6 1.4 0 .8-.6 1.5-1.4 1.6-.6 0-1.8.2-2.4 1-.6.8-.8 2-.5 3.6l1.1 6.4c.5 2.4 2.3 2.6 2.9 2.7.6.1 1.2.5 1.3 1.1 3.1 13 13 22 24.2 22s21.1-9.1 24.2-22c.1-.6.7-1.1 1.3-1.1.6-.1 2.4-.3 2.9-2.7l1.1-6.3c.3-1.6.1-2.8-.5-3.6-.7-.8-1.8-1-2.5-1-.8 0-1.5-.7-1.4-1.6 0-.8.7-1.5 1.6-1.4 2 .1 3.6.9 4.7 2.2 1.2 1.5 1.5 3.5 1.1 6l-1.1 6.4c-.5 2.6-2.1 4.3-4.5 4.9-3.8 13.7-14.7 23.2-27 23.3zM124 125.5c-.7 0-1.4-.5-1.5-1.3l-3-18.7-33.7-17.1c-.7-.4-1-1.3-.7-2 .4-.7 1.3-1 2-.7l34.3 17.5c.4.2.7.6.8 1.1l3.1 19.4c.1.8-.4 1.6-1.2 1.7.1.1 0 .1-.1.1zM4 125.5h-.2c-.8-.1-1.4-.9-1.2-1.7l3.1-19.4c.1-.5.4-.9.8-1.1l35.4-17.5c.7-.4 1.6-.1 2 .7.4.7.1 1.6-.7 2L8.5 105.6l-3 18.7c-.1.7-.8 1.2-1.5 1.2z" />
            <path d="M95 38.8h-5.2c-14 0-23.5 0-30.8-10.5-3.2 5.2-9 10.5-19.3 10.5h-6.9c-.8 0-1.5-.7-1.5-1.5 0-19.9 14-34.8 32.6-34.8 18.7 0 32.8 15 32.8 34.8-.2.9-.9 1.5-1.7 1.5zM58.8 23.9c.5 0 1 .3 1.3.7 6.6 11.2 14.8 11.2 29.6 11.2h3.7C92.8 18.4 80.2 5.5 63.7 5.5c-16.4 0-28.9 12.9-29.6 30.3h5.4c8.3 0 14.3-3.7 17.9-11.1.3-.5.8-.8 1.4-.8zM52.4 125.5h-.3c-.8-.2-1.3-1-1.1-1.8l7.3-31.8c.2-.8 1-1.3 1.8-1.1.8.2 1.3 1 1.1 1.8l-7.3 31.8c-.2.6-.8 1.1-1.5 1.1zM75.3 125.5c-.7 0-1.3-.5-1.5-1.2l-7.3-31.8c-.2-.8.3-1.6 1.1-1.8.8-.2 1.6.3 1.8 1.1l7.3 31.8c.2.8-.3 1.6-1.1 1.8-.1.1-.2.1-.3.1z" />
            <path d="M63.8 94.7c-4.5 0-8.5-2.9-10-7.1-.3-.8.1-1.6.9-1.9.8-.3 1.6.1 1.9.9 1.1 3.1 3.9 5.1 7.2 5.1 3.2 0 6.1-2.1 7.2-5.1.3-.8 1.1-1.2 1.9-.9.8.3 1.2 1.1.9 1.9-1.4 4.2-5.5 7.1-10 7.1z" />
        </SvgWrapper>
    );
}
export default SvgBusinessPersonLg;
