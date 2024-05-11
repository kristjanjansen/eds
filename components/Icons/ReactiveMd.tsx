import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgReactiveMd(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M97.3 118H30.7c-.8 0-1.5-.7-1.5-1.5v-105c0-.8.7-1.5 1.5-1.5h66.7c.8 0 1.5.7 1.5 1.5v105c-.1.8-.7 1.5-1.6 1.5zm-65.1-3h63.7V13H32.2v102z" />
            <path d="M97.3 118.5H30.7c-1.1 0-2-.9-2-2v-105c0-1.1.9-2 2-2h66.7c1.1 0 2 .9 2 2v105c-.1 1.1-1 2-2.1 2zm-66.6-108c-.6 0-1 .4-1 1v105c0 .6.4 1 1 1h66.7c.6 0 1-.4 1-1v-105c0-.6-.4-1-1-1H30.7zm65.6 105H31.7v-103h64.7v103zm-63.6-1h62.7v-101H32.7v101z" />
            <path d="M97.3 96.4H30.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h66.7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.6 1.5z" />
            <path d="M97.3 96.9H30.7c-1.1 0-2-.9-2-2s.9-2 2-2h66.7c1.1 0 2 .9 2 2s-1 2-2.1 2zm-66.6-3c-.6 0-1 .4-1 1s.4 1 1 1h66.7c.6 0 1-.4 1-1s-.4-1-1-1H30.7zM50.4 33h-9.8c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h9.8c.8 0 1.5.7 1.5 1.5v9.8c0 .8-.7 1.5-1.5 1.5zM42 30h6.8v-6.8H42V30z" />
            <path d="M50.4 33.5h-9.8c-1.1 0-2-.9-2-2v-9.8c0-1.1.9-2 2-2h9.8c1.1 0 2 .9 2 2v9.8c0 1.1-.9 2-2 2zm-9.9-12.9c-.6 0-1 .4-1 1v9.8c0 .6.4 1 1 1h9.8c.6 0 1-.4 1-1v-9.8c0-.6-.4-1-1-1h-9.8zm8.9 9.9h-7.8v-7.8h7.8v7.8zm-6.9-1h5.8v-5.8h-5.8v5.8zM68.9 33h-9.8c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h9.8c.8 0 1.5.7 1.5 1.5v9.8c0 .8-.6 1.5-1.5 1.5zm-8.3-3h6.8v-6.8h-6.8V30z" />
            <path d="M68.9 33.5h-9.8c-1.1 0-2-.9-2-2v-9.8c0-1.1.9-2 2-2h9.8c1.1 0 2 .9 2 2v9.8c0 1.1-.9 2-2 2zm-9.8-12.9c-.6 0-1 .4-1 1v9.8c0 .6.4 1 1 1h9.8c.6 0 1-.4 1-1v-9.8c0-.6-.4-1-1-1h-9.8zm8.8 9.9h-7.8v-7.8h7.8v7.8zm-6.8-1h5.8v-5.8h-5.8v5.8zM87.5 33h-9.8c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h9.8c.8 0 1.5.7 1.5 1.5v9.8c0 .8-.7 1.5-1.5 1.5zm-8.4-3H86v-6.8h-6.8V30z" />
            <path d="M87.5 33.5h-9.8c-1.1 0-2-.9-2-2v-9.8c0-1.1.9-2 2-2h9.8c1.1 0 2 .9 2 2v9.8c0 1.1-.9 2-2 2zm-9.9-12.9c-.6 0-1 .4-1 1v9.8c0 .6.4 1 1 1h9.8c.6 0 1-.4 1-1v-9.8c0-.6-.4-1-1-1h-9.8zm8.9 9.9h-7.8v-7.8h7.8v7.8zm-6.9-1h5.8v-5.8h-5.8v5.8zM45.4 47.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.3 5.3-5.3 5.3zm0-7.6c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3z" />
            <path d="M45.4 48c-3.2 0-5.8-2.6-5.8-5.8 0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8 0 3.2-2.6 5.8-5.8 5.8zm0-10.6c-2.6 0-4.8 2.1-4.8 4.8 0 2.6 2.1 4.8 4.8 4.8 2.6 0 4.8-2.1 4.8-4.8 0-2.6-2.1-4.8-4.8-4.8zm0 7.6c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.6-1.2 2.8-2.8 2.8zm0-4.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM45.4 61.3c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.3 5.3-5.3 5.3zm0-7.5c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" />
            <path d="M45.4 61.8c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8zm0-10.5c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8c2.6 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8zm0 7.5c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.5 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8zm0-4.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM38.8 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.6 1.5-1.5 1.5z" />
            <path d="M38.8 112.4c-1.1 0-2-.9-2-2v-9.6c0-1.1.9-2 2-2s2 .9 2 2v9.6c0 1.1-.9 2-2 2zm0-12.5c-.6 0-1 .4-1 1v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6c0-.6-.4-1-1-1zM48.7 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5z" />
            <path d="M48.7 112.4c-1.1 0-2-.9-2-2v-9.6c0-1.1.9-2 2-2s2 .9 2 2v9.6c0 1.1-.9 2-2 2zm0-12.5c-.6 0-1 .4-1 1v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6c0-.6-.5-1-1-1zM58.5 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.6 1.5-1.5 1.5z" />
            <path d="M58.5 112.4c-1.1 0-2-.9-2-2v-9.6c0-1.1.9-2 2-2s2 .9 2 2v9.6c0 1.1-.9 2-2 2zm0-12.5c-.6 0-1 .4-1 1v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6c0-.6-.4-1-1-1zM68.4 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5z" />
            <path d="M68.4 112.4c-1.1 0-2-.9-2-2v-9.6c0-1.1.9-2 2-2s2 .9 2 2v9.6c0 1.1-.9 2-2 2zm0-12.5c-.6 0-1 .4-1 1v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6c0-.6-.4-1-1-1zM78.3 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5z" />
            <path d="M78.3 112.4c-1.1 0-2-.9-2-2v-9.6c0-1.1.9-2 2-2s2 .9 2 2v9.6c0 1.1-.9 2-2 2zm0-12.5c-.6 0-1 .4-1 1v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6c0-.6-.5-1-1-1zM88.1 111.9c-.8 0-1.5-.7-1.5-1.5v-9.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v9.6c0 .9-.7 1.5-1.5 1.5z" />
            <path d="M88.1 112.4c-1.1 0-2-.9-2-2v-9.6c0-1.1.9-2 2-2s2 .9 2 2v9.6c0 1.1-.9 2-2 2zm0-12.5c-.6 0-1 .4-1 1v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6c0-.6-.4-1-1-1z" />
        </SvgWrapper>
    );
}
export default SvgReactiveMd;
