import React from 'react';
import s from './SiteHeader.module.scss';
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserButtons from "./UserButtons";

const SiteHeader = () => {
    return (
        <div className={s.siteHeader}>
            <Logo />
            <NavMenu />
            <UserButtons />
        </div>
    )
}

export default SiteHeader;