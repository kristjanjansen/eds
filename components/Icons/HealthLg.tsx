import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHealthLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m100 96.33 6-9.61c1.21-1.54 2.92-5 2.93-7.08l2.07-49.2a6.39 6.39 0 0 0-1.75-4.44.81.81 0 0 0-.09-.1 6.49 6.49 0 0 0-4.59-1.92c-1.6 0-3.22 1-5.44 13.11-.84 4.54-1.5 9.38-1.79 12.17h-.07a.58.58 0 0 0-.14 0 4.84 4.84 0 0 0-.9-.08 6.36 6.36 0 0 0-5.63 3.22L76.19 77a20.35 20.35 0 0 0-2.76 10.13s0 .11 0 .17l1.68 14.88h-2.7a4 4 0 0 0-2.81 1.16 3.89 3.89 0 0 0-1.18 2.75l-.35 7.25a4 4 0 0 0 4 4l29.82.1a4 4 0 0 0 4-3.91l.34-7.25a4 4 0 0 0-4-4H100l-.32-5.21a1 1 0 0 1 .22-.61Zm2.94 9.27a1.06 1.06 0 0 1 .29.64l-.35 7.24a1 1 0 0 1-1 1l-29.82-.1a1 1 0 0 1-.7-.29 1 1 0 0 1-.29-.64l.35-7.25a1 1 0 0 1 .29-.7 1 1 0 0 1 .7-.29h29.81a1 1 0 0 1 .72.39Zm-5.45-10.93a4.09 4.09 0 0 0-.81 2.5l.3 5.12H78.15l-1.72-15.21a17.32 17.32 0 0 1 2.35-8.54L93.2 53.81a3.46 3.46 0 0 1 3-1.72h.3a1.69 1.69 0 0 0 .36.07 3 3 0 0 1 1 .36c.38.39.32 3.18-2.38 9-1.61 4-6.47 14.89-9.49 17.61a1.5 1.5 0 1 0 2 2.23c4.08-3.68 9.64-17.18 10.24-18.65 1.11-2.41 4.31-9.35 1.9-12.17.28-4.64 3-21.13 4.73-23.64a3.58 3.58 0 0 1 2 .94l.14.16a3.47 3.47 0 0 1 1 2.41l-2.1 49.2a12.92 12.92 0 0 1-2.33 5.35l-.1.14ZM58.4 103.36a4 4 0 0 0-2.81-1.16h-2.71l1.68-14.88v-.17A20.35 20.35 0 0 0 51.81 77L37.4 52.32a6.35 6.35 0 0 0-5.59-3.23 4.9 4.9 0 0 0-.94.08.58.58 0 0 0-.14 0h-.07c-.29-2.79-.95-7.63-1.79-12.17-2.22-12.06-3.87-13.07-5.44-13.07a6.49 6.49 0 0 0-4.59 1.92.81.81 0 0 0-.09.1A6.43 6.43 0 0 0 17 30.5l2.09 49.08c0 2.12 1.72 5.6 2.93 7.14l6 9.61.11.15a1 1 0 0 1 .22.51L28 102.3h-2.25a4 4 0 0 0-4 4.07l.34 7.15a4 4 0 0 0 4 3.94l29.82-.1a4 4 0 0 0 4-4.08l-.34-7.11a3.93 3.93 0 0 0-1.17-2.81ZM31 102.29l.31-5.21a4.1 4.1 0 0 0-.82-2.41l-6-9.61-.1-.14a12.82 12.82 0 0 1-2.33-5.41L20 30.42A3.45 3.45 0 0 1 21 28a.23.23 0 0 0 .07-.07 3.58 3.58 0 0 1 2-.94c1.78 2.51 4.45 19 4.73 23.64-2.41 2.81.79 9.75 1.88 12.11.62 1.53 6.18 15 10.26 18.71a1.5 1.5 0 0 0 2-2.23c-3-2.72-7.88-13.64-9.52-17.68-2.67-5.79-2.73-8.57-2.36-9a3 3 0 0 1 1-.37 1.66 1.66 0 0 0 .37-.07h.34a3.46 3.46 0 0 1 3 1.73l14.45 24.71a17.32 17.32 0 0 1 2.35 8.54l-1.72 15.14h-11Zm25.62 11.79a1 1 0 0 1-.7.29l-29.82.1a1 1 0 0 1-1-1v-.06l-.34-7.12a1 1 0 0 1 .28-.7 1 1 0 0 1 .71-.29h29.81a1 1 0 0 1 .7.29 1 1 0 0 1 .29.77l.35 7.11a1 1 0 0 1-.26.61ZM64.67 52c8.42-4.24 18.77-14.69 20.84-24.19A13.44 13.44 0 0 0 83 16c-2.92-3.64-6.2-5.48-9.74-5.48-4.19 0-7.56 2.62-9.24 4.24-1.68-1.62-5-4.24-9.24-4.24-3.54 0-6.82 1.84-9.74 5.48a13.44 13.44 0 0 0-2.53 11.77c2.05 9.51 12.4 19.96 20.82 24.23a1 1 0 0 0 .18.06h.11a1.65 1.65 0 0 0 .38.05 1.65 1.65 0 0 0 .38-.05h.11a1 1 0 0 0 .18-.06ZM45.43 27.14a10.51 10.51 0 0 1 1.93-9.25c2.32-2.89 4.81-4.36 7.39-4.36 4.48 0 8 4.32 8.07 4.36a1.47 1.47 0 0 0 .46.37l.23.09h.07a.78.78 0 0 0 .21 0h.36a.8.8 0 0 0 .21-.05.19.19 0 0 0 .08 0l.19-.07.12-.08.12-.08L65 18l.12-.12s3.59-4.36 8.07-4.36c2.58 0 5.07 1.47 7.39 4.36a10.51 10.51 0 0 1 1.93 9.25C80.66 36 70.8 45.23 64 48.92 57.2 45.23 47.34 36 45.43 27.14Z" />
        </SvgWrapper>
    );
}
export default SvgHealthLg;
