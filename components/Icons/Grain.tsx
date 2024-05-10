import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgGrain(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M95.61 68.17a40.78 40.78 0 0 0-8 .25 19.64 19.64 0 0 0 1.89-1.67C98.29 57.93 97 42.74 97 42.1a1.5 1.5 0 0 0-1.36-1.36c-.55-.05-11.88-1-20.65 4.39a28.32 28.32 0 0 0 2.5-11.27C77.46 20 65.52 9 65 8.54a1.52 1.52 0 0 0-2 0C62.48 9 50.54 20 50.54 33.86A28.32 28.32 0 0 0 53 45.13c-8.77-5.37-20.1-4.44-20.65-4.39A1.5 1.5 0 0 0 31 42.1c-.06.64-1.32 15.83 7.51 24.65a19.64 19.64 0 0 0 1.89 1.67 40.78 40.78 0 0 0-8-.25 1.5 1.5 0 0 0-1.4 1.36c-.06.64-1.32 15.82 7.51 24.65 4.91 4.92 11.87 6.67 16.84 7.27h.14l7 .19v16.7a1.5 1.5 0 0 0 3 0v-16.7l7-.19h.14c5-.6 11.93-2.35 16.84-7.27 8.83-8.83 7.57-24 7.51-24.65a1.5 1.5 0 0 0-1.37-1.36ZM65.5 74.23l7-.19H72.91A21.81 21.81 0 0 0 71 75.68a25.68 25.68 0 0 0-5.46 8.45ZM94 43.67c.09 3.72-.26 14.53-6.7 21-4.29 4.29-10.52 5.85-15 6.41l-6.81.19c.16-3.9 1.19-14.49 7.57-20.86 6-6 15.8-6.71 20.11-6.71ZM64 11.76c2.8 2.91 10.46 11.79 10.46 22.1S66.8 53.05 64 56c-2.8-2.91-10.46-11.8-10.46-22.1S61.2 14.67 64 11.76ZM34 43.67c3.71-.09 14.52.27 20.95 6.7s7.4 16.95 7.56 20.86L55.67 71c-4.49-.56-10.72-2.12-15-6.41-6.45-6.39-6.8-17.2-6.67-20.92ZM55.38 74h.14l7 .19v9.9A25.68 25.68 0 0 0 57 75.68 21.81 21.81 0 0 0 55.11 74Zm.29 24.44c-4.49-.56-10.72-2.12-15-6.41-6.44-6.44-6.79-17.24-6.7-21 3.71-.08 14.52.27 20.95 6.7s7.4 17 7.56 20.85Zm31.67-6.41c-4.29 4.29-10.52 5.85-15 6.41l-6.81.18c.16-3.9 1.19-14.48 7.57-20.85 6-6 15.8-6.71 20.11-6.71H94c.13 3.76-.22 14.56-6.66 21Z" />
        </SvgWrapper>
    );
}
export default SvgGrain;
