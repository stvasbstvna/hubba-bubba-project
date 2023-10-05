import React from 'react'
import style from './HomePage.module.css'
import HubbaRed from './images/hubba-red.png'
import HubbaBox from './images/hubba-box.png'
import HubbaPink from './images/hubba-pink.png'


const HomePage = () => {  
  return (
    <>
    <div className={style.homePage}>
      <div className={style.left}>
        <h1 className={style.left__text}>BE YOUR BEST</h1>
        <img className={style.left__image} src='https://logos-world.net/wp-content/uploads/2023/03/Hubba-Bubba-Logo.png' alt='hubba bubba' />
        <a href='/products' className={style.mainButton}>
          Explore<span className={style.buttonBorder}></span>
        </a>
      </div>
      <div className={style.right}>
        <div className={style.cardContainer}>
          <div className={style.cardSlide}>
            <div className={style.cardSlideFront}>
              <img
                src={HubbaPink} alt='hubba' />
            </div>
            <div className={style.cardSlideBack}>
              <h2>Hubba Bubba Bubble Gum Tape</h2>
              <h3>Ingredients:</h3>
              <p>SUGAR, GUM BASE, CORN SYRUP, GLYCEROL; LESS THAN 2% OF: CORN STARCH, SOY LECITHIN, NATURAL AND ARTIFICIAL FLAVORS, ACESULFAME K, ASPARTAME, BHT (TO MAINTAIN FRESHNESS), COLORS (RED 40, RED 40 LAKE).</p>
              <h3>About this item</h3>
              <p>Flavor: Original</p>
              <p>Item Weight: 56 Grams</p>
              <p>Price: $2.5</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className={style.secondPage}>
      <h2 className={style.left__text}>CLICK TO POP THE BUBBLES!</h2>
        <div className={`${style.bubble} ${style.b1}`}></div>
        <div className={`${style.bubble} ${style.b2}`}></div>
        <div className={`${style.bubble} ${style.b3}`}></div>
        <div className={`${style.bubble} ${style.b4}`}></div>
        <div className={`${style.bubble} ${style.b5}`}></div>
        <div className={`${style.bubble} ${style.b6}`}></div>
        <div className={`${style.bubble} ${style.b7}`}></div>

        <div className={style.secondPage__container}>
          <img className={style.image} src={HubbaRed} alt='hubba'/>
          <img className={style.image} src={HubbaBox} alt='hubba'/>
          <img className={style.image} src={HubbaPink} alt='hubba'/>
        </div>   
    </div>
    </>
  )
}

export default HomePage