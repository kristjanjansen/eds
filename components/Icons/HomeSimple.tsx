import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHomeSimple(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M9 69.65a1.5 1.5 0 0 0 1-.42l52.76-51 52.76 51a1.5 1.5 0 0 0 2.08-2.16l-20.3-19.7a1.45 1.45 0 0 0 .12-.59V26.84a1.5 1.5 0 0 0-1.5-1.5H84a1.5 1.5 0 0 0-1.5 1.5V33L63.87 15a1.5 1.5 0 0 0-2.08 0L8 67.07a1.49 1.49 0 0 0 0 2.12 1.48 1.48 0 0 0 1 .46Zm76.46-41.31h9v16.24l-9-8.66Z" />
            <path d="M69.19 56.29a1.5 1.5 0 0 0-1.5 1.5v14.87a1.5 1.5 0 0 0 1.5 1.5H82a1.5 1.5 0 0 0 1.5-1.5V57.79a1.5 1.5 0 0 0-1.5-1.5Zm11.27 14.87h-9.77V59.29h9.77ZM43.4 56.29a1.5 1.5 0 0 0-1.5 1.5v14.87a1.5 1.5 0 0 0 1.5 1.5h12.77a1.5 1.5 0 0 0 1.5-1.5V57.79a1.5 1.5 0 0 0-1.5-1.5Zm11.27 14.87H44.9V59.29h9.77Z" />
            <path d="M122.12 110.27h-21.94v-47a1.5 1.5 0 1 0-3 0v47H72.69V89.59a1.5 1.5 0 0 0-1.5-1.5h-17a1.5 1.5 0 0 0-1.5 1.5v20.68H28.47v-47a1.5 1.5 0 1 0-3 0v47H5.88a1.5 1.5 0 1 0 0 3h116.24a1.5 1.5 0 0 0 0-3ZM55.67 91.09h14v19.18h-14Z" />
        </SvgWrapper>
    );
}
export default SvgHomeSimple;
