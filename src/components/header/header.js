import React, {Component} from 'react';
import './header.css';
// import './spincrement.js';

class Header extends Component{
  render() {
    return(
      <div>
      <header>
        <div className="container mobileMenu">
          <div className="overlay">
          <nav className="overlayMenu">
              <ul role="menu">
                  <li><a href="#" role="menuitem">Главная</a></li>
                  <li><a href="#" role="menuitem">О нас</a></li>
                  <li><a href="#" role="menuitem">Услуги</a></li>
                  <li><a href="#" role="menuitem">Наши работы</a></li>
                  <li><a href="#" role="menuitem">Контакты</a></li>
              </ul>
          </nav>
      </div>

      <div className="navBurger" role="navigation" id="navToggle"></div>
          <h1>НАШИ САЙТЫ ЗАСТАВЛЯЮТ РАБОТАТЬ ВАШ БИЗНЕС.</h1>
          <p>Большинство веб-студий считают окончанием работы загрузку
      сайта в интернет. Но почти никто не умеет делать проекты,
      которые работают и приносят прибыль.</p>
          <div className="headFlex">
            <div className="headItem">
              <span className="headIcon"></span>
              <p><span className="benefits__number">518</span>оказанных услуг</p>
            </div>
            <div className="headItem">
              <span className="headIcon"></span>
              <p><span className="benefits__number">345</span>проектов</p>
            </div>
            <div className="headItem">
             <span className="headIcon"></span>
              <p><span className="benefits__number">218</span>постоянных клиентов</p>
            </div>
          </div>
        </div>
      </header>
      <nav className="navigation">
        <div className="container">
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Услуги</a>
          <a href="#">Наши работы</a>
          <a href="#">Контакты</a>
        </div>
      </nav>
      </div>
    )
  }
}

export default Header;
