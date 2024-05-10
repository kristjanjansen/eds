import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCanal(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M95.78 64.68h-3.33a1.5 1.5 0 1 0 0 3h3.33a1.5 1.5 0 0 0 0-3ZM108.21 71h-3.33a1.5 1.5 0 0 0 0 3h3.33a1.5 1.5 0 0 0 0-3ZM107.46 85.82h-3.33a1.5 1.5 0 0 0 0 3h3.33a1.5 1.5 0 0 0 0-3ZM21.89 74.49a1.5 1.5 0 0 0-1.5-1.5h-3.33a1.5 1.5 0 1 0 0 3h3.33a1.5 1.5 0 0 0 1.5-1.5ZM26.21 85.82h-3.33a1.5 1.5 0 1 0 0 3h3.33a1.5 1.5 0 1 0 0-3Z" />
            <path d="M120.64 40.89a1.5 1.5 0 0 0-1.5 1.5v3.18a96 96 0 0 0-22.44-9.79v-4.87a1.5 1.5 0 1 0-3 0v4q-2.45-.66-5.08-1.23a107.73 107.73 0 0 0-22.88-2.44v-5.12a1.5 1.5 0 1 0-3 0v5.18a116.15 116.15 0 0 0-28 4.26v-4.65a1.5 1.5 0 0 0-3 0v5.52a134.56 134.56 0 0 0-22.88 9.43v-3.47a1.5 1.5 0 0 0-3 0v58.49a2.5 2.5 0 0 0 2.5 2.5h27.43a2.5 2.5 0 0 0 2.5-2.5v-5a27 27 0 0 1 12.9-23.28 26 26 0 0 1 26.1 0 27 27 0 0 1 12.89 23.23v5a2.51 2.51 0 0 0 2.5 2.5h27a2.5 2.5 0 0 0 2.5-2.5V42.39a1.5 1.5 0 0 0-1.54-1.5Zm-1.5 8.24v12.22a96 96 0 0 0-22.44-9.79V38.92a90.91 90.91 0 0 1 22.44 10.21ZM87.84 36.6c2 .44 4 .93 5.86 1.44v12.67c-1.63-.43-3.32-.85-5.08-1.23A108.39 108.39 0 0 0 65.74 47V34.26a104.31 104.31 0 0 1 22.1 2.34Zm-25.1-2.3v12.79a115.61 115.61 0 0 0-28 4.25V38.67a113.63 113.63 0 0 1 28-4.37Zm-31 5.27v12.65a133.67 133.67 0 0 0-22.88 9.42V49.25a132.49 132.49 0 0 1 22.87-9.68Zm61.45 60.81v-4.55A30 30 0 0 0 78.82 70a28.95 28.95 0 0 0-29.16 0 30 30 0 0 0-14.37 25.83v4.55H8.86V65c32.67-17.47 61-16.54 79-12.65a95.14 95.14 0 0 1 31.3 12.54v35.46Z" />
        </SvgWrapper>
    );
}
export default SvgCanal;
