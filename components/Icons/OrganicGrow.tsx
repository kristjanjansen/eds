import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgOrganicGrow(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M83.76 51.18a1.5 1.5 0 0 0-1.36-1.36c-.38 0-9.54-.8-14.9 4.57a13.9 13.9 0 0 0-2 2.57v-9.23l3.34-.09H69c3-.36 7.21-1.43 10.21-4.43 5.36-5.36 4.61-14.51 4.57-14.9a1.5 1.5 0 0 0-1.36-1.36c-.38 0-9.54-.79-14.9 4.57a13.64 13.64 0 0 0-2 2.58V23.86l2.81-.07h.14c2.69-.33 6.47-1.29 9.17-4 4.82-4.82 4.14-13 4.11-13.38a1.5 1.5 0 0 0-1.36-1.36C80 5 71.81 4.34 67 9.16a13.83 13.83 0 0 0-3 4.72 13.83 13.83 0 0 0-3-4.72C56.19 4.34 48 5 47.63 5.05a1.5 1.5 0 0 0-1.36 1.36c0 .35-.71 8.56 4.11 13.38 2.7 2.7 6.48 3.66 9.17 4h.14l2.81.07v10.23a13.64 13.64 0 0 0-2-2.58c-5.36-5.36-14.52-4.6-14.9-4.57a1.5 1.5 0 0 0-1.36 1.36c0 .39-.79 9.54 4.57 14.9 3 3 7.2 4.07 10.21 4.43h.14l3.34.09V57a13.9 13.9 0 0 0-2-2.57C55.14 49 46 49.78 45.6 49.82a1.5 1.5 0 0 0-1.36 1.36c0 .38-.79 9.54 4.57 14.9 3 3 7.2 4.06 10.21 4.43h.14l3.34.09v11.57a1.5 1.5 0 1 0 3 0V70.61l3.34-.09H69c3-.37 7.21-1.43 10.21-4.43 5.34-5.37 4.59-14.53 4.55-14.91ZM69.62 33.63c3.3-3.3 8.71-3.73 11.19-3.74 0 2.48-.43 7.88-3.74 11.19-2.37 2.37-5.85 3.25-8.38 3.56l-3.16.09c.14-2.55.83-7.83 4.09-11.1Zm-.5-22.35C71.93 8.47 76.52 8 78.78 8c0 2.25-.46 6.85-3.28 9.66-2.07 2.07-5.12 2.84-7.34 3.12l-2.62.07c.14-2.3.8-6.79 3.58-9.57Zm-9.28 9.51c-2.22-.28-5.27-1.05-7.34-3.12-2.82-2.81-3.25-7.41-3.28-9.66 2.26 0 6.85.46 9.66 3.27s3.44 7.27 3.58 9.58Zm-.53 23.85c-2.53-.31-6-1.19-8.38-3.56-3.3-3.29-3.73-8.71-3.74-11.19 2.48 0 7.88.43 11.19 3.74s3.95 8.54 4.09 11.1Zm0 22.88c-2.53-.31-6-1.19-8.38-3.56-3.3-3.3-3.73-8.71-3.74-11.2 2.48 0 7.88.44 11.19 3.75s3.95 8.54 4.09 11.1Zm9.38 0-3.16.09c.14-2.56.83-7.84 4.09-11.1s8.71-3.73 11.19-3.74c0 2.48-.43 7.88-3.74 11.19-2.37 2.37-5.85 3.25-8.38 3.56ZM104 101.85l6-9.6c1.21-1.55 2.92-5 2.93-7.09L115 36a6.44 6.44 0 0 0-1.79-4.49l-.09-.1a6.57 6.57 0 0 0-4.59-1.92c-1.6 0-3.22 1-5.44 13.11-.84 4.54-1.5 9.38-1.79 12.17l-.21-.05a4.85 4.85 0 0 0-.83-.08h-.12a6.44 6.44 0 0 0-5.58 3.22L80.19 82.55a20.35 20.35 0 0 0-2.76 10.13v.17l1.69 14.88h-2.71a4 4 0 0 0-2.81 1.16 3.89 3.89 0 0 0-1.18 2.75l-.35 7.25a4 4 0 0 0 1.16 2.83 3.93 3.93 0 0 0 2.82 1.18l29.82.11a4 4 0 0 0 4-3.92l.34-7.24a4 4 0 0 0-4-4H104l-.32-5.21a1 1 0 0 1 .22-.61Zm-2.77-47.14h.11l-.23 1.47Zm5.71 56.41a1 1 0 0 1 .28.64l-.34 7.25a1 1 0 0 1-1 1l-29.82-.11a1 1 0 0 1-.7-.29 1 1 0 0 1-.29-.64l.35-7.25a1 1 0 0 1 .29-.7 1 1 0 0 1 .7-.29h4.39l21.77.08h3.67a1 1 0 0 1 .7.31Zm-5.45-10.93a4.11 4.11 0 0 0-.81 2.5l.3 5.12-18.83-.07-1.72-15.14a17.32 17.32 0 0 1 2.35-8.54L97.2 59.33a3.46 3.46 0 0 1 3-1.72 1.23 1.23 0 0 1 .27 0 2.06 2.06 0 0 0 .36.06 3 3 0 0 1 1 .36c.38.39.32 3.17-2.38 9-1.61 4-6.47 14.89-9.49 17.62a1.5 1.5 0 1 0 2 2.22c4.08-3.68 9.64-17.18 10.24-18.65 1.11-2.41 4.31-9.35 1.9-12.16.28-4.65 3-21.14 4.73-23.65a3.53 3.53 0 0 1 2 1 .46.46 0 0 1 .07.07 3.49 3.49 0 0 1 1 2.4l-2.1 49.2a12.86 12.86 0 0 1-2.33 5.35l-.1.14ZM54.4 108.88a4 4 0 0 0-2.81-1.16h-2.72l1.69-14.88v-.17a20.35 20.35 0 0 0-2.76-10.13l-14.4-24.7a6.34 6.34 0 0 0-5.59-3.23 5 5 0 0 0-.94.08l-.21.05h.11L27 56.2l-.34-1.46c-.29-2.79-.95-7.63-1.79-12.17-2.22-12.11-3.87-13.12-5.44-13.12a6.57 6.57 0 0 0-4.59 1.92l-.09.1A6.44 6.44 0 0 0 13 36l2.06 49.1c0 2.12 1.72 5.6 2.93 7.15l6 9.6.11.15a1 1 0 0 1 .22.51l-.32 5.31h-2.25a4 4 0 0 0-4 4.07l.34 7.16a4 4 0 0 0 4 3.94l29.91-.1a3.93 3.93 0 0 0 2.82-1.18 4 4 0 0 0 1.15-2.89l-.34-7.12a3.93 3.93 0 0 0-1.23-2.82Zm-27.89-8.69-6-9.61-.1-.14A12.76 12.76 0 0 1 18.06 85L16 36a3.52 3.52 0 0 1 1-2.46l.07-.07a3.53 3.53 0 0 1 2-1c1.78 2.51 4.45 19 4.73 23.65-2.41 2.8.79 9.75 1.88 12.1.62 1.53 6.18 15 10.26 18.71a1.5 1.5 0 1 0 2-2.22C34.92 82 30.06 71.07 28.42 67c-2.67-5.8-2.73-8.58-2.36-9a2.92 2.92 0 0 1 1.05-.37 2 2 0 0 0 .35-.06 1.42 1.42 0 0 1 .31 0 3.37 3.37 0 0 1 3 1.73l14.45 24.76a17.32 17.32 0 0 1 2.35 8.54l-1.72 15.14-18.85.07.31-5.21a4.1 4.1 0 0 0-.8-2.41Zm26.13 19.41a1 1 0 0 1-.7.29l-29.82.11a1 1 0 0 1-1-1v-.07l-.34-7.12a1 1 0 0 1 .28-.7 1 1 0 0 1 .7-.29h3.67l21.77-.08h4.39a1 1 0 0 1 1 1.06l.35 7.11a1 1 0 0 1-.3.69Z" />
        </SvgWrapper>
    );
}
export default SvgOrganicGrow;
