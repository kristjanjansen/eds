import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgHeatPumpAllLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="heat-pump-all-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M125.14 68.76c-2-.54-4-1-5.91-1.53a1.42 1.42 0 0 0 .07-.42V18.75h5.44A1.48 1.48 0 0 0 126 18a1.51 1.51 0 0 0 0-1.51L119.09 4.8a1.51 1.51 0 0 0-1.29-.73H62.08a1.51 1.51 0 0 0-1.29.73l-6.94 11.68a1.51 1.51 0 0 0 1.29 2.27h5.44v16.09H36.15a1.5 1.5 0 0 0-1.5 1.5v26.12a225.16 225.16 0 0 0-31.78 6.11 1.5 1.5 0 0 0 .78 2.9 221.87 221.87 0 0 1 32.18-6.13 1.75 1.75 0 0 0 .32 0 1.54 1.54 0 0 0 .64-.15 246.85 246.85 0 0 1 27.67-1.49c6.7 0 13.2.26 19.58.78v10.38h-42.1a4.71 4.71 0 1 0 0 9.41h40.4A1.71 1.71 0 0 1 84 86v.53a1.71 1.71 0 0 1-1.7 1.71H41.94a4.71 4.71 0 1 0 0 9.41h40.4a1.7 1.7 0 0 1 1.7 1.7v.21a1.71 1.71 0 0 1-1.7 1.71h-40.4a4.71 4.71 0 1 0 0 9.41h40.4a1.7 1.7 0 0 1 1.7 1.7v.46a1.7 1.7 0 0 1-1.7 1.7h-40.4a4.71 4.71 0 1 0 0 9.41h43.6a8.43 8.43 0 0 0 8.46-8.44v-50a220.66 220.66 0 0 1 30.38 6.13 1.9 1.9 0 0 0 .4 0 1.5 1.5 0 0 0 .4-2.95ZM62.93 7.07h54l5.15 8.68h-64.3ZM37.65 37.84H60.5v22.89q-11.59.18-22.85 1.39Zm25.93 22.87v-42h52.72v47.82a219.37 219.37 0 0 0-30.45-4.9 1.55 1.55 0 0 0-.31 0c-6.86-.6-13.84-.9-21.06-.9ZM91 115.51a5.42 5.42 0 0 1-5.42 5.42H41.94a1.71 1.71 0 1 1 0-3.41h40.4a4.71 4.71 0 0 0 4.7-4.7v-.46a4.71 4.71 0 0 0-4.7-4.7h-40.4a1.71 1.71 0 1 1 0-3.41h40.4A4.71 4.71 0 0 0 87 99.54v-.21a4.71 4.71 0 0 0-4.7-4.7H41.94a1.71 1.71 0 1 1 0-3.41h40.4A4.71 4.71 0 0 0 87 86.51V86a4.71 4.71 0 0 0-4.7-4.71H41.94a1.71 1.71 0 1 1 0-3.41h43.6a1.5 1.5 0 0 0 1.5-1.5V64.75c1.31.13 2.62.26 3.92.41Z" />
            <path d="M89.49 53.68a13.46 13.46 0 0 0 3-.34 1 1 0 0 0-.46-2 11 11 0 0 1-11.09-17.56L82.71 35a.56.56 0 0 0 .89-.51l-.46-4.74a.56.56 0 0 0-.71-.49l-4.5 1.25a.56.56 0 0 0-.18 1l1.56 1.1a13 13 0 0 0 10.18 21ZM87 30a11.35 11.35 0 0 1 2.53-.29 11 11 0 0 1 8.49 18l-1.73-1.22a.56.56 0 0 0-.88.52l.45 4.74a.56.56 0 0 0 .71.49l4.43-1.3a.56.56 0 0 0 .17-1l-1.59-1.13A13 13 0 0 0 86.5 28a1 1 0 0 0 .5 2ZM112.59 76.89a1.38 1.38 0 0 0-2.12.11l-6.24 8.3a1.38 1.38 0 0 0 1.16 2.22l5.91-.24a.76.76 0 0 0 .06.25 4.12 4.12 0 0 1-1.82 5.31c-2.37 1.47-3.7 3.52-3.65 5.63s1.46 4.09 4 5.51c1.41.79 3.1 2.12 3.19 3.93.08 1.63-1.17 3.39-3.61 5.09a6.87 6.87 0 0 0-3.25 4.78 7.41 7.41 0 0 0 1.75 5.31 1 1 0 0 0 .75.34 1 1 0 0 0 .66-.25 1 1 0 0 0 .09-1.41 5.48 5.48 0 0 1-1.27-3.77 5 5 0 0 1 2.4-3.37c3.83-2.66 4.54-5.18 4.47-6.83s-.86-3.69-4.21-5.57c-1.89-1.07-2.94-2.42-3-3.81s1-2.8 2.71-3.89a6.09 6.09 0 0 0 2.77-7.35l5.48-.23a1.39 1.39 0 0 0 1-2.33ZM4 52a4.66 4.66 0 0 1 3.62-1.69 3.23 3.23 0 0 1 2.46 1.35 4.4 4.4 0 0 0 3.51 1.85h.15a6.24 6.24 0 0 0 4.65-2.26c1.21-1.48 3.87-.79 3.89-.78a.79.79 0 0 0 .22 0l-.13 3.39a.66.66 0 0 0 1.05.55l5.11-3.87a.66.66 0 0 0 0-1l-4.79-4.44a.66.66 0 0 0-1.11.46l-.11 2.92c-.88-.19-4-.66-5.72 1.5a4.23 4.23 0 0 1-3.2 1.53 2.38 2.38 0 0 1-2-1 5.16 5.16 0 0 0-4-2.17 6.66 6.66 0 0 0-5.22 2.33 1 1 0 0 0 .07 1.42A1 1 0 0 0 4 52ZM49.07 42.9a7.21 7.21 0 1 0 7.21 7.21 7.21 7.21 0 0 0-7.21-7.21Zm5.16 6.72h-2.78a2.3 2.3 0 0 0-.34-.82l2-2a5.09 5.09 0 0 1 1.12 2.82Zm-5.16 1.91a1.43 1.43 0 1 1 1.43-1.42 1.43 1.43 0 0 1-1.43 1.42Zm1.34-3.45a2.62 2.62 0 0 0-.84-.35V45a5.11 5.11 0 0 1 2.8 1.17Zm-1.84-.35a2.66 2.66 0 0 0-.83.35l-2-2A5.18 5.18 0 0 1 48.57 45Zm-.81 4.41a2.41 2.41 0 0 0 .81.34v2.78a5.12 5.12 0 0 1-2.78-1.15Zm1.81.34a2.38 2.38 0 0 0 .82-.34l2 2a5.12 5.12 0 0 1-2.79 1.15Zm-4.5-5.66 2 2a2.3 2.3 0 0 0-.34.82h-2.81a5.15 5.15 0 0 1 1.15-2.82Zm-1.15 3.8h2.79a2.38 2.38 0 0 0 .34.82l-2 2a5.21 5.21 0 0 1-1.13-2.82Zm9.15 2.79-2-2a2.38 2.38 0 0 0 .34-.82h2.79a5.21 5.21 0 0 1-1.13 2.82Z" />
        </SvgWrapper>
    );
}
export default SvgHeatPumpAllLg;
