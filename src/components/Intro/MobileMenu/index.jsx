import React from 'react';
import s from './MobileMenu.module.scss';
import MenuItem from "./MenuItem";
import menuIcon from '../../../assets/images/icons/mobileMenu/burger.svg';
import promotionIcon from '../../../assets/images/icons/mobileMenu/gift.svg';
import depositIcon from '../../../assets/images/icons/mobileMenu/deposit.svg';
import supportIcon from '../../../assets/images/icons/mobileMenu/support.svg';


const MobileMenu = () => {
    if (window.innerWidth < 500) {
        return (
            <div className={s.wrapper}>
                <MenuItem icon={menuIcon} title='Menu'/>
                <MenuItem icon={promotionIcon} title='Promotions'/>
                <MenuItem icon={depositIcon} title='Deposit'/>
                <MenuItem icon={supportIcon} title='Support'/>
            </div>
        )
    } else {
        return null;
    }
}

export default MobileMenu;