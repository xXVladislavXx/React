import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {
  render(){
    return(
      <div>
      <section className="contactUs">
        <div className="container">
          <div>
            <h3>СВЯЖИТЕСЬ С НАМИ</h3>
            <p>Готовы начать работу? Отправьте
      сообщение и свои контакты, мы
      ответим вам в течении 2-ух дней.
      Схема работы с каждым клиентом
      будет разработана индивидуально
      в зависимости от поставленных задач.</p>
          </div>
          <div>
            <form method="post" className="contactForm">
              <input type="text" placeholder="Ваше имя" required />
              <input type="text" placeholder="Ваша фамилия" />
              <input type="email" placeholder="E-mail" required />
              <textarea  cols="30" rows="10" placeholder="Введите ваше сообщение"></textarea>
              <span>Наши специалисты свяжутся с вами как можно скорее</span>
              <input type="submit" value="ОТПРАВИТЬ" />
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
        <table>
        <tbody>
          <tr>
            <td>
              <p>Сайт разработал:</p>
              <p>Сергатый Владислав</p>
            </td>
            <td>
              <p>Макет:</p>
              <a href="http://psd-html-css.ru/templates/besplatnyy-psd-shablon-veb-agentstva">http://psd-html-css.ru</a>
            </td>
            <td>
              <p>Ссылка на GitHub</p>
              <a href="https://github.com/xXVladislavXx/React">https://github.com/xXVladislavXx/React</a>
            </td>
          </tr>
          </tbody>
        </table>
        </div>
      </footer>
      </div>
    )
  }
}
export default Footer;
