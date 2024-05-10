import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgTemperatureLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M82.28 21.42H97a1.5 1.5 0 0 0 0-3H82.28a1.5 1.5 0 0 0 0 3ZM97 42.15H82.28a1.5 1.5 0 0 0 0 3H97a1.5 1.5 0 0 0 0-3ZM97 65.89H82.28a1.5 1.5 0 0 0 0 3H97a1.5 1.5 0 0 0 0-3ZM82.28 57h8.57a1.5 1.5 0 0 0 0-3h-8.57a1.5 1.5 0 0 0 0 3ZM82.28 33.29h8.57a1.5 1.5 0 0 0 0-3h-8.57a1.5 1.5 0 0 0 0 3ZM65.24 83.31v-34c-.28-3.52-.76-9.42-7.2-9.42s-6.92 5.9-7.21 9.42v34a17.18 17.18 0 1 0 14.41 0ZM58 113.07a14.17 14.17 0 0 1-5.12-27.37 1.5 1.5 0 0 0 .95-1.39V49.53c.41-5.12 1.36-6.6 4.21-6.6s3.79 1.48 4.2 6.6V84.3a1.5 1.5 0 0 0 1 1.4A14.17 14.17 0 0 1 58 113.07Z" />
            <path d="M74.55 75V16.53a.49.49 0 0 0 0-.12 16.56 16.56 0 0 0-33 0 .49.49 0 0 0 0 .12V75a28.53 28.53 0 1 0 33 0ZM58 123.83a25.53 25.53 0 0 1-14.14-46.76 1.5 1.5 0 0 0 .66-1.24V16.59a13.56 13.56 0 0 1 27 0v59.23a1.51 1.51 0 0 0 .66 1.25A25.53 25.53 0 0 1 58 123.83Z" />
        </SvgWrapper>
    );
}
export default SvgTemperatureLg;
