import React from 'react';
import './styles.scss';
import badge from '../../assets/img/badge.png';
import suitcase from '../../assets/img/suitcase.png';

function Main() {
    const accountItems = [1, 2, 3].map((v, k) => {
        return <div className="account-item mb-4" key={k}>
            <div className="operation-item__badge">
                <img className="badge__out-img" src={badge} alt="badge"/>
                <img className="badge__inside-img" src={suitcase} alt="badge"/>
            </div>
            <span className="operation-item__title ml-2 mt-2">Мои счета</span>
            <hr/>
        </div>
    });

    const operationItems = [1, 2, 3].map((v, k) => {
        return <div className="operation-item mb-4" key={k}>
            <div className="operation-item__badge">
                <img className="badge__out-img" src={badge} alt="badge"/>
                <img className="badge__inside-img" src={suitcase} alt="badge"/>
            </div>
            <span className="operation-item__title ml-2 mt-2">Шаблоны операций</span>
            <hr/>
        </div>
    });

    return (
        <div className="col-md-12 col-lg-10">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {accountItems}
                </div>
                <div className="col-sm-12 col-md-6">
                    {operationItems}
                </div>
            </div>
        </div>
    )
        ;
}

export default Main;
