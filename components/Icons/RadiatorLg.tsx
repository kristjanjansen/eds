import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRadiatorLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M125.2 22.66h-10.77a1.5 1.5 0 0 0-1.5 1.5v2.13h-3V20.4a1.49 1.49 0 0 0-.49-1.11L102 12.54a1.5 1.5 0 0 0-2 0l-6.4 5.83-6.39-5.83a1.5 1.5 0 0 0-2 0l-6.39 5.83-6.4-5.83a1.5 1.5 0 0 0-2 0L64 18.37l-6.39-5.83a1.5 1.5 0 0 0-2 0l-6.4 5.83-6.41-5.83a1.5 1.5 0 0 0-2 0l-6.39 5.83L28 12.54a1.5 1.5 0 0 0-2 0l-7.4 6.75a1.49 1.49 0 0 0-.49 1.11v75.16H2.8a1.5 1.5 0 0 0-1.5 1.5v5.11a1.5 1.5 0 0 0 1.5 1.5h15.28v3.93a1.49 1.49 0 0 0 .49 1.11l7.4 6.75a1.51 1.51 0 0 0 1 .39 1.49 1.49 0 0 0 1-.39l6.4-5.83 6.39 5.83a1.5 1.5 0 0 0 2 0l6.39-5.83 6.4 5.83a1.47 1.47 0 0 0 1 .39 1.51 1.51 0 0 0 1-.39l6.45-5.83 6.39 5.83a1.51 1.51 0 0 0 1 .39 1.47 1.47 0 0 0 1-.39l6.4-5.83 6.39 5.83a1.5 1.5 0 0 0 2 0l6.39-5.83 6.4 5.83a1.49 1.49 0 0 0 1 .39 1.51 1.51 0 0 0 1-.39l7.4-6.75a1.49 1.49 0 0 0 .49-1.11V29.29h3v2.13a1.5 1.5 0 0 0 1.5 1.5h10.84a1.5 1.5 0 0 0 1.5-1.5v-7.26a1.5 1.5 0 0 0-1.5-1.5Zm-120.9 78v-2.1h13.78v2.11ZM27 112.32l-5.9-5.38V21.06l5.9-5.38 5.91 5.38v85.88Zm14.81 0-5.9-5.38V21.06l5.9-5.38 5.9 5.38v85.88Zm14.81 0-5.91-5.38V21.06l5.91-5.38 5.9 5.38v85.88Zm14.8 0-5.9-5.38V21.06l5.9-5.38 5.91 5.38v85.88Zm14.81 0-5.9-5.38V21.06l5.9-5.38 5.9 5.38v85.88Zm20.71-5.38-5.9 5.38-5.91-5.38V21.06l5.87-5.38 5.9 5.38Zm16.78-77h-7.77v-4.28h7.77Z" />
        </SvgWrapper>
    );
}
export default SvgRadiatorLg;