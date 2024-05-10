import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgMetersLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path
                className="meters-lg_svg__st0"
                d="M116.3.5H11.7c-.8 0-1.5.7-1.5 1.5v124c0 .8.7 1.5 1.5 1.5h104.7c.8 0 1.5-.7 1.5-1.5V2c-.1-.8-.7-1.5-1.6-1.5zm-19.1 124H30.8v-13c0-2.6 2.1-4.7 4.7-4.7h56.9c2.6 0 4.7 2.1 4.7 4.7v13zM35.3 85.6c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.5-2 4.4-4.4 4.4zm53-4.4c0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-1.9-4.4-4.4zm26.5 43.3h-14.7v-13c0-3.6-2.5-6.7-5.9-7.5V88.5c3.4-.7 5.9-3.7 5.9-7.3 0-4.1-3.3-7.4-7.4-7.4-4.1 0-7.4 3.3-7.4 7.4 0 3.6 2.5 6.6 5.9 7.3v15.3H65.5V88.5c3.4-.7 5.9-3.7 5.9-7.3 0-4.1-3.3-7.4-7.4-7.4-4.1 0-7.4 3.3-7.4 7.4 0 3.6 2.5 6.6 5.9 7.3v15.3H36.7V88.5c3.4-.7 5.9-3.7 5.9-7.3 0-4.1-3.3-7.4-7.4-7.4-4.1 0-7.4 3.3-7.4 7.4 0 3.6 2.5 6.6 5.9 7.3V104c-3.4.8-5.9 3.9-5.9 7.5v13H13.2V3.5h101.7v121zM64 85.6c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.5-2 4.4-4.4 4.4z"
            />
            <path
                className="meters-lg_svg__st0"
                d="M29.3 61.5h69.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H29.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zM29.3 48h69.3c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5H29.3c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5zm1.5-17h66.3v14H30.8V31z"
            />
            <path
                className="meters-lg_svg__st0"
                d="M39.2 35.2c-.8 0-1.5.7-1.5 1.5v2.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.6c0-.8-.7-1.5-1.5-1.5zM49 35.2c-.8 0-1.5.7-1.5 1.5v2.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.6c0-.8-.6-1.5-1.5-1.5zM58.9 35.2c-.8 0-1.5.7-1.5 1.5v2.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.6c-.1-.8-.7-1.5-1.5-1.5zM68.7 35.2c-.8 0-1.5.7-1.5 1.5v2.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.6c0-.8-.7-1.5-1.5-1.5zM78.5 35.2c-.8 0-1.5.7-1.5 1.5v2.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.6c0-.8-.7-1.5-1.5-1.5zM88.3 35.2c-.8 0-1.5.7-1.5 1.5v2.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2.6c0-.8-.6-1.5-1.5-1.5z"
            />
        </SvgWrapper>
    );
}
export default SvgMetersLg;
