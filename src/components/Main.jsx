import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Main = () => {
  return (
    <>
      <div class="grid-container">
        <div>
          <div className="img-wrap">
            <img src={require('../img/firstIMAGE.jpg')}/>
              <div className="icon-wrap">
                <a>Вышивка</a>
                <FontAwesomeIcon />
              </div>
          </div>
        </div>
        <div>
          <div className="img-wrap">
          <img src={require('../img/secondIMAGE.jpg')}/>
            <div className="icon-wrap">
              <a>Старые Коллекции</a>
              <FontAwesomeIcon />
            </div>
          </div>
        </div>
        <div>
          <div className="img-wrap">
          <img src={require('../img/thirdIMAGE.jpg')}/>
            <div className="icon-wrap">
              <a>Новые Коллекции</a>
              <FontAwesomeIcon />
            </div>
          </div>
        </div>  
        <div>
          <div className="img-wrap">
          <img src={require('../img/fourthIMAGE.jpg')}/>
            <div className="icon-wrap">
              <a>Спорт</a>
              <FontAwesomeIcon />
            </div>
          </div>
        </div>
      </div>
            
        
    </>
  )
}

export default Main