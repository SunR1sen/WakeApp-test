import React from 'react';
import s from './Features.module.scss';
import FeatureItem from "./FeatureItem";
import dollarIcon from '../../../assets/images/icons/features/dollarInCircle.svg';
import headPhonesIcon from '../../../assets/images/icons/features/supportHeadphones.svg';
import gamesIcon from '../../../assets/images/icons/features/games.svg';
import topProvidersIcon from '../../../assets/images/icons/features/topProviders.svg';

const data = [
    {
        id: 1,
        icon: dollarIcon,
        amount: '6.483.67',
        subtitle: 'Fast payouts'
    },
    {
        id: 2,
        icon: headPhonesIcon,
        number: '24/7',
        subtitle: 'Support'
    },
    {
        id: 3,
        icon: gamesIcon,
        number: '250K',
        subtitle: 'Games'
    },
    {
        id: 4,
        icon: topProvidersIcon,
        number: '1250K',
        subtitle: 'Top providers'
    }
]

const Features = () => {
    return (
        <ul className={s["features-wrapper"]}>
            {data.map(item => <li className={s.listitem} key={item.id}><FeatureItem icon={item.icon}
                                                                                    amount={item.amount}
                                                                                    number={item.number}
                                                                                    subtitle={item.subtitle}
            /></li>)
            }
        </ul>
    )
}

export default Features;