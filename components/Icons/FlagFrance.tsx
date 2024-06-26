import * as React from 'react';
import { SVGProps } from 'react';
import SvgWrapper from '../_helpers/IconWrapper';
interface IconProps extends SVGProps<SVGSVGElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'primary' | 'white';
    className?: string;
}
function SvgFlagFrance(props: IconProps) {
    return (
        <SvgWrapper
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path
                style={{
                    fill: '#41479b',
                }}
                d="M38.345 88.273C17.167 88.273 0 105.44 0 126.618v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V88.273H38.345z"
            />
            <path
                style={{
                    fill: '#f5f5f5',
                }}
                d="M170.67 88.277h170.67v335.45H170.67z"
            />
            <path
                style={{
                    fill: '#ff4b55',
                }}
                d="M473.655 88.273H341.333v335.448h132.322c21.177 0 38.345-17.167 38.345-38.345V126.618c0-21.178-17.167-38.345-38.345-38.345z"
            />
        </SvgWrapper>
    );
}
export default SvgFlagFrance;
