import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgClockLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M118.49 64a54 54 0 1 0-86 43.48l-15.42 15.44a1.49 1.49 0 0 0 0 2.12 1.5 1.5 0 0 0 2.12 0L35 109.21a53.84 53.84 0 0 0 59.76-.53l16.37 16.38a1.51 1.51 0 0 0 2.13 0 1.51 1.51 0 0 0 0-2.12l-16-16A53.94 53.94 0 0 0 118.49 64Zm-54 51a51 51 0 1 1 51-51 51.06 51.06 0 0 1-51 51Z" />
            <path d="M64.49 20.93A43.07 43.07 0 1 0 107.55 64a43.11 43.11 0 0 0-43.06-43.07ZM66 104v-8.23a1.5 1.5 0 1 0-3 0V104a40.12 40.12 0 0 1-38.54-38.5h8.26a1.5 1.5 0 0 0 0-3h-8.26A40.12 40.12 0 0 1 63 24v8.26a1.5 1.5 0 0 0 3 0V24a40.12 40.12 0 0 1 38.52 38.5h-8.26a1.5 1.5 0 1 0 0 3h8.26A40.12 40.12 0 0 1 66 104ZM31.89 9.43a1.51 1.51 0 0 0 0-2.12A16.42 16.42 0 0 0 8.67 30.52a1.5 1.5 0 0 0 2.12 0Zm-21.1 0a13.44 13.44 0 0 1 17.85-1L9.79 27.28a13.43 13.43 0 0 1 1-17.85ZM119.33 7.31a16.44 16.44 0 0 0-23.22 0 1.51 1.51 0 0 0 0 2.12l21.1 21.09a1.5 1.5 0 0 0 2.12 0 16.43 16.43 0 0 0 0-23.21Zm-1.12 20L99.36 8.43a13.41 13.41 0 0 1 18.85 18.85Z" />
            <path d="M78.66 62.5H66V42.33a1.5 1.5 0 0 0-3 0V64a1.5 1.5 0 0 0 1.5 1.5h14.16a1.5 1.5 0 0 0 0-3Z" />
        </SvgWrapper>
    );
}
export default SvgClockLg;
