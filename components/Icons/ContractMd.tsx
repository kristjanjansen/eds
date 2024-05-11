import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgContractMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M53.71 46.27a1 1 0 0 0-1 1V61H11.29V3h41.42v19.64a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1H10.29a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h43.42a1 1 0 0 0 1-1V47.27a1 1 0 0 0-1-1Z" />
            <path d="M46.27 8.39H17.38a1 1 0 0 0 0 2h28.89a1 1 0 0 0 0-2ZM46.27 15H17.38a1 1 0 0 0 0 2h28.89a1 1 0 0 0 0-2ZM47.27 22.64a1 1 0 0 0-1-1H17.38a1 1 0 1 0 0 2h28.89a1 1 0 0 0 1-1ZM17.38 28.26a1 1 0 0 0 0 2h22.53a1 1 0 0 0 0-2ZM61.14 31.93l.58-.59a4.36 4.36 0 0 0-3.09-7.45 4.33 4.33 0 0 0-3.09 1.28l-21.4 21.4a1 1 0 0 0-.26.46l-1.55 6.25a15.6 15.6 0 0 1-3.24.6c1.14-.58 2-1.49 2-2.46 0-.47-.31-1.29-1.86-1.52a8 8 0 0 0-4.08 1.19 2.48 2.48 0 0 0 .16-1.22 1.53 1.53 0 0 0-1.05-1.44c-1.69-.43-4.45 2.66-5.95 4.57a.75.75 0 0 0 1.18.93c1.62-2 3.6-3.89 4.28-4a1.27 1.27 0 0 1 0 .18c.12.87-1.39 2.39-2.92 3.57-.64.44-1.14.8-1.39 1a.74.74 0 0 0 .48 1.32.71.71 0 0 0 .4-.11c.27-.17.83-.55 1.5-1 2.53-1.72 5.87-3.63 7.16-3.44a4.11 4.11 0 0 1 .57.15 3.28 3.28 0 0 1-2.09 1.38c-.61.17-1.33.45-1.48 1.07a.93.93 0 0 0 .28.91c.86.79 3.88.66 6.91-.3h.09a1 1 0 0 0 .24 0L39.85 53a1.06 1.06 0 0 0 .47-.27l19.4-19.4h.05a1.67 1.67 0 0 1 0 2.36l-6.17 6.23a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l6.18-6.17a3.69 3.69 0 0 0 0-5.19ZM57 26.58a2.37 2.37 0 0 1 3.35 3.35L56 34.2l-3.34-3.35Zm-17.35 24-3.35-3.35 15-15 3.35 3.35Zm-4.22-1.39 2.26 2.26-3 .75Z" />
        </SvgWrapper>
    );
}
export default SvgContractMd;
