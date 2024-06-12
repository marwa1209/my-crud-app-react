/** @format */

import type { ReactNode, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgClass: string;
  children: ReactNode;
  width?:"w-full"|"w-fit"
}

const Button = ({ bgClass, children,width='w-full', ...rest }: IProps) => {
  return (
    <>
      <button className={`rounded-md ${bgClass} ${width} p-2`} {...rest}>
        {children}
      </button>
    </>
  );
};
export default Button;
