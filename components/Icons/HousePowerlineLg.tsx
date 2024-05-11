import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHousePowerlineLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M41.28 64.29 27.36 77.76a1.5 1.5 0 0 0 1 2.58 1.53 1.53 0 0 0 1.05-.42l13.96-13.47a1.5 1.5 0 1 0-2.09-2.16ZM52.13 55.89a1.5 1.5 0 0 0 2.12 0l15.55-15 40.36 39a1.5 1.5 0 0 0 1 .42 1.46 1.46 0 0 0 1.08-.46 1.5 1.5 0 0 0 0-2.12l-41.4-40a1.51 1.51 0 0 0-2.09 0L52.17 53.77a1.5 1.5 0 0 0-.04 2.12Z" />
            <path d="M61.48 66.43a8.33 8.33 0 1 0 8.32-8.33 8.33 8.33 0 0 0-8.32 8.33Zm13.65 0a5.33 5.33 0 1 1-5.33-5.33 5.33 5.33 0 0 1 5.33 5.33Z" />
            <path d="M123.9 110.9H99V75.84a1.5 1.5 0 0 0-3 0v35.06H77.85V91.33a1.5 1.5 0 0 0-1.5-1.5h-13.1a1.5 1.5 0 0 0-1.5 1.5v19.57H43.83V75.84a1.5 1.5 0 0 0-3 0v35.06h-13a1.5 1.5 0 1 0 0 3h96a1.5 1.5 0 0 0 0-3Zm-49.05 0h-10.1V92.83h10.1Z" />
            <path d="M30 56.56a1.53 1.53 0 0 0 0 .3.45.45 0 0 0 0 .14 1.09 1.09 0 0 0 .05.17l.06.12s.05.09.08.14l.06.07.12.15.07.05a1.07 1.07 0 0 0 .16.14 1.59 1.59 0 0 0 .26.14c.32.13 8 3.27 25.65 4.68h.12a1.5 1.5 0 0 0 .12-3C43 58.54 35.44 56.34 33 55.51v-4.13h5a1.5 1.5 0 0 0 0-3H22V32.67h8v5.19a1.53 1.53 0 0 0 0 .3.38.38 0 0 0 0 .1.84.84 0 0 0 .05.17l.06.12c0 .05.05.1.08.14l.06.08.12.15h.07l.16.13a1.08 1.08 0 0 0 .26.14c.32.14 8 3.28 25.65 4.68h.12a1.5 1.5 0 0 0 .12-3C43 39.84 35.44 37.64 33 36.8v-4.13h5a1.5 1.5 0 0 0 0-3H22V15.6a1.5 1.5 0 1 0-3 0v14.07H4.1a1.5 1.5 0 0 0 0 3h5.57v3.19a1.5 1.5 0 0 0 3 0v-3.19H19v15.71H4.1a1.5 1.5 0 0 0 0 3h5.57v3.18a1.5 1.5 0 0 0 3 0v-3.18H19v61a1.5 1.5 0 0 0 3 0v-61h8Z" />
        </SvgWrapper>
    );
}
export default SvgHousePowerlineLg;
