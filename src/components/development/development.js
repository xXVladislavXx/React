import React, {Component} from 'react';
import './development.css';

class Development extends Component{
  render () {
    return(
      <section className="development">
        <div className="container2">
          <div className="settings">
            <span>Разработка</span>
          </div>
          <div className="priceBlock">
            <div className="lading">
              <h3>LANDING  PAGE</h3>
              <span></span>
              <div className="controlPrice">
              <span>от 15000 руб</span>
              <a href="#"></a>
              </div>
            </div>
            <div className="site">
              <h3>ВЕБ-САЙТ</h3>
              <span></span>
              <div className="controlPrice">
                <span>от 10000 руб</span>
                  <a href="#"></a>
              </div>

            </div>
            <div className="shop">
              <h3>ИНТЕРНЕТ МАГАЗИН</h3>
              <span></span>
                <div className="controlPrice">
              <span>от 20000 руб</span>
                <a href="#"></a>
            </div>
            </div>
          </div>
        </div>
        <div className="firstSearch">
          <div>
            <h3>Первые в поиске</h3>
            <p>Мы предлагаем услуги по SEO продвижению
      сайтов в ведущих поисковых системах Yandex
      и Google. Поисковое продвижение сайта в
      нашей веб-студии это:</p>
      <ul>
        <li>гарантированное
        присутствие на лидирующих позициях;</li>
        <li>привлечение необходимой аудитории.</li>
      </ul>
          </div>
          <div>
            <img src="/img/google.png" alt="google"/>
            <img src="/img/yandex.png" alt="yandex"/>
          </div>
        </div>
      </section>
    )
  }
}
export default Development;
