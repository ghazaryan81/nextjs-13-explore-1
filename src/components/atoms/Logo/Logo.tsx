import { FC } from "react";
import { Svg, Use, CoreUIProps } from "@/components/electrons";
import Link from "next/link";
import cn from "classnames";

import logoStyle from "@/styles/components/atoms/logo/Logo.module.scss";
// prettier-ignore
import {
 Img
 } from "@/components/electrons/";

export interface LogoProps extends CoreUIProps {
 href: string;
 src: string;
 alt?: string;
 width?: string;
 props?: JSX.Element;
}

export const Logo: FC<LogoProps> = ({ href, src, alt = "", width, ...props }) => {
 return (
  <Link href={href} className={cn(logoStyle["logo"])}>
   <Img src={src} alt={alt} width={width} className={cn(logoStyle["logo__img"])} />
  </Link>
 );
};
