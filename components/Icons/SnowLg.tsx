import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgSnowLg(props: IconProps) {
    return (
        <SvgWrapper
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M41.2 71.55a1.49 1.49 0 0 0 1.06.44 1.51 1.51 0 0 0 1.06-.44 1.53 1.53 0 0 0 .44-1.06 1.49 1.49 0 0 0-.44-1.06l-6.5-6.5-.07-19.44L54.16 54l2 8.23a1.5 1.5 0 0 0 3-.35 1.47 1.47 0 0 0 0-.36l-1.31-5.34 6.07 3.64a1.43 1.43 0 0 0 .77.22 1.5 1.5 0 0 0 .77-2.79L59 53.38 64.86 52A1.5 1.5 0 0 0 66 50.5a1.47 1.47 0 0 0 0-.36A1.5 1.5 0 0 0 64.14 49l-8.76 2.15-17.53-10.49 16.49-11.78 9.13 1.55a1.14 1.14 0 0 0 .26 0 1.5 1.5 0 0 0 1.48-1.24 2.28 2.28 0 0 0 0-.26A1.49 1.49 0 0 0 64 27.48l-6.2-1.06L64 22a1.5 1.5 0 1 0-1.74-2.44l-5.58 4 .87-5.12a1.14 1.14 0 0 0 0-.26 1.5 1.5 0 0 0-3-.25L53.2 26 36.72 37.78l-.07-19.06 6.63-6.62a1.53 1.53 0 0 0 .48-1.1 1.5 1.5 0 0 0-2.56-1l-4.57 4.56v-8A1.5 1.5 0 0 0 35.1 5a1.51 1.51 0 0 0-1.5 1.51v7L30.07 10A1.49 1.49 0 0 0 28 10a1.45 1.45 0 0 0-.49 1 1.48 1.48 0 0 0 .49 1.07l5.7 5.7.07 20.41-16.47-9.87-2.21-9a1.5 1.5 0 0 0-3 .36 1.47 1.47 0 0 0 0 .36l1.5 6.1-7-4.22a1.51 1.51 0 0 0-2.06.52 1.49 1.49 0 0 0 .51 2.05l6.36 3.82-4.99 1.24A1.5 1.5 0 0 0 5.26 31a1.53 1.53 0 0 0 1.5 1.5 1.47 1.47 0 0 0 .36 0l8-2 17.27 10.37-16.25 11.62-8.35-1.43a1.5 1.5 0 0 0-1.73 1.23 1.06 1.06 0 0 0 0 .25A1.49 1.49 0 0 0 7.29 54l5.41.92-6.21 4.46a1.5 1.5 0 0 0 1.75 2.44l6.49-4.64-1 5.92a2.11 2.11 0 0 0 0 .25A1.5 1.5 0 0 0 15 64.83h.25a1.51 1.51 0 0 0 1.48-1.25l1.52-8.89 15.5-11.1.07 20L28 69.43a1.45 1.45 0 0 0-.44 1.06A1.5 1.5 0 0 0 29 72a1.53 1.53 0 0 0 1.06-.44l3.77-3.77v7.24a1.5 1.5 0 0 0 1.5 1.49 1.5 1.5 0 0 0 1.5-1.5V67.2ZM122.9 67l-4.46-2.68 4-1a1.51 1.51 0 0 0 1.14-1.46 1.47 1.47 0 0 0 0-.36 1.5 1.5 0 0 0-1.82-1.09l-6.88 1.69-13.62-8.1L114 44.93l7.19 1.23h.26a1.5 1.5 0 0 0 1.47-1.25 1.06 1.06 0 0 0 0-.25 1.5 1.5 0 0 0-1.24-1.48l-4.26-.72 4.39-3.14a1.5 1.5 0 1 0-1.75-2.44l-3.86 2.77.57-3.39a1.06 1.06 0 0 0 0-.25 1.5 1.5 0 0 0-3-.25l-1.08 6.36-12.61 9-.06-14.53 5.25-5.25a1.49 1.49 0 0 0 .44-1.06 1.5 1.5 0 0 0-2.56-1.06L100 32.4v-5.7a1.5 1.5 0 0 0-1.5-1.5 1.51 1.51 0 0 0-1.5 1.51v4.89l-2.3-2.34a1.51 1.51 0 0 0-2.12 0 1.47 1.47 0 0 0-.44 1.06 1.45 1.45 0 0 0 .44 1.06l4.47 4.47.06 15.68L84.53 44l-1.74-7.08a1.5 1.5 0 0 0-3 .36 1.47 1.47 0 0 0 0 .36l1 4.18-5-3a1.5 1.5 0 1 0-1.54 2.57L78.82 44l-3.33.82a1.5 1.5 0 0 0-1.15 1.46 1.48 1.48 0 0 0 0 .35 1.46 1.46 0 0 0 1.81 1.1l6.27-1.53 13.33 8-12.48 8.99-6.56-1.12A1.5 1.5 0 0 0 75 63.3a2.11 2.11 0 0 0 0 .25A1.51 1.51 0 0 0 76.21 65l3.63.62-4.39 3.13a1.5 1.5 0 0 0 .87 2.72 1.48 1.48 0 0 0 .87-.28l4.61-3.29-.69 4a2.11 2.11 0 0 0 0 .25 1.51 1.51 0 0 0 1.25 1.48h.25a1.5 1.5 0 0 0 1.48-1.25l1.19-7L97.13 57l.06 15.26-4.61 4.62a1.45 1.45 0 0 0-.44 1.06 1.5 1.5 0 0 0 1.5 1.5A1.53 1.53 0 0 0 94.7 79l2.51-2.51v5.07a1.5 1.5 0 0 0 1.5 1.5 1.51 1.51 0 0 0 1.5-1.51v-5.53l3 3a1.49 1.49 0 0 0 1.06.44 1.5 1.5 0 0 0 1.5-1.5 1.49 1.49 0 0 0-.44-1.06l-5.11-5.11-.06-14.9 13.36 8 1.59 6.46a1.5 1.5 0 0 0 1.46 1.15A1.53 1.53 0 0 0 118 71a2.2 2.2 0 0 0 0-.36l-.88-3.57 4.23 2.54a1.52 1.52 0 0 0 2.06-.51 1.5 1.5 0 0 0-.51-2.1ZM80.38 109.65l-2.95-1.76 2.46-.61a1.49 1.49 0 0 0 1.11-1.45 1.47 1.47 0 0 0 0-.36 1.5 1.5 0 0 0-1.82-1.1l-5.39 1.32-10.32-6.2 9.7-6.93 5.62 1h.26a1.5 1.5 0 0 0 1.47-1.25 1.07 1.07 0 0 0 0-.25 1.51 1.51 0 0 0-1.25-1.48l-2.7-.46L79.52 88a1.5 1.5 0 1 0-1.75-2.44l-2.5 1.79.34-2a2.11 2.11 0 0 0 0-.25 1.5 1.5 0 0 0-3-.25l-.84 5-9.52 6.8V85.73l4.11-4.11a1.48 1.48 0 0 0 .43-1.06 1.5 1.5 0 0 0-2.56-1.06l-2 2v-3.85a1.5 1.5 0 0 0-1.5-1.49 1.51 1.51 0 0 0-1.5 1.51v3.18l-1.35-1.36a1.51 1.51 0 0 0-2.57 1.06 1.49 1.49 0 0 0 .44 1.06l3.49 3.49v11.89l-9.5-5.71-1.36-5.54a1.5 1.5 0 0 0-3 .36 1.63 1.63 0 0 0 .05.36l.65 2.64-3.39-2a1.5 1.5 0 1 0-1.54 2.57l2.94 1.77-2 .48a1.51 1.51 0 0 0-1.14 1.46 1.47 1.47 0 0 0 0 .36 1.51 1.51 0 0 0 1.46 1.14 1.47 1.47 0 0 0 .36 0l4.89-1.2L58 99.71l-9.54 6.82-5.12-.87a1.49 1.49 0 0 0-1.73 1.22 1.15 1.15 0 0 0 0 .26 1.49 1.49 0 0 0 1.25 1.47L45 109l-2.92 2.09a1.5 1.5 0 0 0-.35 2.09 1.52 1.52 0 0 0 1.22.63 1.46 1.46 0 0 0 .87-.28l3.09-2.21-.42 2.49a1.14 1.14 0 0 0 0 .26 1.49 1.49 0 0 0 1.25 1.47 1.06 1.06 0 0 0 .25 0 1.5 1.5 0 0 0 1.48-1.24l.93-5.48 8.92-6.37v11.5l-3.61 3.6a1.51 1.51 0 0 0-.44 1.06 1.51 1.51 0 0 0 2.57 1.06l1.49-1.5v3.34a1.5 1.5 0 0 0 1.5 1.5 1.51 1.51 0 0 0 1.5-1.51v-3.69l1.86 1.86a1.5 1.5 0 0 0 2.13-2.12l-4-4v-11.26l10.13 6.09 1.24 5a1.5 1.5 0 0 0 1.45 1.14 2.2 2.2 0 0 0 .36 0 1.51 1.51 0 0 0 1.15-1.46 1.49 1.49 0 0 0 0-.36l-.53-2.16 2.77 1.67a1.58 1.58 0 0 0 .78.21 1.5 1.5 0 0 0 .77-2.79Z" />
        </SvgWrapper>
    );
}
export default SvgSnowLg;