'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from './StyledNavigationLink.module.css';


const StyledNavigationLink = ({href, title}) => {
    const isActive = (targetHref: string) => (usePathname() === targetHref);

    return (<Link href={href} className={isActive(href) ? styles.active : ''}>{title}</Link>);
}

export default StyledNavigationLink;