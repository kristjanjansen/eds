import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgAnalyzerMd(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M91.7 41.3c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5s-2.3 5-5 5zm0-6.9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-1.2-.9-2-2-2z" />
            <path d="M91.7 41.8c-3 0-5.5-2.4-5.5-5.5 0-3 2.4-5.5 5.5-5.5 3 0 5.5 2.4 5.5 5.5 0 3-2.5 5.5-5.5 5.5zm0-9.9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5c0-2.6-2-4.5-4.5-4.5zm0 6.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-3.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5c0-.9-.7-1.5-1.5-1.5zM113.5 37.8c-.8 0-1.5-.7-1.5-1.5 0-11.2-9.1-20.3-20.3-20.3-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5c12.9 0 23.3 10.5 23.3 23.3 0 .8-.7 1.5-1.5 1.5z" />
            <path d="M113.5 38.3c-1.1 0-2-.9-2-2 0-10.9-8.9-19.8-19.8-19.8-1.1 0-2-.9-2-2s.9-2 2-2c13.1 0 23.8 10.7 23.8 23.8 0 1.1-.9 2-2 2zM91.7 13.5c-.6 0-1 .4-1 1s.4 1 1 1c11.5 0 20.8 9.3 20.8 20.8 0 .6.4 1 1 1s1-.4 1-1c0-12.6-10.2-22.8-22.8-22.8z" />
            <path d="M103.5 37.8c-.8 0-1.5-.7-1.5-1.5 0-5.7-4.6-10.3-10.3-10.3-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5C99 23 105 29 105 36.3c0 .8-.7 1.5-1.5 1.5z" />
            <path d="M103.5 38.3c-1.1 0-2-.9-2-2 0-5.4-4.4-9.8-9.8-9.8-1.1 0-2-.9-2-2s.9-2 2-2c7.6 0 13.8 6.2 13.8 13.8 0 1.1-.9 2-2 2zM91.7 23.5c-.6 0-1 .4-1 1s.4 1 1 1c5.9 0 10.8 4.8 10.8 10.8 0 .6.4 1 1 1s1-.4 1-1c0-7-5.8-12.8-12.8-12.8zM96.9 115H21.1c-4.5 0-8.1-3.6-8.1-8.1V31.1c0-4.5 3.6-8.1 8.1-8.1H81c.8 0 1.5.7 1.5 1.5S81.9 26 81 26H21.1c-2.8 0-5.1 2.3-5.1 5.1v75.8c0 2.8 2.3 5.1 5.1 5.1h75.8c2.8 0 5.1-2.3 5.1-5.1V48.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v58.8c0 4.5-3.7 8.1-8.1 8.1z" />
            <path d="M96.9 115.5H21.1c-4.7 0-8.6-3.9-8.6-8.6V31.1c0-4.7 3.9-8.6 8.6-8.6H81c1.1 0 2 .9 2 2s-.9 2-2 2H21.1c-2.5 0-4.6 2.1-4.6 4.6v75.8c0 2.5 2.1 4.6 4.6 4.6h75.8c2.5 0 4.6-2.1 4.6-4.6V48.1c0-1.1.9-2 2-2s2 .9 2 2v58.8c0 4.7-3.9 8.6-8.6 8.6zm-75.8-92c-4.2 0-7.6 3.4-7.6 7.6v75.8c0 4.2 3.4 7.6 7.6 7.6h75.8c4.2 0 7.6-3.4 7.6-7.6V48.1c0-.6-.4-1-1-1s-1 .4-1 1v58.8c0 3.1-2.5 5.6-5.6 5.6H21.1c-3.1 0-5.6-2.5-5.6-5.6V31.1c0-3.1 2.5-5.6 5.6-5.6H81c.6 0 1-.4 1-1s-.4-1-1-1H21.1z" />
            <path d="M81.7 96.6c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2.1 3.4-2.7 6.2-6.2 6.2zm0-9.5c-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.2.1-1.7-1.4-3.2-3.2-3.2z" />
            <path d="M81.7 97.1a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zm0-12.5c-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7 3.2 0 5.7-2.6 5.7-5.7.1-3.1-2.5-5.7-5.7-5.7zm0 9.5c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.6 3.7-3.7 3.7zm0-6.5c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7.1-1.5-1.2-2.7-2.7-2.7zM35.8 96.6c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2.1 3.4-2.7 6.2-6.2 6.2zm0-9.5c-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.2.1-1.7-1.4-3.2-3.2-3.2z" />
            <path d="M35.8 97.1a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zm0-12.5c-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7 3.2 0 5.7-2.6 5.7-5.7.1-3.1-2.5-5.7-5.7-5.7zm0 9.5c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7s-1.6 3.7-3.7 3.7zm0-6.5c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7.1-1.5-1.2-2.7-2.7-2.7zM58.8 96.6c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2 3.4 0 6.2 2.8 6.2 6.2 0 3.4-2.8 6.2-6.2 6.2zm0-9.5c-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.2 0-1.7-1.4-3.2-3.2-3.2z" />
            <path d="M58.8 97.1a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zm0-12.5c-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7 3.2 0 5.7-2.6 5.7-5.7s-2.6-5.7-5.7-5.7zm0 9.5c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7zm0-6.5c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zM86.5 75.2H31.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h55.3c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.4 1.5z" />
            <path d="M86.5 75.7H31.1c-1.1 0-2-.9-2-2s.9-2 2-2h55.3c1.1 0 2 .9 2 2s-.8 2-1.9 2zm-55.4-3c-.6 0-1 .4-1 1s.4 1 1 1h55.3c.6 0 1-.4 1-1s-.4-1-1-1H31.1zM86.5 62.5H31.1c-.8 0-1.5-.7-1.5-1.5V47.4c0-.8.7-1.5 1.5-1.5h55.3c.8 0 1.5.7 1.5 1.5V61c.1.8-.6 1.5-1.4 1.5zm-53.9-3H85V48.9H32.6v10.6z" />
            <path d="M86.5 63H31.1c-1.1 0-2-.9-2-2V47.4c0-1.1.9-2 2-2h55.3c1.1 0 2 .9 2 2V61c.1 1.1-.8 2-1.9 2zM31.1 46.4c-.6 0-1 .4-1 1V61c0 .6.4 1 1 1h55.3c.6 0 1-.4 1-1V47.4c0-.6-.4-1-1-1H31.1zM85.5 60H32.1V48.4h53.3V60zm-52.4-1h51.3v-9.6H33.1V59z" />
            <path d="M39 55.9c-.8 0-1.5-.7-1.5-1.5V54c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.4c0 .8-.7 1.5-1.5 1.5z" />
            <path d="M39 56.4c-1.1 0-2-.9-2-2V54c0-1.1.9-2 2-2s2 .9 2 2v.4c0 1.1-.9 2-2 2zm0-3.5c-.6 0-1 .4-1 1v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c0-.5-.5-1-1-1zM46.8 55.9c-.8 0-1.5-.7-1.5-1.5V54c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.4c0 .8-.6 1.5-1.5 1.5z" />
            <path d="M46.8 56.4c-1.1 0-2-.9-2-2V54c0-1.1.9-2 2-2s2 .9 2 2v.4c0 1.1-.9 2-2 2zm0-3.5c-.6 0-1 .4-1 1v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c0-.5-.4-1-1-1zM54.7 55.9c-.8 0-1.5-.7-1.5-1.5V54c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.4c0 .8-.7 1.5-1.5 1.5z" />
            <path d="M54.7 56.4c-1.1 0-2-.9-2-2V54c0-1.1.9-2 2-2s2 .9 2 2v.4c0 1.1-.9 2-2 2zm0-3.5c-.6 0-1 .4-1 1v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c0-.5-.5-1-1-1zM62.5 55.9c-.8 0-1.5-.7-1.5-1.5V54c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.4c0 .8-.6 1.5-1.5 1.5z" />
            <path d="M62.5 56.4c-1.1 0-2-.9-2-2V54c0-1.1.9-2 2-2s2 .9 2 2v.4c0 1.1-.9 2-2 2zm0-3.5c-.6 0-1 .4-1 1v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c0-.5-.4-1-1-1zM70.4 55.9c-.8 0-1.5-.7-1.5-1.5V54c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.4c0 .8-.7 1.5-1.5 1.5z" />
            <path d="M70.4 56.4c-1.1 0-2-.9-2-2V54c0-1.1.9-2 2-2s2 .9 2 2v.4c0 1.1-.9 2-2 2zm0-3.5c-.6 0-1 .4-1 1v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c0-.5-.5-1-1-1zM78.2 55.9c-.8 0-1.5-.7-1.5-1.5V54c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.4c0 .8-.7 1.5-1.5 1.5z" />
            <path d="M78.2 56.4c-1.1 0-2-.9-2-2V54c0-1.1.9-2 2-2s2 .9 2 2v.4c0 1.1-.9 2-2 2zm0-3.5c-.6 0-1 .4-1 1v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c0-.5-.4-1-1-1zM35.8 115c-.8 0-1.5-.7-1.5-1.5V95.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v18.5c0 .7-.6 1.4-1.5 1.4z" />
            <path d="M35.8 115.5c-1.1 0-2-.9-2-2V95.1c0-1.1.9-2 2-2s2 .9 2 2v18.5c0 1-.9 1.9-2 1.9zm0-21.4c-.6 0-1 .4-1 1v18.5c0 .6.4 1 1 1s1-.4 1-1V95.1c0-.6-.4-1-1-1zM58.8 115c-.8 0-1.5-.7-1.5-1.5V95.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v18.5c0 .7-.7 1.4-1.5 1.4z" />
            <path d="M58.8 115.5c-1.1 0-2-.9-2-2V95.1c0-1.1.9-2 2-2s2 .9 2 2v18.5c0 1-.9 1.9-2 1.9zm0-21.4c-.6 0-1 .4-1 1v18.5c0 .6.4 1 1 1s1-.4 1-1V95.1c0-.6-.5-1-1-1zM81.7 115c-.8 0-1.5-.7-1.5-1.5V95.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v18.5c0 .7-.6 1.4-1.5 1.4z" />
            <path d="M81.7 115.5c-1.1 0-2-.9-2-2V95.1c0-1.1.9-2 2-2s2 .9 2 2v18.5c0 1-.9 1.9-2 1.9zm0-21.4c-.6 0-1 .4-1 1v18.5c0 .6.4 1 1 1s1-.4 1-1V95.1c0-.6-.4-1-1-1z" />
        </SvgWrapper>
    );
}
export default SvgAnalyzerMd;