import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/accessories'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    },
]

const iconNav = [
    {
        icon: 'fa fa-search',
        path: '/'
    },
    {
        icon: 'fa fa-shopping-cart',
        path: '/cart'
    },
    {
        icon: 'fa fa-user',
        path: '/'
    },
]

const Header = () => {
    // ACTIVE NAV ITEM
    const { pathname } = useLocation();
    // HEADER WHEN SCROLL
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                headerRef.current.classList.add("shrink")
            } else {
                headerRef.current.classList.remove("shrink")
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])
    // HEADER MENU ITEM SLIDE
    const headerLeft = useRef(null)
    const menuToggle = () => headerLeft.current.classList.toggle("active")
    return (
        <header className='header' ref={headerRef}>
            <div className="container header__container">
                {/* LEFT */}
                <div className='header__hamburger' onClick={menuToggle}><i className="fa fa-bars"></i></div>
                <div className="header__left" ref={headerLeft}>
                    <div className='header__left-arrow' onClick={menuToggle}>
                        <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="header__left-list">
                        {mainNav.map((item, index) => {
                            let active = (item.path === pathname) ? "active" : ""
                            return (
                                <Link
                                    to={item.path}
                                    key={index}
                                    className={`header__left-list-item ${active}`}
                                    onClick={menuToggle}
                                >
                                    {item.display}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {/* LOGO*/}
                <div className="header__center">
                    <img src="./images/Logo-2.png" className='header__logo' alt="" />
                </div>
                {/* RIGHT */}
                <div className="header__right">
                    <div className="header__right-list">
                        {iconNav.map((icon, index) => (
                            <Link
                                to={icon.path}
                                key={index}
                                className='header__right-list-item'
                                style={{ cursor: (icon.icon === 'fa fa-shopping-cart') ? 'cursor' : 'not-allowed' }}
                            >
                                <i className={icon.icon}></i>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header