import React from 'react';
import {BsTelephoneInboundFill} from 'react-icons/bs';
import Logo from "../img/newtone-logo.svg";
import Visa from '../img/cards/visa-logo.jpg';
import MasterCard from '../img/cards/mastercard.png';
import MirCard from '../img/cards/400px-Mir.png'

const Adress = () => {
  return (
    <>
        <div className="adress-wrap">
            <img src={require('../img/adress.jpg')} />
            <div className="adress-text">
              <h1>Адресс:</h1>
              <h2>метро Комсомольское</h2>
              <p>Новорязанская ул., 18, стр. 11</p>
              <h3>Контакты:</h3>
              <div className="tel-wrap">
                <BsTelephoneInboundFill id='mobila'/>
                <a href='tel:+7 800 555-10-61'>+7 800 555-10-61</a>
              </div>
              <h5>Пн - Пт 10 : 00 - 19 : 00</h5>  
            </div>
        </div>
        <div className="final-logo-wrap">
          <img src={Logo} id='logo'/>
          <div className="payment">
            <img className='card' src={Visa}/>
            <img className='card' src={MasterCard} />
            <img className='card' src={MirCard} />
          </div>
        </div>
    </>
  )
}

export default Adress