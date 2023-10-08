// import React from 'react'
import { Link } from 'react-router-dom';
import './components.css';

// images
import logoFooter from '../assets/logo_footer.png'
import snsGitHub from '../assets/icons/sns_gitHub.png'
import snsFacebook from '../assets/icons/sns_facebook.png'
import snsTwitter from '../assets/icons/sns_twitter.png'
import snsInstagram from '../assets/icons/sns_instagram.png'

function Footer() {
	return (
        <div className="footer-inn max-w-set h-55 mx-auto px-6 py-5">
            <div className="footer-main-bar flex items-center justify-between">
                <div className="footer-left">
                    <div className="company-policy">
                        <Link to="#">기업정보</Link>
                        <span className="bar">|</span>
                        <Link to="#">이용약관</Link>
                        <span className="bar">|</span>
                        <Link to="#">개인정보처리방침</Link>
                    </div>

                    <div className="logo-area mb-3.5">
                        <h1 className="logo">
                            <Link to="/" className="w-30 h-12"><img src={logoFooter} alt="logo_footer" /></Link>
                        </h1>
                        <p className="txt mt-10 ml-5">등록번호: 000-00-00000</p>
                    </div>

                    <div className="company-info">
                        <ul>
                            <li className="address mb-1">
                                <i className="fa-solid fa-location-dot mr-1"></i>
                                <p className="txt">경기도 성남시 ㅇㅇㅇ ㅇㅇㅇㅇ ㅇㅇㅇㅇ빌딩 A동 1301호</p>
                            </li>
                            <li className="tel mb-1">
                                <ul>
                                    <li className="phone">
                                        <i className="fa-solid fa-phone-volume mr-1"></i>
                                        <p className="txt">031-000-0000</p>
                                    </li>
                                    <li>
                                        <span className="bar">|</span>
                                    </li>
                                    <li className="fax">
                                        <i className="fa-solid fa-fax mr-1"></i>
                                        <p className="txt">031-000-0000</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="service mb-1">
                                <i className="fa-solid fa-headset mr-1"></i>
                                <p className="txt">오전 9:30 ~ 오후 18:30</p>
                            </li>
                            <li className="copyright">
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-copyright mr-1"></i>
                                        <p className="txt">Copyright 2023</p>
                                    </li>
                                    <li>
                                        <span className="bar">|</span>
                                    </li>
                                    <li>
                                        <p className="txt">Mong All rights reserved.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-right">
                    <ul className="sns flex items-center justify-center">
                        <li>
                            <Link to="#" title="sns_gitHub">
                                <span className="blind">sns_gitHub</span>
                                <img src={snsGitHub} alt="sns_gitHub" />
                            </Link>
                        </li>
                        <li className="ml-5">
                            <Link to="#" title="sns_facebook">
                                <span className="blind">sns_facebook</span>
                                <img src={snsFacebook} alt="sns_facebook" />
                            </Link>
                        </li>
                        <li className="ml-5">
                            <Link to="#" title="sns_twitter">
                                <span className="blind">sns_twitter</span>
                                <img src={snsTwitter} alt="sns_twitter" />
                            </Link>
                        </li>
                        <li className="ml-5">
                            <Link to="#" title="sns_instagram">
                                <span className="blind">sns_instagram</span>
                                <img src={snsInstagram} alt="sns_instagram" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
	)
}

export default Footer;
