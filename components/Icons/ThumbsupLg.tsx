import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgThumbsupLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M29.73 52H4.06a1.5 1.5 0 0 0-1.5 1.5V124a1.5 1.5 0 0 0 1.5 1.5h25.67a1.5 1.5 0 0 0 1.5-1.5V53.47a1.5 1.5 0 0 0-1.5-1.47Zm-1.5 70.54H5.56V55h22.67ZM119.15 61.77a12.31 12.31 0 0 0-6-23H80V21.36C80 9.19 74.46 2.49 64.37 2.49c-5.29 0-7.57 1.13-7.81 1.26a1.51 1.51 0 0 0-.8 1.33v12.06c0 13.52-4.12 18.54-8.1 23.4-.56.68-1.11 1.36-1.65 2.05l-7.67 9.85a1.54 1.54 0 0 0-.31.92v60.15a1.5 1.5 0 0 0 1.5 1.5h66a8.67 8.67 0 0 0 6.32-14.61 10.49 10.49 0 0 0 4.71-18 11.21 11.21 0 0 0 2.62-20.62Zm-5.47 18h-3.28a1.5 1.5 0 0 0-.15 3 7.47 7.47 0 0 1-.74 14.91h-4a1.5 1.5 0 0 0 0 3 5.68 5.68 0 1 1 0 11.35H41V53.88l7.35-9.45c.52-.67 1.06-1.32 1.6-2 4.11-5 8.78-10.72 8.78-25.31v-11a20.81 20.81 0 0 1 5.61-.63C72.76 5.49 77 10.83 77 21.36v18.88a1.52 1.52 0 0 0 .44 1.06 1.5 1.5 0 0 0 1.06.44h34.61a9.31 9.31 0 1 1 0 18.62 1.5 1.5 0 0 0 0 3h.55a8.21 8.21 0 1 1 0 16.41Z" />
        </SvgWrapper>
    );
}
export default SvgThumbsupLg;
