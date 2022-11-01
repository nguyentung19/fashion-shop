import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import heroSliderData from '../assets/fake-data/hero-slider'
import { Link } from 'react-router-dom'
import Button from './Button'

const HeroSlider = props => {
    const [activeSlide, setActiveSlide] = useState(0)

    const clickPrevSlide = () => {
        const index = (activeSlide - 1 < 0) ? (heroSliderData.length - 1) : activeSlide - 1
        setActiveSlide(index)
    }

    const clickNextSlide = useCallback(() => {
        const index = (activeSlide + 1 === heroSliderData.length) ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide])


    const timeOut = (props.timeOut) ? props.timeOut : 3000

    useEffect(() => {
        if (props.auto) {
            const autoSlider = setInterval(() => {
                clickNextSlide()
            }, timeOut)
            return () => {
                clearInterval(autoSlider)
            }
        }

    }, [timeOut, clickNextSlide, props.auto])


    return (
        <div className='hero-slider'>
            {heroSliderData.map((item, index) => {
                const active = (activeSlide === index) ? "active" : ''
                return (
                    <div className={`hero-slider__item ${active}`} key={index}>
                        <div className="hero-slider__content">
                            <h2 className={`hero-slider__content-title color-${item.color}`}>{item.title}</h2>
                            <p className='hero-slider__content-desc'>{item.description}</p>
                            <Link to={item.path}>
                                <Button
                                    backgroundColor={item.color}
                                    icon="fa fa-shopping-cart"
                                    animation={true}
                                >
                                    Xem chi tiết
                                </Button>
                            </Link>
                        </div>
                        <div className="hero-slider__image">
                            <p className={`hero-slider__background bg-${item.color}`}></p>
                            <img src={item.img} className="hero-slider__model" alt="" />
                        </div>
                    </div>
                )
            })}
            <div className='hero-slider__pagination'>
                <div className='hero-slider__btn' onClick={clickPrevSlide}>
                    <i className="fa fa-arrow-left"></i>
                </div>
                <span className='hero-slider__pagination-number'>
                    {activeSlide + 1} / {heroSliderData.length}
                </span>
                <div className='hero-slider__btn' onClick={clickNextSlide}>
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}
HeroSlider.propTypes = {
    auto: PropTypes.bool
}

export default HeroSlider