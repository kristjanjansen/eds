import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCog(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M13.63 22.93h-3.26a1 1 0 0 1-.95-.68L8.68 20l-2.1 1.06a1 1 0 0 1-1.16-.19l-2.31-2.3a1 1 0 0 1-.18-1.16L4 15.32l-2.24-.74a1 1 0 0 1-.68-.95v-3.26a1 1 0 0 1 .68-.95L4 8.68l-1.07-2.1a1 1 0 0 1 .18-1.16l2.31-2.31a1 1 0 0 1 1.16-.18L8.68 4l.74-2.24a1 1 0 0 1 .95-.68h3.26a1 1 0 0 1 .95.68L15.32 4l2.1-1.06a1 1 0 0 1 1.16.18l2.31 2.31a1 1 0 0 1 .18 1.16L20 8.68l2.24.74a1 1 0 0 1 .68.95v3.26a1 1 0 0 1-.68.95l-2.24.74 1.06 2.1a1 1 0 0 1-.18 1.16l-2.31 2.3a1 1 0 0 1-1.16.19L15.32 20l-.74 2.24a1 1 0 0 1-.95.69Zm-2.54-2h1.82l.86-2.6a1 1 0 0 1 .57-.62 1.21 1.21 0 0 1 .88 0L17.68 19 19 17.68l-1.23-2.46a1 1 0 0 1 0-.82 1.13 1.13 0 0 1 .64-.63l2.6-.86v-1.82l-2.6-.86a1 1 0 0 1-.62-.58 1.14 1.14 0 0 1 0-.87L19 6.32 17.68 5l-2.46 1.28a1 1 0 0 1-.83 0 1.12 1.12 0 0 1-.62-.64l-.86-2.6h-1.82l-.86 2.6a1 1 0 0 1-.57.61 1.12 1.12 0 0 1-.88 0L6.32 5 5 6.32l1.28 2.46a1 1 0 0 1 0 .83 1.12 1.12 0 0 1-.64.62l-2.6.86v1.82l2.6.86a1 1 0 0 1 .61.56 1.15 1.15 0 0 1 0 .89L5 17.68 6.32 19l2.46-1.24a1.06 1.06 0 0 1 .82 0 1.13 1.13 0 0 1 .63.64Zm10.84-7.3ZM12 16.21A4.21 4.21 0 1 1 16.21 12 4.22 4.22 0 0 1 12 16.21Zm0-6.42A2.21 2.21 0 1 0 14.21 12 2.21 2.21 0 0 0 12 9.79Z" />
        </SvgWrapper>
    );
}
export default SvgCog;
