import * as React from "react";
import NextLink, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ className, ...props }: Props) {
  return <NextLink className={twMerge("", className)} {...props} />;
}
