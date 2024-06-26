import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgReactiveLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M97.3 118H30.7c-.8 0-1.5-.7-1.5-1.5v-105c0-.8.7-1.5 1.5-1.5h66.7c.8 0 1.5.7 1.5 1.5v105c-.1.8-.7 1.5-1.6 1.5zm-65.1-3h63.7V13H32.2v102z" />
            <path d="M97.3 96.4H30.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h66.7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.6 1.5zM50.4 33h-9.8c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h9.8c.8 0 1.5.7 1.5 1.5v9.8c0 .8-.7 1.5-1.5 1.5zM42 30h6.8v-6.8H42V30zM68.9 33h-9.8c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h9.8c.8 0 1.5.7 1.5 1.5v9.8c0 .8-.6 1.5-1.5 1.5zm-8.3-3h6.8v-6.8h-6.8V30zM87.5 33h-9.8c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h9.8c.8 0 1.5.7 1.5 1.5v9.8c0 .8-.7 1.5-1.5 1.5zm-8.4-3H86v-6.8h-6.8V30zM45.4 47.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.3 5.3-5.3 5.3zm0-7.6c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3zM45.4 61.3c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.3 5.3-5.3 5.3zm0-7.5c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM38.8 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.6 1.5-1.5 1.5zM48.7 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5zM58.5 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.6 1.5-1.5 1.5zM68.4 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5zM78.3 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5zM88.1 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5z" />
        </SvgWrapper>
    );
}
export default SvgReactiveLg;
