import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgIndoorClimateLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M57.09 86.35V72.83c-.14-1.76-.45-3.11-2.21-3.11-1.77 0-2.08 1.35-2.22 3.11v13.52a6.09 6.09 0 1 0 4.43 0Z" />
            <path d="M61.7 82.54V60a6.84 6.84 0 0 0-13.65.08v22.46a11.49 11.49 0 1 0 13.65 0Zm-6.82 18.72a9.48 9.48 0 0 1-5.27-17.37 1 1 0 0 0 .44-.83V60.13a4.84 4.84 0 0 1 9.65-.08v23a1 1 0 0 0 .44.83 9.48 9.48 0 0 1-5.26 17.37ZM71.28 61.15a3.52 3.52 0 1 0-3.51 3.52 3.51 3.51 0 0 0 3.51-3.52Zm-5 0a1.52 1.52 0 1 1 1.52 1.52 1.52 1.52 0 0 1-1.55-1.52Z" />
            <path d="M122.12 110h-7.53c.54-4.62 3.52-8.17 7.1-8.17a1.5 1.5 0 0 0 0-3c-5.21 0-9.52 4.89-10.12 11.17h-6.8c.67-10.34 8.14-18.81 16.92-18.81a1.5 1.5 0 0 0 0-3c-10.4 0-19.25 9.84-19.94 21.81h-9.4V78.62a1.5 1.5 0 0 0-3 0V110H20.66l.25-31.34a1.5 1.5 0 0 0-1.49-1.51 1.51 1.51 0 0 0-1.5 1.49L17.66 110H5.88a1.5 1.5 0 1 0 0 3h116.24a1.5 1.5 0 0 0 0-3ZM88.52 41.47h20.88a10.78 10.78 0 1 0 0-21.56 10.68 10.68 0 0 0-2.93.4 10.13 10.13 0 0 0-18.89 3.21 9 9 0 0 0 .94 18Zm0-15h.33A1.46 1.46 0 0 0 90 26.1a1.51 1.51 0 0 0 .45-1.1 7.13 7.13 0 0 1 13.83-2.32 1.5 1.5 0 0 0 2 .85 7.78 7.78 0 1 1 3.11 14.91H88.52a6 6 0 1 1 0-12ZM11.62 76.17l43.49-41.55 43 41.55a1.48 1.48 0 0 0 1 .42 1.53 1.53 0 0 0 1.08-.46 1.5 1.5 0 0 0 0-2.12l-44-42.55a1.5 1.5 0 0 0-2.08 0L9.55 74a1.5 1.5 0 0 0 2.07 2.17Z" />
        </SvgWrapper>
    );
}
export default SvgIndoorClimateLg;
