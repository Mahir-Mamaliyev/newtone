import React from 'react'

const Brands = () => {
  return (
    <>
        <div className="brands-wrap">
            <h2>Наши бренды</h2>
            <div className="brands-logos">
                <img src={require("../img/brands/first-brand.jpg")}/>
                <img src={require("../img/brands/second-brand.jpg")}/>
                <img src={require("../img/brands/third-brand.jpg")}/>
                <img src={require("../img/brands/fourth-brand.jpg")}/>
                <img src={require("../img/brands/fifth-brand.jpg")}/>
            </div>
        </div>
    </>
  )
}

export default Brands