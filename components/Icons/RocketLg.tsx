import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRocketLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64.47 60.7a2.84 2.84 0 1 0 2.84 2.83 2.84 2.84 0 0 0-2.84-2.83ZM74.32 51.56l-4.71 4.71a1.49 1.49 0 0 0 0 2.12 1.45 1.45 0 0 0 1.06.44 1.47 1.47 0 0 0 1.06-.44l4.71-4.71a1.5 1.5 0 0 0-2.12-2.12ZM15.89 79.38a1.53 1.53 0 0 0 1.11-.44l8.15-8.15A1.5 1.5 0 0 0 23 68.67l-8.15 8.15a1.5 1.5 0 0 0 1.06 2.56ZM4 105.6l17.67-17.69a1.5 1.5 0 1 0-2.12-2.12L1.86 103.48a1.49 1.49 0 0 0 0 2.12 1.45 1.45 0 0 0 1.06.44A1.47 1.47 0 0 0 4 105.6ZM40.09 106.33 22.4 124a1.49 1.49 0 0 0 0 2.12 1.45 1.45 0 0 0 1.06.44 1.47 1.47 0 0 0 1.06-.44l17.69-17.69a1.5 1.5 0 1 0-2.12-2.12ZM22.85 106.33a1.49 1.49 0 0 0-2.12 0L3 124a1.51 1.51 0 0 0 0 2.12 1.48 1.48 0 0 0 1.06.44 1.45 1.45 0 0 0 1.06-.44l17.7-17.69a1.51 1.51 0 0 0 .03-2.1ZM57.21 102.9l-8.15 8.15a1.49 1.49 0 0 0 0 2.12 1.5 1.5 0 0 0 2.12 0l8.15-8.17a1.5 1.5 0 0 0-2.12-2.12ZM82.23 33.38a8.76 8.76 0 1 0 15 6.19 8.67 8.67 0 0 0-2.57-6.19 8.76 8.76 0 0 0-12.43 0Zm12 6.19a5.77 5.77 0 1 1-1.73-4.07 5.73 5.73 0 0 1 1.69 4.07Z" />
            <path d="M125.43 2.57a3.91 3.91 0 0 0-2.91-1.15A109.22 109.22 0 0 0 93 7.51h-.06C80.36 12 69.84 18.38 61.69 26.53c-1.52 1.52-3 3.14-4.48 4.81-8-4.27-14.52-2.65-18.6-.46-9.71 5.19-15.72 19.22-15.72 29.23a3.92 3.92 0 0 0 6.69 2.77 13.89 13.89 0 0 1 10.75-4 85.6 85.6 0 0 0-3.59 10.82 8.13 8.13 0 0 0-.06 3.8 24.79 24.79 0 0 0-5.8 4.33c-6.5 6.51-7.85 21.33-8 23a3.93 3.93 0 0 0 4.22 4.22c1.67-.13 16.5-1.48 23-8a24.79 24.79 0 0 0 4.33-5.8 8.13 8.13 0 0 0 3.8-.06 84.56 84.56 0 0 0 10.82-3.59 13.93 13.93 0 0 1-3.95 10.75 3.92 3.92 0 0 0 2.77 6.69c10 0 24-6 29.23-15.72 2.19-4.08 3.81-10.56-.46-18.6 1.67-1.46 3.29-3 4.81-4.48 8.15-8.15 14.54-18.67 19-31.28v-.07a109.11 109.11 0 0 0 6.09-29.48 3.91 3.91 0 0 0-1.11-2.84Zm-98 58.19a.93.93 0 0 1-1 .2.91.91 0 0 1-.57-.85c0-9.15 5.4-21.92 14.13-26.59a15.23 15.23 0 0 1 7.22-1.83 17.91 17.91 0 0 1 8.09 2.06 251.14 251.14 0 0 0-13.63 22.31h-.14a17.08 17.08 0 0 0-14.07 4.7ZM48 95c-4.68 4.67-15.86 6.69-21.19 7.11a.93.93 0 0 1-.65-.27.92.92 0 0 1-.27-.72C26.31 95.86 28.33 84.68 33 80a21.88 21.88 0 0 1 5.17-3.85l13.68 13.67A22.14 22.14 0 0 1 48 95Zm9.5-6.64a5.31 5.31 0 0 1-3-.13L39.78 73.5a5.22 5.22 0 0 1-.14-3 82.62 82.62 0 0 1 3.08-9.5L67 85.28a84 84 0 0 1-9.5 3.08Zm37-.38c-4.7 8.73-17.5 14.13-26.61 14.13a.91.91 0 0 1-.85-.57.93.93 0 0 1 .2-1A17.07 17.07 0 0 0 72 86.47v-.14a251.14 251.14 0 0 0 22.25-13.66c3.34 6.66 2.02 11.96.23 15.33Zm4.87-23.79c-1.74 1.74-3.6 3.45-5.54 5.09A226.85 226.85 0 0 1 69.93 84L44 58.07a228.53 228.53 0 0 1 14.72-23.88c1.64-1.94 3.35-3.8 5.09-5.54C71.46 21 81.31 15 93.12 10.67l24.21 24.21C113 46.69 107 56.54 99.35 64.19Zm19.07-32.46L96.27 9.58a104.9 104.9 0 0 1 26.36-5.16.81.81 0 0 1 .68.27.92.92 0 0 1 .27.68 104.9 104.9 0 0 1-5.16 26.36Z" />
        </SvgWrapper>
    );
}
export default SvgRocketLg;
