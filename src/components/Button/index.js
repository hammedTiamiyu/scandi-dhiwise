import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray900:
    "bg-gray_900 border border-gray_900 border-solid text-white_A700",
  OutlineGray9001_2: "border border-gray_900 border-solid",
  FillGreen400: "bg-green_400 text-white_A700",
  icbOutlineGray900: "border border-gray_900 border-solid",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  lg: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  smIcn: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  mdIcn: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "OutlineGray900",
    "OutlineGray9001_2",
    "FillGreen400",
    "icbOutlineGray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  variant: "OutlineGray9001_2",
  size: "md",
};

export { Button };
