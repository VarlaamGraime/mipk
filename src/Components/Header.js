import React from 'react';
import headerStyle from '../Styles/Header.css'
import logoIm from '../assets/logoImage.png'
import vkIcon from '../assets/iconVk.png'
import wAIcon from '../assets/iconWA.png'
import tgIcon from '../assets/iconTg.png'
import glass from '../assets/glass.png'

const Header = () => {
    return (
        <div className='basicContainerHeader'>
            <div className='topPartFlex'>
                <div>
                    <button className='cityButton'>Санкт-Петербург</button>
                    <img className='logoImage' src={logoIm}  />
                </div>

                <div className='iconBlock'>
                    <img className='iconHeader' src={vkIcon} />
                    <img className='iconHeader' src={wAIcon} />
                    <img className='iconHeader' src={tgIcon} />
                </div>

                <div className='blockInput'>
                    <input className='inputHeader' placeholder='НАЙТИ'></input>
                    <button className='buttonFind'>
                        ПОИСК 
                        <img className='glassButton'  src={glass} alt="icon"/>
                    </button>
                    
                </div>

                <div className='infoHeader'>
                    <h4 className='timeWorkText'>ПН-ВС 09:00 - 18:00 (МСК)</h4>
                    <h3 className='phoneText'> 8 (800) 000-00-00</h3>
                    <h4 className='mailText'>info@spmipk.com</h4>
                </div>
            </div>
            <div className='line'></div>

            <div className='menuFlex'>
                <h3 className='textMenuStart '>НАПРАВЛЕНИЯ</h3>
                <h3 className='textMenu textMenuStart '>ОБУЧЕНИЕ</h3>
                <h3 className='textMenu textMenuStart'>ПАРТНЕРАМ</h3>
                <h3 className='textMenu textMenuStart'>ОБ ИНСТИТУТЕ</h3>
                <h3 className='textMenu textMenuStart'>КОНТАКТЫ</h3>
            </div>
        </div>
    );
};

export default Header;