import React from 'react';
import s from './Providers.module.scss';
import ProviderItem from './ProviderItem';
import netentIcon from '../../assets/images/icons/providers/netent.svg'
import playNGoIcon from '../../assets/images/icons/providers/playNgo.svg'
import microgamingIcon from '../../assets/images/icons/providers/microgaming.svg'

const Providers = () => {
    if (window.innerWidth > 800) {
        return (
            <div className={s.wrapper}>
                <ProviderItem title='All providers'/>
                <ProviderItem title='netent' icon={netentIcon}/>
                <ProviderItem title="play'n Go" icon={playNGoIcon}/>
                <ProviderItem title='microgaming' icon={microgamingIcon}/>
                <ProviderItem title='.&nbsp;.&nbsp;.'/>
            </div>
        )
    } else {
        return null;
    }

}

export default Providers;