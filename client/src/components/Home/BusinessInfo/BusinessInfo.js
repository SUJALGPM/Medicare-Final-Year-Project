import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import InformationCard from '../InformationCard/InformationCard';
import React from 'react';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Mulund',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+91 1234567893',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75 infos-card">
                {
                    infosData.map(info => <InformationCard info={info} key={info.title}></InformationCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;