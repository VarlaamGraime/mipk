import React from 'react';
import FooterStyle from '../Styles/Footer.css'
import map from '../assets/map.png'
import phone from '../assets/phone.png'
import message from '../assets/message.png'

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div>
                <img className='mapImg' src={ map} />    
            </div>
            <div className='flexInfo'>
                <div className='connectBlock'>
                    <button className='callButton'>Заказать звонок</button>
                    <h4 className='phoneFooter'> <img className='iconFooter' src={phone}/>8 (800) 000-00-00</h4>
                    <h4 className='mailFooter'><img className='iconFooter' src={message}/>info@spmipk.com</h4>
                    <h4 className='infoTextFoter'>Карта сайта</h4>
                    <h4 className='infoTextFoter'>Пользовательское соглашение</h4>
                </div>
                <div>
                <h4 className='infoTextFooterName'>Автономная некоммерческая организация дополнительного профессионального образования «Санкт-Петербургский межотраслевой институт повышения квалификации»</h4>
                    <div className='flexTextUp flexText'>
                        <p className='infoTextFooterReq'><span style={{fontWeight: 'bold'}}>ОГРН</span>&nbsp;</p><p className='infoTextFooterReq'>1127800000591</p>
                    </div>

                    <div className='flexText'>
                        <p className='infoTextFooterReq'><span style={{fontWeight: 'bold'}}>ИНН</span>&nbsp;</p><p className='infoTextFooterReq'>7841290477</p>
                    </div>
                    
                    <div className='flexText'>
                        <p className='infoTextFooterReq'><span style={{ fontWeight: 'bold' }}>КПП</span>&nbsp;</p><p className='infoTextFooterReq'>784101001</p>
                    </div>
                    <button className='orderButton'>Заказать звонок</button>

                </div>
                <p className='offertaText'>Информация на сайте не является публичной офертой
                    © 2012 АНОДПО "Спбмипк"</p>
        </div>
            </div>
          
    );
};

export default Footer;