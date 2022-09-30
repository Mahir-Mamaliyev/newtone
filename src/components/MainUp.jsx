import React from 'react'
import womanImg from '../img/woman.jpg'
import manImg from '../img/man.jpg'

const MainUp = () => {
  return (
    <>
    
        <div className="main-up-wrap">
            <a><img src={womanImg} alt="woman"  className='womanImg'/></a>
            <a><img src={manImg} alt="man"  className='manImg'/></a>
        </div>
        
    </>
  )
}

export default MainUp