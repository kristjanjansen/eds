import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgAuditLg(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 113.71 127"
            {...props}
        >
            <path d="M20.78 38.94h23a1.5 1.5 0 0 0 0-3h-23a1.5 1.5 0 0 0 0 3Z" />
            <circle cx={13.89} cy={37.44} r={2.17} />
            <path d="M56.39 57.33a1.517 1.517 0 0 0-2.12 2.17L65 70.18a1.5 1.5 0 0 0 1.06.44 1.52 1.52 0 0 0 1.06-.44l20.19-20.2a1.49 1.49 0 0 0 0-2.12 1.51 1.51 0 0 0-2.12 0L66.07 67Z" />
            <circle cx={13.89} cy={52.94} r={2.17} />
            <path d="M13.89 70.19a2.17 2.17 0 1 0-2.16-2.17 2.17 2.17 0 0 0 2.16 2.17ZM20.78 83.64h23a1.5 1.5 0 0 0 0-3h-23a1.5 1.5 0 1 0 0 3Z" />
            <circle cx={13.89} cy={82.14} r={2.17} />
            <path d="M56.15 95.89H13.23a1.5 1.5 0 0 0-1.5 1.5v10.59a1.5 1.5 0 0 0 1.5 1.5h42.92a1.5 1.5 0 0 0 1.5-1.5V97.39a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 10.61H14.73v-7.61h39.92Z" />
            <path d="m112.58 115.68-12.19-16.32V1.5a1.5 1.5 0 0 0-1.5-1.5H1.5A1.5 1.5 0 0 0 0 1.5v124a1.5 1.5 0 0 0 1.5 1.5h97.39a1.5 1.5 0 0 0 1.5-1.5v-4.8l1.87 2.5a6 6 0 0 0 4.89 2.43 6.61 6.61 0 0 0 6.45-5.31 5.92 5.92 0 0 0-1.02-4.64ZM97.39 3v14H3V3Zm0 121H3V20h94.39v75.34l-13-17.48a24.45 24.45 0 0 0 7-17.07 1.5 1.5 0 0 0-3 0 21.5 21.5 0 1 1-11.42-19 1.5 1.5 0 0 0 1.41-2.65A24.53 24.53 0 0 0 44.07 51.5a1.36 1.36 0 0 0-.36-.05h-23a1.5 1.5 0 0 0 0 3h22.36a24.14 24.14 0 0 0-.84 6.35 24.62 24.62 0 0 0 .72 5.7H20.78a1.5 1.5 0 1 0 0 3h23.1a24.55 24.55 0 0 0 22.9 15.8 24.28 24.28 0 0 0 6.53-.89l24.08 32.27Zm13.26-4.24a3.52 3.52 0 0 1-1.41 2.18 3.25 3.25 0 0 1-4.56-.52l-28.39-38a24.74 24.74 0 0 0 5.83-3.5l28 37.57a2.9 2.9 0 0 1 .53 2.27Z" />
        </SvgWrapper>
    );
}
export default SvgAuditLg;