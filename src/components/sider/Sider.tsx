import React from 'react';
import auto from "../../assets/img/auto.png";
import deposit from "../../assets/img/deposit.png";
import './styles.scss';

function SideBar() {
    return (
        <div className="col-2 d-none d-lg-block">
            <div className="row">
                <div className="col-12">
                    <div className="side-item mb-4 p-2">
                        Курс обмена валют:
                    </div>
                    <div className="side-item mb-4">
                        <img className="side-item__img" src={auto} alt="credit auto"/>
                        <span className="side-item__text">Кредит авто</span>
                    </div>
                    <div className="side-item">
                        <img className="side-item__img" src={deposit} alt="deposit"/>
                        <span className="side-item__text">Депозиты</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
