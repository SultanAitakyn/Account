import React from 'react';
import auto from "../../assets/img/auto.png";
import deposit from "../../assets/img/deposit.png";
import './styles.scss';

function SideBar() {
    return (
        <div className="col-2 d-none d-lg-block">
            <div className="row">
                <div className="col-12">
                    <div className="sider__item mb-4">
                        Курс обмена валют:
                    </div>
                    <div className="sider__item mb-4">
                        <img className="item__img" src={auto} alt="credit auto"/>
                        <span className="item-description">Кредит авто</span>
                    </div>
                    <div className="sider__item">
                        <img className="item__img" src={deposit} alt="deposit"/>
                        <span className="item-description">Депозиты</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
