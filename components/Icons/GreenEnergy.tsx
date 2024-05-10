import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgGreenEnergy(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            {...props}
        >
            <path d="M60 0a60 60 0 1 0 60 60A60 60 0 0 0 60 0Zm0 116a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" />
            <path d="m99.25 59.79-1.67-.15c-.63-.06-15.66-1.3-24.44 7.47-8 8-7.66 21.23-7.5 24-1.29.87-2.5 1.64-3.62 2.28V73.54C64.66 70.93 74.2 60.65 74.2 48c0-14.33-12.31-25.65-12.84-26.13L60 20.68l-1.32 1.22c-.53.48-12.84 11.8-12.84 26.13 0 12.62 9.54 22.9 12.18 25.51v19.81c-1.13-.65-2.36-1.42-3.66-2.3.16-2.78.48-16-7.5-23.94-8.78-8.77-23.81-7.52-24.44-7.47l-1.67.15-.15 1.67c-.05.63-1.3 15.66 7.47 24.44 4.9 4.89 11.8 6.63 16.73 7.23l5.77.19a51.57 51.57 0 0 0 8.65 5.13 2.08 2.08 0 0 0 .8.17 2.16 2.16 0 0 0 .8-.17 51.49 51.49 0 0 0 8.63-5.13l5.55-.17h.18c4.93-.6 11.83-2.34 16.73-7.23 8.77-8.78 7.52-23.81 7.47-24.44ZM76 69.94c5.09-5.09 13.09-6.17 17.68-6.35A122 122 0 0 1 69.6 88.2c.1-4.47 1.05-12.93 6.4-18.26ZM70.2 48c0 8.12-4.78 15.38-8.18 19.53V28.5c3.4 4.15 8.18 11.42 8.18 19.5Zm-20.36 0c0-8.11 4.78-15.38 8.18-19.53v39.09c-3.4-4.15-8.18-11.41-8.18-19.56Zm.55 40.14a122.35 122.35 0 0 1-24-24.58c4.58.17 12.59 1.25 17.69 6.35 5.24 5.33 6.2 13.78 6.31 18.26ZM30.9 83.07c-4.16-4.17-5.64-10.28-6.14-14.89a128.79 128.79 0 0 0 20.37 21C40.84 88.6 35 87.11 30.9 83.07Zm58.2 0c-4 4-9.91 5.53-14.2 6.07a129.47 129.47 0 0 0 20.34-21c-.5 4.64-1.98 10.76-6.14 14.93Z" />
        </SvgWrapper>
    );
}
export default SvgGreenEnergy;
