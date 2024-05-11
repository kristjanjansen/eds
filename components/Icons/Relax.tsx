import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgRelax(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M102.69 36.48A13.28 13.28 0 1 0 89.42 23.2a13.29 13.29 0 0 0 13.27 13.28Zm0-23.55A10.28 10.28 0 1 1 92.42 23.2a10.29 10.29 0 0 1 10.27-10.27ZM37.23 71.34c.62.28 1.35.61 2.25 1l9.38 3.87A58.11 58.11 0 0 0 62.59 80a49.92 49.92 0 0 0 6.89.53 21.67 21.67 0 0 0 4.28-.34c5.3-.22 8.45-5.13 12.41-11.34 1.26-2 2.69-4.2 4.3-6.46a2.59 2.59 0 0 0 .17-.33 27.14 27.14 0 0 0 2-2l.35-.39v-.05l8.26-9.77a7.33 7.33 0 0 0 1.58-6.34A6.92 6.92 0 0 0 99 38.65l-.14-.06a10 10 0 0 0-2.13-.6 14.57 14.57 0 0 0-14.43 6.23l-6.13 8.91-18.3-3.45a7.45 7.45 0 0 0-6.58 1.94 7.37 7.37 0 0 0-2.31 5l-5.55-1.73A17.76 17.76 0 0 0 31 56.05l-15 7.28c-1.26-2.54-4.15-7.44-8-8.2A5.7 5.7 0 0 0 2.72 57C-1 60.69.52 67.09 6.89 75a6.72 6.72 0 0 0 7.8 2c5.63-2.26 10.65-4.12 14.93-5.54 4.63-1.46 4.74-1.39 7.61-.12Zm16.09-17.55a4.45 4.45 0 0 1 4-1.16l19.26 3.63a1.52 1.52 0 0 0 1.52-.62l6.68-9.72a11.57 11.57 0 0 1 11.44-5 6.39 6.39 0 0 1 1.55.45 4 4 0 0 1 2.23 2.79 4.34 4.34 0 0 1-1 3.74l-8.25 9.76-.35.39c-2.82 3.14-10.32 11.46-34.28.84l-.44-.18c-2.17-.9-3.26-1.38-3.79-1.64a4.43 4.43 0 0 1 1.43-3.28ZM13.57 74.3a3.75 3.75 0 0 1-4.34-1.14c-2.47-3.08-7.83-10.59-4.38-14a2.67 2.67 0 0 1 2.55-1c2.5.49 5.28 5.07 6.44 7.84a1.5 1.5 0 0 0 2 .77l16.42-7.94a14.7 14.7 0 0 1 10.26-1L55 61.67c9 4 16 5.48 21.37 5.48a22.92 22.92 0 0 0 8.22-1.4l-1 1.49C80 73 77.33 77.1 73.54 77.2a1.86 1.86 0 0 0-.33 0S69.91 78 63 77a54.72 54.72 0 0 1-13-3.62l-9.38-3.87c-.87-.35-1.57-.67-2.17-.94-3.58-1.59-4.35-1.69-9.76.1-4.35 1.45-9.43 3.33-15.12 5.63Z" />
            <path d="M127.09 23a1.5 1.5 0 0 0-2.62-1.47c-.22.39-22.17 39.39-39.1 57.69-17.57 19-51.69-4.56-52-4.8a1.5 1.5 0 0 0-1.73 2.46 83.82 83.82 0 0 0 10.48 6l-9 22.38a68.65 68.65 0 0 1-11.27-8.1 1.5 1.5 0 0 0-2.06 2.18 77.57 77.57 0 0 0 27.49 15.57A64.92 64.92 0 0 0 67 118a63.41 63.41 0 0 0 30.61-8 1.47 1.47 0 0 0 .4-.24 82.7 82.7 0 0 0 12.37-8.44 1.5 1.5 0 0 0-1.86-2.32 82.36 82.36 0 0 1-10.6 7.44L88.2 80.55c17.08-18.82 38.67-57.18 38.89-57.55Zm-78.83 89.07a74 74 0 0 1-12.54-5.35l9.09-22.6c2.23 1 4.64 2 7.19 2.8a49.34 49.34 0 0 0 15.26 2.7c7.4 0 13.68-2.26 18.62-6.72l9.39 25c-14.98 7.92-30.73 9.34-47.01 4.17Z" />
        </SvgWrapper>
    );
}
export default SvgRelax;
