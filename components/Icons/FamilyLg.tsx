import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFamilyLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M33 127H11.35a1.5 1.5 0 0 1-1.49-1.36l-2-21.58-6-.9a1.5 1.5 0 0 1-1.27-1.63l1.54-17.15a20.46 20.46 0 0 1 12.62-17 1.5 1.5 0 1 1 1.14 2.77A17.47 17.47 0 0 0 5.12 84.66L3.63 100.4l5.8.86a1.49 1.49 0 0 1 1.27 1.35l2 21.39h18.93l2-21.39a1.5 1.5 0 0 1 1.27-1.35l5.8-.86-1.47-15.74a17.47 17.47 0 0 0-10.77-14.55 1.5 1.5 0 1 1 1.14-2.77 20.46 20.46 0 0 1 12.62 17l1.62 17.15a1.5 1.5 0 0 1-1.27 1.63l-6 .9-2 21.58A1.5 1.5 0 0 1 33 127ZM22.17 65.58a10.9 10.9 0 0 1-10.89-10.89v-3.81a10.9 10.9 0 0 1 21.79 0v3.81a10.9 10.9 0 0 1-10.9 10.89Zm0-22.59a7.9 7.9 0 0 0-7.89 7.89v3.81a7.9 7.9 0 0 0 15.79 0v-3.81a7.9 7.9 0 0 0-7.9-7.88ZM81.61 127H58.23a1.49 1.49 0 0 1-1.49-1.38l-2-24.78-6-.9a1.5 1.5 0 0 1-1.28-1.6l2.71-33A1.51 1.51 0 0 1 51 64.1l10.61-4.36a1.5 1.5 0 1 1 1.14 2.77l-9.76 4-2.5 30.67 5.82.87a1.5 1.5 0 0 1 1.28 1.36l2 24.59h20.64l2-24.59a1.5 1.5 0 0 1 1.27-1.36l5.83-.87-2.49-30.65-9.77-4a1.5 1.5 0 0 1 1.14-2.77l10.62 4.34a1.5 1.5 0 0 1 .92 1.27l2.71 33a1.49 1.49 0 0 1-1.27 1.6l-6 .9-2 24.78a1.51 1.51 0 0 1-1.58 1.35ZM69.92 58.44A10.9 10.9 0 0 1 59 47.55v-3.81a10.9 10.9 0 0 1 21.79 0v3.81a10.9 10.9 0 0 1-10.87 10.89Zm0-22.59A7.9 7.9 0 0 0 62 43.74v3.81a7.9 7.9 0 0 0 15.79 0v-3.81a7.9 7.9 0 0 0-7.87-7.89ZM119.56 127h-16.09a1.5 1.5 0 0 1-1.5-1.36l-1.36-14.88-3.8-.57a1.5 1.5 0 0 1-1.27-1.65l.95-8.21a14.93 14.93 0 0 1 9.14-12.07 1.5 1.5 0 0 1 1.14 2.74 11.91 11.91 0 0 0-7.3 9.64l-.78 6.76 3.52.52a1.51 1.51 0 0 1 1.28 1.35l1.34 14.73h13.36l1.35-14.69a1.5 1.5 0 0 1 1.27-1.35l3.53-.52-.78-6.76a11.91 11.91 0 0 0-7.3-9.64 1.5 1.5 0 0 1 1.14-2.78 14.93 14.93 0 0 1 9.14 12.07l.95 8.21a1.5 1.5 0 0 1-1.27 1.65l-3.8.57-1.37 14.88a1.49 1.49 0 0 1-1.49 1.36ZM111.52 86.36a10.2 10.2 0 0 1-10.2-10.19v-1.74a10.2 10.2 0 1 1 20.39 0v1.74a10.2 10.2 0 0 1-10.19 10.19Zm0-19.13a7.21 7.21 0 0 0-7.19 7.2v1.74a7.2 7.2 0 0 0 14.39 0v-1.74a7.21 7.21 0 0 0-7.21-7.2Z" />
        </SvgWrapper>
    );
}
export default SvgFamilyLg;
