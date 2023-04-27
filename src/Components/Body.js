import React from 'react';
import BodyStyle from '../Styles/Body.css'
import aboutUs from '../assets/aboutUs.png'

const Body = () => {
    return (
        <div className='bodyContent'>
            <h4 className='navBody'>Главная </h4>
            <div className='titleBox'>
                <h2 className='titleBody'>Институт профессиональной переподготовкии повышения квалификации</h2>
            </div>
            
            <p className='titleClients'>За 2022 год наши клиенты получили более</p>
            <div className='blockDf'>
                <div className='marginBlock'>
                    <p className='numberCounter'>7258</p>
                    <p className='dfNumber'>Удостоверений повышения квалификации</p>
                </div>
                <div className='marginBlock'>
                    <p className='numberCounter'>3887</p>
                    <p className='dfNumber'> Дипломов профессиональной переподготовки</p>
                </div>
                <div className='marginBlock'>
                    <p className='numberCounter'>1893</p>
                    <p className='dfNumber'>Удостоверений по охране труда и пож-техминимума</p>
                </div>
                <div className='marginBlock'>
                    <p className='numberCounter'>6458</p>
                    <p className='dfNumber'>других удостоверений</p>
                </div>
            </div>
            <div className='aboutTitleBlock'>
                <h3 className='aboutTitle'>О нас</h3>
            </div>
            <div className="image-container">
                <img className='aboutUsPict' src={aboutUs} />
            </div>
            <p className='textAbout textAboutMargin'>АНО ДПО СПБ МИПК начал свой путь в г. Санкт-Петербурге еще в 2013 году. С 2013 года нашими клиентами стали около 29 000 физических и более 56 000 юридических лиц на территории России, а партнерский реестр насчитывает свыше 5000 компаний. На сегодняшний день наши филиалы представлены в следующих городах: Иркутск, Краснодар, Симферополь, Севастополь, Владивосток, Москва.</p>

             <p className='textAbout'>  Основными направлениями программ нашего института являются: строительство, медицина, педагогика, кадровая и бухгалтерская сферы, индустрия красоты, психология, сельское хозяйство, компьютерные технологии и многое другое.</p> 

             <p className='textAbout'>  В институте работает большой штат методистов, преподавателей, делопроизводителей и менеджеров по работе с клиентами, которые справятся с любым объемом работы.Работая над качеством услуг, нами были определены основные приоритеты при работе с клиентами: высокая скорость выполнения заказов, качественное предоставление услуг и гибкая ценовая политика.</p>
            
        </div>
    );
};

export default Body;