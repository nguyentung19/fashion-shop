import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about'
    },
    {
        display: 'Liên hệ',
        path: '/about'
    },
    {
        display: 'Tuyển Dụng',
        path: '/about'
    },
    {
        display: 'Tin tức',
        path: '/about'
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about'
    },
]

const footerPolicyLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about'
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about'
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about'
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div className="footer__item">
                        <h4 className='footer__title'>Tổng đài hỗ trợ</h4>
                        <div className="footer__content">
                            <p>Liên hệ đặt hàng :  <strong>0123456789</strong></p>
                            <p>Thắc mắc đơn hàng :  <strong>0123456789</strong></p>
                            <p>Góp ý, khiếu nại :  <strong>0123456789</strong></p>
                        </div>
                    </div>


                    <div className="footer__item">
                        <h4 className='footer__title'>Về YoLo</h4>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.path} className="footer__link">
                                            {item.display}
                                        </Link>
                                    </p>
                                )
                            })}
                        </div>
                    </div>

                    <div className="footer__item">
                        <h4 className='footer__title'>Về YoLo</h4>
                        <div className="footer__content">
                            {footerPolicyLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.path} className="footer__link">{item.display}</Link>
                                    </p>)
                            })}
                        </div>
                    </div>

                    <div className="footer__item">
                        <Link to='/'>
                            <img src="./images/Logo-2.png" className='footer__logo' alt="" />
                        </Link>
                        <div className="footer__content">
                            <p>
                                Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                            </p>
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer