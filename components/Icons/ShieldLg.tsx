import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgShieldLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M64 127.51a1.47 1.47 0 0 1-.46-.07 100.73 100.73 0 0 1-27-14.48C18.8 99.57 9.42 82.27 9.42 62.93V19.29a1.5 1.5 0 0 1 1-1.43L63.54.56a1.45 1.45 0 0 1 .92 0l53.08 17.3a1.5 1.5 0 0 1 1 1.43v43.64c0 19.34-9.38 36.64-27.14 50a100.73 100.73 0 0 1-27 14.48 1.47 1.47 0 0 1-.4.1ZM12.42 20.38v42.55c0 42.21 46.44 59.69 51.58 61.5 5.14-1.81 51.58-19.29 51.58-61.5V20.38L64 3.57ZM64 82.34a6.45 6.45 0 0 1-4.6-1.9L41.87 62.92a6.5 6.5 0 0 1 9.19-9.2L64 66.65l24.12-24.18a6.5 6.5 0 1 1 9.19 9.19L68.58 80.44a6.41 6.41 0 0 1-4.58 1.9Zm3.53-3ZM46.46 54.82a3.47 3.47 0 0 0-2.47 1 3.52 3.52 0 0 0-1 2.48 3.48 3.48 0 0 0 1 2.47l17.52 17.55a3.59 3.59 0 0 0 4.95 0l28.73-28.78a3.49 3.49 0 0 0 0-4.95 3.58 3.58 0 0 0-4.94 0l-25.2 25.24a1.46 1.46 0 0 1-1.06.44 1.46 1.46 0 0 1-1.06-.44l-14-14a3.45 3.45 0 0 0-2.47-1.01Z" />
        </SvgWrapper>
    );
}
export default SvgShieldLg;
