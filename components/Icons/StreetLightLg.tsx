import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgStreetLightLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M117.38 115.9H72.74V93.57a1.5 1.5 0 0 0-1.5-1.5h-5.76v-66A28 28 0 0 1 73 19.26c4.86-3.16 13.3-6.91 26.2-7.15a1.49 1.49 0 0 0-.2.76v5.81a1.5 1.5 0 0 0 1.5 1.5h16.91a1.5 1.5 0 0 0 1.5-1.5V10.6a1.5 1.5 0 0 0-1.5-1.5H100.5C77.93 9.1 67.39 19 64 23.11c-3.4-4.11-14-14-36.52-14h-16.9a1.5 1.5 0 0 0-1.5 1.5v8.08a1.51 1.51 0 0 0 1.5 1.5H27.5a1.5 1.5 0 0 0 1.5-1.5v-5.82a1.49 1.49 0 0 0-.2-.76c12.9.24 21.35 4 26.21 7.15a28 28 0 0 1 7.47 6.81v66h-5.74a1.5 1.5 0 0 0-1.5 1.5v22.33H10.58a1.5 1.5 0 1 0 0 3h106.8a1.5 1.5 0 0 0 0-3Zm-1.5-103.8v5.08H102v-4.31a1.47 1.47 0 0 0-.22-.77ZM26 12.87v4.31H12.08V12.1h14.14a1.47 1.47 0 0 0-.22.77Zm43.74 103h-11.5v-20.8h11.5Z" />
            <path d="m125.87 37.9-7.49-7.48a1.5 1.5 0 1 0-2.12 2.12l7.48 7.46a1.51 1.51 0 0 0 2.13 0 1.51 1.51 0 0 0 0-2.1ZM99.41 30.42l-7.49 7.48a1.51 1.51 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0l7.48-7.48a1.5 1.5 0 0 0-2.12-2.12ZM108.87 30a1.5 1.5 0 0 0-1.5 1.5v10.57a1.5 1.5 0 0 0 3 0V31.48a1.5 1.5 0 0 0-1.5-1.48ZM35 40.46a1.49 1.49 0 0 0 1.08-.46 1.51 1.51 0 0 0 0-2.12l-7.49-7.48a1.5 1.5 0 0 0-2.12 2.12L34 40a1.48 1.48 0 0 0 1 .46ZM11.74 30.42a1.51 1.51 0 0 0-2.12 0L2.13 37.9a1.51 1.51 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0l7.48-7.48a1.51 1.51 0 0 0 0-2.12ZM19.08 43.57a1.5 1.5 0 0 0 1.5-1.5V31.48a1.5 1.5 0 0 0-3 0v10.59a1.5 1.5 0 0 0 1.5 1.5Z" />
        </SvgWrapper>
    );
}
export default SvgStreetLightLg;