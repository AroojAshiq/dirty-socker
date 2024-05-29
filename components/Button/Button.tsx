import React from "react";
import { IProps } from "./index";
import Link from "next/link";


export default function Button({
  // disabled,
  // onClick,
  url,
  children,
  variant,
  size,
}: IProps) {
  //change string (url) to href (nextjs) 
  const parsedUrl = new URL(url);
  return (
    <Link href={parsedUrl} passHref={true}>
    <button
      //   disabled={disabled}
      //   onClick={onClick}
      className={`cursor-pointer ${size} ${variant}`}
    >
      {children}
    </button>
    </Link>
  );
}
