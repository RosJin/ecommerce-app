import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/products/productSlice";
import { getUserCart } from "../features/user/userSlice";
import { BiLogOutCircle } from "react-icons/bi";

const Header = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state?.auth?.cartProducts);
    const authState = useSelector((state) => state?.auth);
    const productState = useSelector((state) => state?.product?.product ?? []);
    const [productOpt, setProductOpt] = useState([]);
    const [total, setTotal] = useState(null);
    const [paginate, setPaginate] = useState(true);
    const navigate = useNavigate();

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const getTokenFromLocalStorage = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer"))
        : null;

    const config2 = {
        headers: {
            Authorization: `Bearer ${
                getTokenFromLocalStorage !== null
                    ? getTokenFromLocalStorage.token
                    : ""
            }`,
            Accept: "application/json",
        },
    };

    useEffect(() => {
        dispatch(getUserCart(config2));
    }, []);

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum =
                sum +
                Number(cartState[index].quantity) *
                    Number(cartState[index].price);
            setTotal(sum);
        }
    }, [cartState]);

    useEffect(() => {
        let data = [];
        for (let index = 0; index < productState.length; index++) {
            const element = productState[index];
            data.push({ id: index, prod: element?._id, name: element?.title });
        }
        setProductOpt(data);
    }, [productState]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (
        <>
            <header className="header-top-strip">
                <img src="./images/unnamed.webp" className="w-100"alt="" />
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">Huy</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <Typeahead
                                    id="pagination-example"
                                    onPaginate={() =>
                                        console.log("Results paginated")
                                    }
                                    onChange={(selected) => {
                                        navigate(
                                            `/product/${selected[0]?.prod}`,
                                        );
                                        dispatch(
                                            getAProduct(selected[0]?.prod),
                                        );
                                    }}
                                    options={productOpt}
                                    paginate={paginate}
                                    labelKey={"name"}
                                    minLength={2}
                                    placeholder="Bạn cần tìm gì?"
                                />
                                <span
                                    className="input-group-text p-3"
                                    id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link
                                        to="/wishlist"
                                        className="d-flex align-items-center gap-10 text-white">
                                        <img
                                            src="images/wishlist.svg"
                                            alt="whishlist"
                                        />
                                        <p className="mb-0">
                                            Danh sách <br /> yêu thích
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={
                                            authState?.user === null
                                                ? "/login"
                                                : "/my-profile"
                                        }
                                        className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/user.svg" alt="user" />
                                        {authState?.user === null ? (
                                            <p className="mb-0">
                                                Đăng nhập <br /> Đăng ký
                                            </p>
                                        ) : (
                                            <p className="mb-0">
                                                Xin chào{" "} <br />
                                                {authState?.user?.firstname}
                                            </p>
                                        )}
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className="d-flex align-items-center gap-10 text-white"
                                        onClick={handleLogout}>
                                        <BiLogOutCircle className="fs-2"/>
                                        Đăng xuất
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/cart"
                                        className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/cart.svg" alt="cart" />
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">
                                                {cartState?.length
                                                    ? cartState?.length
                                                    : 0}
                                            </span>
                                            <p className="mb-0">
                                                Giỏ hàng
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <img src="images/menu.svg" alt="" />
                                            <span className="me-5 d-inline-block">
                                                Danh mục
                                            </span>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to="">
                                                    Laptop
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to="">
                                                    Laptop Gaming
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item text-white"
                                                    to="">
                                                    Bàn phím
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Trang chủ</NavLink>
                                        <NavLink to="/product">
                                            Danh sách sản phẩm
                                        </NavLink>
                                        <NavLink to="/my-orders">
                                            Tra cứu đơn hàng
                                        </NavLink>
                                        <NavLink to="/blogs">Tin công nghệ</NavLink>
                                        <NavLink to="/contact">Liên hệ</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
