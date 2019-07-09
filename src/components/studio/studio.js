import React, {Component} from 'react';
import './studio.css';

class Studio extends Component{
  render () {
    return(
      <section className="studio">
        <div className="container">
          <div className="aboutStudio">
            <span>Студия</span>
            <p>Основная специализация — проектирование сайов и landing page.
      Наша команда, состоящая из дизайнеров, маркетологов и программистов,
      поддерживает каждый проект на протяжении всей его жизни. Студия
      занимается разработкой индивидуального дизайна, оптимизацией
      скорости работы продукта, предоставляет услуги по продвижению сайтов.</p>
          </div>
          <div className="servicesStudio">
            <div className="ourServices">
              <img src="/img/start.png" alt="Старт"/>
              <h4>Старт</h4>
              <p>Вы хотите получать больше клиентов
      и прибыли из интернета?С нуля разработаем
      сайт любой сложности,учитывая индивидуальные
      особенности вашего бизнеса. Стоимость создания
      сайта в каждом конкретном случае индивидуальна
      и рассчитывается исходя из пожеланий и
      требований клиента</p>
      <div className="control">
      <span className="price">от 500 руб</span>
      <a href="#" className="moreServices"></a>
      </div>
            </div>
            <div className="ourServices">
              <img src="/img/seo.png" alt="Продвижение"/>
              <h4>Продвижение</h4>
              <p>
      Одним из важнейших этапов продвижения
      сайта является поисковая оптимизация (SEO),
      которая представляет собой комплекс мер по
      повышению позиции сайта в поисковых
      системах, и, таким образом, позволяет
      увеличить его целевую посещаемость.</p>
      <div className="control">
        <span className="price">от 2000 руб</span>
        <a href="#" className="moreServices"></a>
      </div>

            </div>
            <div className="ourServices">
              <img src="/img/support.png" alt="Поддержка"/>
              <h4>Поддержка</h4>
              <p>У Вас уже работающий бизнес и Вы
      регулярно нуждаетесь в услугах веб-студии
      но брать сотрудника в штат и оборудовать
      дополнительное рабочее место не выгодно?
      Мы готовы взять эти проблемы на себя и
      предоставлять нужные услуги  удаленно.</p>
      <div className="control">
      <span className="price">от 1000 руб</span>
      <a href="#" className="moreServices"></a>
      </div>
            </div>
          </div>


        </div>
      </section>
    )
  }
}
export default Studio;
