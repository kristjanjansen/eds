import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgWalkingLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="m98.46 50.06-11.17-2.85a14.88 14.88 0 0 1-6.81-3.91l-9-9.11A17.67 17.67 0 0 0 47.58 33L34.63 43.84a17.71 17.71 0 0 0-6 10.09l-3.32 16.46a6.73 6.73 0 1 0 13.14 2.91l2.1-10a14.7 14.7 0 0 1 5.67-8.82l3.94-2.89.84 23.54a2.52 2.52 0 0 1-.15.88L43.29 93a14.72 14.72 0 0 1-3 4.78c-3.14 3.37-9 9.72-13.2 14.16a8.66 8.66 0 0 0 .12 11.93l.13.13a8.5 8.5 0 0 0 11.89.28L55.52 109a17.82 17.82 0 0 0 4.37-6.49L63.21 94l20.4 29.25a8.19 8.19 0 0 0 5.48 3.34 8.64 8.64 0 0 0 1.24.1 8.19 8.19 0 0 0 5-1.68 8.3 8.3 0 0 0 2.21-10.63l-21.36-38A2.71 2.71 0 0 1 75.8 75V59.21l20.11 3.19a6.31 6.31 0 0 0 7.28-5.78 6.31 6.31 0 0 0-4.73-6.56Zm-41.37 51.38a14.73 14.73 0 0 1-3.63 5.38l-16.25 15.29a5.49 5.49 0 0 1-7.68-.18l-.13-.13a5.67 5.67 0 0 1-.09-7.8c4.16-4.45 10.07-10.79 13.2-14.16a17.43 17.43 0 0 0 3.55-5.69L52.77 79l8.37 12ZM99 58.76a3.25 3.25 0 0 1-2.57.67L75.8 56.17v-4.86a1.5 1.5 0 0 0-3 0V75a5.72 5.72 0 0 0 .73 2.81l21.37 38a5.29 5.29 0 0 1-1.41 6.77 5.28 5.28 0 0 1-7.43-1.1L53.93 75.4a3 3 0 0 0 0-.31l-.9-26.42a1.5 1.5 0 0 0-2.39-1.16l-6.22 4.58a17.64 17.64 0 0 0-6.8 10.61l-2.1 10a3.78 3.78 0 0 1-4.12 2.93A3.73 3.73 0 0 1 28.24 71l3.32-16.51a14.76 14.76 0 0 1 5-8.38l13-10.8a14.68 14.68 0 0 1 19.86 1l9 9.1a17.61 17.61 0 0 0 8.2 4.71L97.72 53A3.3 3.3 0 0 1 99 58.76ZM62.81 25.77a12.21 12.21 0 1 0-12.2-12.21 12.23 12.23 0 0 0 12.2 12.21Zm0-21.41a9.21 9.21 0 1 1-9.2 9.2 9.22 9.22 0 0 1 9.2-9.2Z" />
        </SvgWrapper>
    );
}
export default SvgWalkingLg;
