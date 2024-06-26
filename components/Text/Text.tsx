import React from "react";

import { getMarginStyles } from "../../utils/marginToCss";
import { MarginProps, TextProps } from "../../types/types";

import styles from "./Text.module.scss";

const Text: React.FC<MarginProps & TextProps> = ({
  variant = "p",
  size = "default",
  italic = false,
  underline = false,
  weight = "400",
  uppercase = false,
  children,
  className,
  dangerouslySetInnerHTML,
  mt,
  mb,
  my,
  ...props
}) => {
  const Component = variant === "p" ? "p" : variant === "list" ? "ul" : "div";
  const baseClassName = styles[`text-${variant}-${size}`];
  const classNames = `
        ${baseClassName}
        ${className}
        ${italic ? styles["text-italic"] : ""}
        ${underline ? styles["text-underline"] : ""}
        ${weight ? styles[`text-${weight}`] : ""}
        ${uppercase ? styles["text-uppercase"] : ""}
    `;
  const margins = getMarginStyles({ mt, mb, my });
  if (dangerouslySetInnerHTML) {
    return (
      <Component
        className={classNames}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        style={{ ...margins }}
        {...props}
      />
    );
  }

  return (
    <Component className={classNames} style={{ ...margins }} {...props}>
      {children}
    </Component>
  );
};

export default Text;
