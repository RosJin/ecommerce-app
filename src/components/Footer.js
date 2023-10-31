import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from '../images/newsletter.png';

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6">
                                    VietNam: 835 Ninh Kieu, <br /> CanTho <br /> Code: 94000
                                </address>
                                <a href="sdt: +84 0907093021" className="mt-3 d-block mb-1 text-white">
                                    +84 0907093021
                                </a>
                                <a
                                    href="mailto:nmhhuy1900024@student.ctuet.edu.vn"
                                    className="mt-2 d-block mb-0 text-white"
                                >
                                    nmhhuy1900024@student.ctuet.edu.vn
                                </a>
                                <div className="social icons d-flex algin-items-center gap-30 mt-4">
                                    <a className="text-white" href="https://www.facebook.com/">
                                        <BsLinkedin />
                                    </a>
                                    <a className="text-white" href="https://www.facebook.com/">
                                        <BsInstagram />
                                    </a>
                                    <a className="text-white" href="https://www.facebook.com/">
                                        <BsGithub />
                                    </a>
                                    <a className="text-white" href="https://www.facebook.com/">
                                        <BsYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Chính sách</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link to='/privacy-policy' className="text-white py-2 mb-1">Chính sách bảo mật</Link>
                                <Link to='/refund-policy' className="text-white py-2 mb-1">Chính sách hoàn tiền</Link>
                                <Link to='/shipping-policy' className="text-white py-2 mb-1">Chính sách giao hàng</Link>
                                <Link to='/term-conditions' className="text-white py-2 mb-1">Điều khoản và điều kiện</Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">COntact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Tablets</Link>
                                <Link className="text-white py-2 mb-1">Watchs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
