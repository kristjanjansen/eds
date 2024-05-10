import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgCareerLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M122.31 75H89.63a1.5 1.5 0 0 0-1.5 1.5v16.11H77.59l-1.32-27.25a3.24 3.24 0 0 0-1.87-2.7l-13.81-5.91.81-14.11 12.43 7.53a3.56 3.56 0 0 0 3.18.17l15.83-7.45a6.9 6.9 0 0 0 2-1.59c.3-.35 2.86-3.53 1.39-6.35s-5.37-2.58-5.81-2.56a9.22 9.22 0 0 0-2.38.53l-11.67 4.59a.8.8 0 0 1-.44 0l-10.82-6.86a20 20 0 0 0-1.93-1c-.29-.14-7.37-3.36-12-3.52A26.06 26.06 0 0 0 40.6 27.9a22.29 22.29 0 0 0-10.14 8l-6 8.6a10.53 10.53 0 0 0-1.91 6.31l.3 12.59a6.48 6.48 0 0 0 .65 2.6c.21.41 2.21 4 5.37 3.66s4.4-4 4.54-4.43a8.35 8.35 0 0 0 .38-2.44l-.13-11.27a2 2 0 0 1 .29-.86l4.57-5.94c0 3.74-.08 9.28-.15 13.2v2l-.15 21.68A5 5 0 0 1 38 83l-9 22h-4.79a1.5 1.5 0 0 0-1.5 1.5v15.68h-17a1.5 1.5 0 1 0 0 3h116.6a1.5 1.5 0 0 0 1.5-1.5V76.5a1.5 1.5 0 0 0-1.5-1.5Zm-81.58 9.1a7.81 7.81 0 0 0 .49-2.48l.13-21.71v-2c.31-17.87.2-18-.34-18.57a1.5 1.5 0 0 0-2.29.11l-7.17 9.32a4.88 4.88 0 0 0-.91 2.73l.13 11.27a5.48 5.48 0 0 1-.22 1.45c-.25.71-1.09 2.31-2 2.4s-2.06-1.4-2.44-2.08a3.49 3.49 0 0 1-.31-1.22l-.3-12.59a7.51 7.51 0 0 1 1.37-4.52l6-8.6a19.31 19.31 0 0 1 8.78-6.93 23 23 0 0 1 9.38-1.61c4 .14 10.73 3.2 10.84 3.25a17 17 0 0 1 1.58.85L74.33 40a3.75 3.75 0 0 0 3.12.3l11.73-4.6a6.23 6.23 0 0 1 1.47-.32c.75 0 2.55.14 3 .94s-.52 2.44-1 3a4 4 0 0 1-1 .8l-15.9 7.5a.72.72 0 0 1-.36 0L61.68 39.3a2 2 0 0 0-3.19 1.7l-.89 15.58a3 3 0 0 0 1.76 2.86l13.82 6a1.33 1.33 0 0 0 .1.11l1.3 27.11h-5.79l-.65-19.44a3.15 3.15 0 0 0-1.92-2.71L54 65.68a2.28 2.28 0 0 0-3.13 1.74l-3.25 17.41a7 7 0 0 1-.5 1.48l-9.35 18.62s-.13.1-.13.11h-5.42Zm16.21 8.51a1.5 1.5 0 0 0-1.5 1.5V105H41.07l8.73-17.35a10 10 0 0 0 .77-2.27l3.07-16.61 11.44 4.46s.06.07.06 0l.65 19.33Zm-31.23 29.61V108h29.68v14.18Zm32.73-26.61h29.69v26.61H58.44Zm32.69 26.61V78h29.68v44.22ZM51.89 23.79h.21a10.51 10.51 0 0 0 .22-21h-.22a10.51 10.51 0 0 0-.21 21Zm.21-18h.15a7.51 7.51 0 1 1-.3 15 7.51 7.51 0 0 1-7.35-7.66 7.51 7.51 0 0 1 7.5-7.35Z" />
        </SvgWrapper>
    );
}
export default SvgCareerLg;
