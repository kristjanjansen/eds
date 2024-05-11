import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSquirrel(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M120.67 24.49a27.71 27.71 0 0 0-8.19-10.69l-1.14-.92a27.6 27.6 0 0 0-15.91-6.36h-1.49a29.14 29.14 0 0 0-29 29.07 29.08 29.08 0 0 0 7.18 18.8 27.53 27.53 0 0 0 2.05 2.13A83.88 83.88 0 0 0 55 54.71a17.18 17.18 0 0 0-5.75-14.92c4-5.54 2.59-12.53 2.52-12.85a3.25 3.25 0 0 0-3.34-2.56 9.38 9.38 0 0 0-2.17.36h-.09a11.31 11.31 0 0 0-4.81 2 23.06 23.06 0 0 0-3.9-6.2 3.25 3.25 0 0 0-4.58.06 2.5 2.5 0 0 0-.22.24c-3.94 4.95-5.36 10.63-4 15.83A28 28 0 0 0 17 43.25L8.2 51.5a10.5 10.5 0 0 0-2.34 11.6 9.51 9.51 0 0 0 8.89 6.26h11.54A35.76 35.76 0 0 0 29 81.1a9.92 9.92 0 0 1-6.39.58 6.16 6.16 0 0 0-6 1.92 7.43 7.43 0 0 0-1.46 7.09 6.15 6.15 0 0 0 4.75 4.13 23.74 23.74 0 0 0 16.7-2.41 38.49 38.49 0 0 0 7.24 5.66 27.1 27.1 0 0 0 3 12h-.29c-7.45 0-11.23 2.78-11.23 8.23v.1a3.37 3.37 0 0 0 3.13 3.13h32.28a50.36 50.36 0 0 0 16-2.4 38.3 38.3 0 0 0 3.65-1.42 38 38 0 0 0 19.07-50.3c-.54-1.21-1.17-2.41-1.77-3.58-2-3.78-3.82-7.36-3.44-11.28a13.31 13.31 0 0 1 8.81-11 13.52 13.52 0 0 1 7.76-.46 1.48 1.48 0 0 0 1.19-.19 1.5 1.5 0 0 0 .64-1 29.22 29.22 0 0 0-1.97-15.41Zm-32.83 89.94a27.89 27.89 0 0 1-2.28 1.92 47.68 47.68 0 0 1-14.81 2.17H38.63a.37.37 0 0 1-.3-.31c0-2.56 1.05-5.15 8.23-5.16h2.9a1.51 1.51 0 0 0 1.32-.78 1.54 1.54 0 0 0-.06-1.54 23.84 23.84 0 0 1-3.87-13.37c.57-3.29 2.79-6.35 4.93-9.32l.28-.38a1.5 1.5 0 0 0-2.44-1.76l-.27.38a32.7 32.7 0 0 0-4.94 8.58A35 35 0 0 1 38 89.49a1.5 1.5 0 0 0-1.88-.24 20.75 20.75 0 0 1-15.55 2.63A3.16 3.16 0 0 1 18 89.75a4.45 4.45 0 0 1 .86-4.16 3.12 3.12 0 0 1 3.13-1 12.91 12.91 0 0 0 9.76-1.56 1.48 1.48 0 0 0 .57-1.91 32.94 32.94 0 0 1-3.07-13.31 1.49 1.49 0 0 0-1.5-1.47h-13A6.49 6.49 0 0 1 8.65 62a7.65 7.65 0 0 1 1.6-8.31L19 45.43a25.07 25.07 0 0 1 11.82-6.27 1.49 1.49 0 0 0 1.08-2c-1.73-4.6-.62-9.89 3.08-14.52a.25.25 0 0 1 .31 0 23.64 23.64 0 0 1 3.75 6.31 29.2 29.2 0 0 0-3.54 6.68 1.51 1.51 0 0 0 .8 2 1.51 1.51 0 0 0 2-.81 24.13 24.13 0 0 1 3.51-6.45c1.57-1 4.35-2.85 6.77-2.94a.23.23 0 0 1 .24.19c.06.28 1.41 6.88-2.81 11.42a1.51 1.51 0 0 0-.39 1.17 1.48 1.48 0 0 0 .61 1.06A14.19 14.19 0 0 1 51.71 56a1.51 1.51 0 0 0 1.67 1.84c5.81-.81 22.71.92 28.18 4.34A48.41 48.41 0 0 1 88.84 68c7.42 7.64 10.4 18.46 8.17 29.69a31.5 31.5 0 0 1-9.17 16.74Zm32-76.53a16.58 16.58 0 0 0-18.58 14.31c-.47 4.84 1.68 9 3.75 13 .62 1.18 1.2 2.3 1.71 3.43A35 35 0 0 1 93.4 112.7a34.47 34.47 0 0 0 6.6-14.44c2.43-12.21-.84-24-9-32.36a47.65 47.65 0 0 0-7-5.69c-.21-.17-.44-.32-.68-.48l-.35-.24a43.48 43.48 0 0 1-8.6-7.11 26.1 26.1 0 0 1-6.44-16.85 26.12 26.12 0 0 1 26.05-26h1.33a24.56 24.56 0 0 1 14.18 5.69l1.14.92a24.86 24.86 0 0 1 7.32 9.52 26.26 26.26 0 0 1 1.91 12.24Z" />
            <path d="M27.05 50a2.43 2.43 0 1 0 2.35 2.35A2.44 2.44 0 0 0 27.05 50Z" />
        </SvgWrapper>
    );
}
export default SvgSquirrel;