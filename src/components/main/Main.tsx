import React from 'react';
import './styles.scss';
import badge from '../../assets/img/badge.png';
import suitcase from '../../assets/img/suitcase.png';

function Main() {
    const accountItems = (text: string) => [1, 2, 3, 4].map((v, k) => {
        return <div className="operation-item mb-4" key={k}>
            <div className="operation-item__badge">
                <img className="badge-out-img" src={badge} alt="Operation badge"/>
                <img className="badge-inside-img" src={suitcase} alt="Operation badge suitcase"/>
            </div>
            <span className="operation-item__title ml-2 mt-2">{text}</span>
            <hr/>
        </div>
    });

    return (
        <div className="col-md-12 col-lg-10">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {accountItems("Мои счета")}
                </div>
                <div className="col-sm-12 col-md-6">
                    {accountItems("Шаблоны операций")}
                </div>
            </div>
        </div>
    )
        ;
}

export default Main;
