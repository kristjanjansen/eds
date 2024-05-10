import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCottageLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M84.88 35.2h28.6a14.21 14.21 0 0 0 0-28.42 13.88 13.88 0 0 0-4.29.67 13.32 13.32 0 0 0-25.11 4.25 11.76 11.76 0 0 0 .8 23.5Zm0-20.53h.49a1.51 1.51 0 0 0 1.11-.4 1.49 1.49 0 0 0 .52-1.04 10.32 10.32 0 0 1 20-3.36 1.51 1.51 0 0 0 2 .86 11.07 11.07 0 0 1 4.49-1 11.21 11.21 0 0 1 0 22.42H84.88a8.77 8.77 0 1 1 0-17.53ZM3.34 83.86l52.76-51 52.76 51a1.5 1.5 0 1 0 2.08-2.16l-53.8-52a1.5 1.5 0 0 0-2.08 0l-53.8 52a1.5 1.5 0 1 0 2.08 2.16Z" />
            <path d="M45.73 66.65A10.37 10.37 0 1 0 56.1 56.28a10.39 10.39 0 0 0-10.37 10.37Zm17.74 0a7.37 7.37 0 1 1-7.37-7.37 7.39 7.39 0 0 1 7.37 7.37ZM126.4 124.9h-11.81c.54-4.62 3.52-8.17 7.1-8.17a1.5 1.5 0 0 0 0-3c-5.21 0-9.52 4.89-10.12 11.17h-6.8c.67-10.34 8.14-18.81 16.92-18.81a1.5 1.5 0 0 0 0-3c-10.4 0-19.25 9.84-19.94 21.81h-8.14V82.78a1.5 1.5 0 0 0-3 0v42.12h-24.5v-20.68a1.5 1.5 0 0 0-1.5-1.5h-17a1.5 1.5 0 0 0-1.5 1.5v20.68H21.9V82.78a1.5 1.5 0 0 0-3 0v42.12H1.6a1.5 1.5 0 1 0 0 3h124.8a1.5 1.5 0 0 0 0-3Zm-77.31-19.18h14v19.18h-14Z" />
        </SvgWrapper>
    );
}
export default SvgCottageLg;
