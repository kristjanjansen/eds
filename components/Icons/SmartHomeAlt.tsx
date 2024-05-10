import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSmartHomeAlt(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M122.12 110.27h-7.53c.54-4.62 3.52-8.17 7.1-8.17a1.5 1.5 0 0 0 0-3c-5.21 0-9.52 4.89-10.12 11.17h-6.8c.67-10.34 8.14-18.81 16.92-18.81a1.5 1.5 0 0 0 0-3c-10.4 0-19.25 9.84-19.94 21.81h-9.39V78.92a1.5 1.5 0 0 0-3 0v31.35h-24.5V89.59a1.5 1.5 0 0 0-1.5-1.5h-17a1.5 1.5 0 0 0-1.5 1.5v20.68h-24.2l.25-31.34a1.5 1.5 0 0 0-1.49-1.51 1.5 1.5 0 0 0-1.5 1.49l-.25 31.36H5.88a1.5 1.5 0 1 0 0 3h116.24a1.5 1.5 0 0 0 0-3ZM47.84 91.09h14v19.18h-14ZM88.52 41.76h20.88a10.78 10.78 0 1 0-2.93-21.15 10.13 10.13 0 0 0-18.89 3.21 9 9 0 0 0 .94 17.94Zm0-15h.33a1.5 1.5 0 0 0 1.6-1.47A7.13 7.13 0 0 1 104.28 23a1.49 1.49 0 0 0 2 .86 7.59 7.59 0 0 1 3.11-.66 7.78 7.78 0 1 1 0 15.56H88.52a6 6 0 1 1 0-12ZM10.58 76.88a1.47 1.47 0 0 0 1-.41l43.53-41.56 43 41.55a1.5 1.5 0 1 0 2.08-2.15l-44-42.56a1.5 1.5 0 0 0-2.08 0L9.55 74.3a1.5 1.5 0 0 0-.05 2.12 1.48 1.48 0 0 0 1.08.46Z" />
            <path d="M46.87 68.14a8 8 0 1 0 8-8 8 8 0 0 0-8 8Zm13 0a5 5 0 1 1-5-5 5 5 0 0 1 4.96 5Z" />
        </SvgWrapper>
    );
}
export default SvgSmartHomeAlt;
