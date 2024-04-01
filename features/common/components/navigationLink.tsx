'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import type {UrlObject} from "url";

type NavigationItemProps = {
  classname?: string;
  href: string | UrlObject;
  text: string;
  disabled?: boolean;
}

const navigationItemPropsDefault: NavigationItemProps = {
  classname: "font-medium text-sm md:text-base [&:hover]:underline",
  href: "/",
  text: "default",
  disabled: false
};

function NavigationLink({text, classname, href, disabled}: NavigationItemProps) {
  const pathname = usePathname();

  console.log(`pathname = ${pathname} \\ href = ${href}`);
  const isCurrentPath = href === pathname;

  function getClassName() {
    return `${navigationItemPropsDefault.classname  } ${classname || ''} ${disabled ? 'text-gray-600 cursor-not-allowed' : 'text-gray-200'} ${isCurrentPath && !disabled ? 'font-extrabold' : ''}`;
  }

  return <Link className={getClassName()} href={href || navigationItemPropsDefault.href}>
    {text}
  </Link>;
}

export default NavigationLink;
