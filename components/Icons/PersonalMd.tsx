import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgPersonalMd(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            {...props}
        >
            <path d="M61.83 40.73a4 4 0 0 0-5.59-5.59L37.48 53.9a1 1 0 0 0-.19.29v.08a.36.36 0 0 0 0 .09l-1.38 5.55a.22.22 0 0 1 0 .08 6 6 0 0 1-2.6.75c-1.37 0-1.39-.32-1.43-.88a1.45 1.45 0 0 0-.57-1.24c-.52-.33-1.18-.17-2 .16-.48.2-.92.35-1.31.47a2.72 2.72 0 0 0 .64-1.84A1.65 1.65 0 0 0 27.16 56a3.45 3.45 0 0 0-2.48.9 3.67 3.67 0 0 0 .1-.86c0-.88-.46-1.14-.73-1.22-.43-.12-1.3-.37-4.32 4.39A.75.75 0 0 0 21 60a32.7 32.7 0 0 1 2-2.87 12.74 12.74 0 0 1-2 3.19l-.55.62a.76.76 0 0 0 .07 1 .75.75 0 0 0 1.05 0c.08-.08.29-.31.57-.64 2-2.19 4.05-4 4.66-3.85.2 0 .2.1.21.13a2.1 2.1 0 0 1-1.27 1.52q-1.38.62-1 1.47c.56 1.32 4 .05 5-.36a5.38 5.38 0 0 1 .51-.19c.05.7.2 2.24 2.93 2.25a7.36 7.36 0 0 0 3.37-1 .73.73 0 0 0 .16-.14h.3l5.56-1.38H42.74a1.17 1.17 0 0 0 .3-.19L57.46 45.1 60 42.58a1.34 1.34 0 0 1 0 1.84l-5.42 5.41A1 1 0 1 0 56 51.24l5.41-5.41a3.33 3.33 0 0 0 0-4.67Zm-4.18-4.18a2 2 0 0 1 2.77 2.77L56.76 43 54 40.21ZM42.36 57.37l-2.76-2.76 13-13 2.76 2.77Zm-3.63-.8 1.67 1.67-2.23.56ZM13.81 20.32l.51 2.84a3 3 0 0 0 2.06 2.38C18.09 31.72 23 36 28.57 36s10.49-4.26 12.2-10.44a3 3 0 0 0 2-2.39l.51-2.84a3.93 3.93 0 0 0-.2-2.33 1 1 0 0 0 .28-.68c0-9-6.39-15.8-14.87-15.8S13.73 8.29 13.73 17.3a1 1 0 0 0 .27.7 4 4 0 0 0-.19 2.32ZM41.36 20l-.5 2.81a1 1 0 0 1-1 .93 1 1 0 0 0-.87.76c-1.34 5.56-5.62 9.5-10.42 9.5s-9.08-3.92-10.41-9.52a1 1 0 0 0-.87-.76 1 1 0 0 1-1-.91L15.78 20a1.82 1.82 0 0 1 .15-1.33 1.15 1.15 0 0 1 .84-.33h1a9.78 9.78 0 0 0 8.6-4.4c3.29 4.4 7.53 4.4 13.68 4.4h.28a1.15 1.15 0 0 1 .84.33 1.8 1.8 0 0 1 .19 1.33ZM28.54 3.5c7 0 12.4 5.43 12.84 12.8h-1.29c-6.69 0-10.05 0-12.88-4.81a1 1 0 0 0-.86-.49 1 1 0 0 0-.86.56 7.93 7.93 0 0 1-7.64 4.74h-2c.36-7.37 5.7-12.8 12.69-12.8Z" />
            <path d="M28.65 47a15.19 15.19 0 0 0 11.73-5.6l4.15 2.11a.91.91 0 0 0 .45.11 1 1 0 0 0 .89-.55 1 1 0 0 0-.43-1.34l-8.91-4.53a1 1 0 1 0-.91 1.8l2.94 1.5a13.21 13.21 0 0 1-9.91 4.5 13 13 0 0 1-9.77-4.36L22.24 39a1 1 0 0 0-.89-1.79L3 46.25a1 1 0 0 0-.55.74L1 55.62a1 1 0 0 0 .82 1.15H2a1 1 0 0 0 1-.84l1.31-8.12L17 41.54A15 15 0 0 0 28.65 47Z" />
        </SvgWrapper>
    );
}
export default SvgPersonalMd;
