import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSolarHomeAlt(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M91.8 45.58h20.89a10.78 10.78 0 0 0 0-21.56 10.68 10.68 0 0 0-2.93.4 10.13 10.13 0 0 0-18.89 3.22 9 9 0 0 0 .93 17.94Zm0-15h.34a1.45 1.45 0 0 0 1.11-.39 1.5 1.5 0 0 0 .48-1.07 7.13 7.13 0 0 1 13.83-2.32 1.51 1.51 0 0 0 .82.86 1.49 1.49 0 0 0 1.19 0 7.78 7.78 0 1 1 3.12 14.91H91.8a6 6 0 0 1 0-12ZM62.81 68.14a8 8 0 1 0 8-8 8 8 0 0 0-8 8Zm13 0a5 5 0 1 1-5-5 5 5 0 0 1 4.95 5Z" />
            <path d="M122.12 110.27H114c.5-3 2.42-5.16 4.72-5.16a1.5 1.5 0 0 0 0-3c-3.91 0-7.15 3.55-7.74 8.16h-4.19c.65-7.15 5.85-12.93 11.93-12.93a1.5 1.5 0 0 0 0-3c-7.69 0-14.25 7.16-14.93 15.93h-5.21V79.92a1.5 1.5 0 0 0-3 0v30.35H78.5v-14.7a1.5 1.5 0 0 0-1.5-1.5H64.57a1.5 1.5 0 0 0-1.5 1.5v14.7h-9.2L43.39 70.18 70.78 44 109 81a1.5 1.5 0 0 0 1 .42 1.46 1.46 0 0 0 1.08-.46 1.5 1.5 0 0 0 0-2.12l-39.29-38a1.5 1.5 0 0 0-2.08 0l-27.23 26-1.47-5.64a1.51 1.51 0 0 0-1.41-1.1H5.88a1.5 1.5 0 0 0-1.19.58A1.51 1.51 0 0 0 4.43 62l10.45 40L6 110.7a1.5 1.5 0 0 0 1 2.57 1.48 1.48 0 0 0 1-.43l7.65-7.51 1.78 6.82a1.5 1.5 0 0 0 1.57 1.12h103.12a1.5 1.5 0 0 0 0-3Zm-90.69 0L19.1 63.1h8.12l12.33 47.17ZM7.82 63.1H16l12.33 47.17h-8.18Zm36.89 47.17h-2.06L30.32 63.1h8.12l12.33 47.17Zm21.36-13.2h9.43v13.2h-9.43Z" />
        </SvgWrapper>
    );
}
export default SvgSolarHomeAlt;
