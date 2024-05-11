import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgEditLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M2 127.5a1.5 1.5 0 0 1-1.06-.44 1.47 1.47 0 0 1-.41-1.35l6.24-31.27a1.44 1.44 0 0 1 .43-.78l66.88-66.88a.76.76 0 0 1 .09-.09l.09-.09L87.82 13l.09-.1a.39.39 0 0 1 .1-.08l6.73-6.74A19.1 19.1 0 0 1 108.31.5a19.2 19.2 0 0 1 13.57 32.77l-6.8 6.79-13.73 13.73v.05l-66.94 66.89a1.51 1.51 0 0 1-.85.5l-31.27 6.24a1.43 1.43 0 0 1-.29.03Zm7.62-32-5.71 28.59 28.6-5.71 1.35-1.38L11 94.13l-.68.68c-.32.24-.49.46-.7.65Zm20.1 13.19 6.28 6.22 62.13-62.14-6.27-6.26Zm-8.38-8.38 6.26 6.26 62.14-62.18-6.26-6.27ZM13.09 92l6.13 6.13L81.36 36l-6.13-6.12Zm79.85-48.66 7.31 7.31L111.87 39 89 16.13 77.35 27.75l7.16 7.16 8.34 8.34ZM91.1 14 114 36.91l5.76-5.77a16.19 16.19 0 0 0-22.9-22.9ZM126 127.5H46.9a1.5 1.5 0 0 1 0-3H126a1.5 1.5 0 0 1 0 3Z" />
        </SvgWrapper>
    );
}
export default SvgEditLg;
