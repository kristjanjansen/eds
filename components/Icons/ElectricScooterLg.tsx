import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgElectricScooterLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M59.28 70.58H66l-5.74 9a1.5 1.5 0 0 0 1.26 2.31 1.52 1.52 0 0 0 1.26-.69L70 69.89a1.5 1.5 0 0 0-1.26-2.31H62l5.5-8.49a1.5 1.5 0 1 0-2.5-1.63l-7 10.8a1.5 1.5 0 0 0 1.26 2.32Z" />
            <path d="M107.61 96.77a13.15 13.15 0 0 0-2.46.24L80.91 10.27l6.58-3.22a1.5 1.5 0 0 0-1.31-2.69l-15.41 7.52a1.5 1.5 0 0 0 .66 2.85 1.55 1.55 0 0 0 .66-.15l6.08-3 21.2 75.92-21.86 20.81h-31.7A23.59 23.59 0 0 0 7.43 93.4a1.5 1.5 0 1 0 1.91 2.31 20.6 20.6 0 0 1 33.45 12.6h-6.34a13.5 13.5 0 1 0 .11 3h41.55a1.52 1.52 0 0 0 1-.41l21.15-20.13 2 7.1a13.51 13.51 0 1 0 5.34-1.1Zm-84.51 24a10.52 10.52 0 1 1 10.32-12.49h-9.33a1.5 1.5 0 0 0 0 3h9.47a10.52 10.52 0 0 1-10.46 9.52Zm84.51 0a10.51 10.51 0 0 1-4.52-20l2.63 9.41a1.5 1.5 0 0 0 1.44 1.1 1.45 1.45 0 0 0 .41-.06 1.49 1.49 0 0 0 1-1.84L106 99.91a11.13 11.13 0 0 1 1.65-.14 10.52 10.52 0 0 1 0 21Z" />
        </SvgWrapper>
    );
}
export default SvgElectricScooterLg;
