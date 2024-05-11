import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPortfolioLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M113.68 25.65H90.41l-3.88-13.31v-.14a6.33 6.33 0 0 0-5.9-4H47.42a6.33 6.33 0 0 0-5.9 4l-.05.14-3.88 13.31H14.32A11.24 11.24 0 0 0 3.1 36.88v71.68a11.23 11.23 0 0 0 11.22 11.22h99.36a11.23 11.23 0 0 0 11.22-11.22V36.88a11.24 11.24 0 0 0-11.22-11.23ZM44.33 13.26a3.34 3.34 0 0 1 3.09-2h33.16a3.34 3.34 0 0 1 3.09 2l3.62 12.39H40.71Zm77.57 95.3a8.23 8.23 0 0 1-8.22 8.22H14.32a8.23 8.23 0 0 1-8.22-8.22V53.77l41.83 16.39v15.69a1.5 1.5 0 0 0 1.5 1.5h29.14a1.5 1.5 0 0 0 1.5-1.5V70.16l41.83-16.39Zm-71-24.21v-13l12.52 4.91a1.3 1.3 0 0 0 1 0l12.52-4.91v13Zm71-33.8L64 73.24 6.1 50.55V36.88a8.23 8.23 0 0 1 8.22-8.23h99.36a8.23 8.23 0 0 1 8.22 8.23Z" />
        </SvgWrapper>
    );
}
export default SvgPortfolioLg;
