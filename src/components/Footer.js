import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import ship1 from "../images/ship_1.webp";
import ship2 from "../images/ship_2.webp";
import ship3 from "../images/ship_3.webp";
import ship4 from "../images/ship_4.webp";
import pay1 from "../images/pay_1.webp";
import pay2 from "../images/pay_3.webp";
import pay3 from "../images/pay_5.webp";
import pay4 from "../images/pay_7.webp";


const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Về HK Computer</h4>
                            <div>
                                <address className="text-white fs-6">
                                    VietNam: 835 Ninh Kieu, <br /> CanTho <br />{" "}
                                    Code: 94000
                                </address>
                                <a
                                    href="sdt: +84 0907093021"
                                    className="mt-3 d-block mb-1 text-white">
                                    +84 0907093021
                                </a>
                                <a
                                    href="mailto:nmhhuy1900024@student.ctuet.edu.vn"
                                    className="mt-2 d-block mb-0 text-white">
                                    nmhhuy1900024@student.ctuet.edu.vn
                                </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Chính sách</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link
                                    to="/privacy-policy"
                                    className="text-white py-2 mb-1">
                                    Chính sách bảo mật
                                </Link>
                                <Link
                                    to="/refund-policy"
                                    className="text-white py-2 mb-1">
                                    Chính sách hoàn tiền
                                </Link>
                                <Link
                                    to="/shipping-policy"
                                    className="text-white py-2 mb-1">
                                    Chính sách giao hàng
                                </Link>
                                <Link
                                    to="/term-conditions"
                                    className="text-white py-2 mb-1">
                                    Điều khoản và điều kiện
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Thông tin</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    Hệ thống cửa hàng
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Trung tâm bảo hành
                                </Link>
                            </div>
                        </div>
                        <div className="col-2 footer-link">
                            <div>
                                <h4 className="text-white mb-4">
                                    Đơn vị vận chuyển
                                </h4>
                            </div>
                            <div>
                                <ul className="d-flex p-0">
                                    <li>
                                        <img src={ship1} className="algin-items-center" alt="" />
                                    </li>
                                    <li>
                                        <img src={ship2} className="algin-items-center" alt="" />
                                    </li>
                                    <li>
                                        <img src={ship3} className="algin-items-center" alt="" />
                                    </li>
                                    <li>
                                        <img src={ship4} className="algin-items-center" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white mb-4">
                                    Cách thức thanh toán 
                                </h4>
                            </div>
                            <div>
                                <ul className="d-flex p-0">
                                    <li>
                                        <img src={pay1} className="algin-items-center" alt="" />
                                    </li>
                                    <li>
                                        <img src={pay2} className="algin-items-center" alt="" />
                                    </li>
                                    <li>
                                        <img src={pay3} className="algin-items-center" alt="" />
                                    </li>
                                    <li>
                                        <img src={pay4} className="algin-items-center" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-3 text-white">
                                Kết nối với chúng tôi
                            </p>
                            <div className="social icons d-flex algin-items-center gap-30 justify-content-center">
                                <a
                                    className="text-white"
                                    href="https://www.facebook.com/">
                                    <BsLinkedin />
                                </a>
                                <a
                                    className="text-white"
                                    href="https://www.facebook.com/">
                                    <BsInstagram />
                                </a>
                                <a
                                    className="text-white"
                                    href="https://www.facebook.com/">
                                    <BsGithub />
                                </a>
                                <a
                                    className="text-white"
                                    href="https://www.facebook.com/">
                                    <BsYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
