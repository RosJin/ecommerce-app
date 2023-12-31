import React, { useEffect, Component,  useRef  } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import { getAllProducts } from "../features/products/productSlice";
import { addToWishlist } from "../features/products/productSlice";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-01.jpg";
import ReactStars from "react-rating-stars-component";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const blogState = useSelector((state) => state.blog.blog);
    const productState = useSelector((state) => state.product.product);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getBlogs = () => {
        dispatch(getAllBlogs());
    };

    useEffect(() => {
        getBlogs();
        getallProducts();
    }, []);

    const getallProducts = () => {
        dispatch(getAllProducts());
    };
    const addToWish = (id) => {
        dispatch(addToWishlist(id));
    };

    const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 2000); // Tự động cuộn sau mỗi 2 giây

    return () => {
      clearInterval(interval);
    };
  }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <Container class1="home-wrapper-1 py-3">
                <div>
                    <Slider {...settings} ref={sliderRef}>
                        <div>
                            <img
                                src="./images/banner1.webp"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="./images/banner2.webp"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="./images/banner3.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="./images/banner4.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="./images/banner5.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="servies d-flex align-items-center justify-content-between">
                            {services?.map((i, j) => {
                                return (
                                    <div
                                        className=" d-flex align-items-center gap-15"
                                        key={j}>
                                        <img src={i.image} alt="services" />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className="mb-0">{i.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            {/* <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container> */}
            <Container class1="featured-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Sản phẩm nổi bật</h3>
                    </div>
                    {productState &&
                        productState?.map((item, index) => {
                            if (item.tags === "featured") {
                                return (
                                    <div key={index} className="col-3">
                                        <div className="product-card position-relative">
                                            <div className="wishlist-icon position-absolute">
                                                <button
                                                    className="border-0 bg-transparent"
                                                    onClick={(e) => {
                                                        addToWish(item?._id);
                                                    }}>
                                                    <img
                                                        src={wish}
                                                        alt="wishlist"
                                                    />
                                                </button>
                                            </div>
                                            <div className="product-image">
                                                <img
                                                    src={item?.images[0].url}
                                                    className="img-fluid"
                                                    alt="product imag"
                                                />
                                                <img
                                                    src={watch2}
                                                    className="img-fluid"
                                                    style={{ width: "270px" }}
                                                    alt="product imag"
                                                />
                                            </div>
                                            <div className="product-details">
                                                <h6 className="brand">
                                                    {item.brand}
                                                </h6>
                                                <h5 className="product-title">
                                                    {item.title}
                                                </h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={item.totalrating.toString()}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="price">
                                                    {item.price.toLocaleString('vi-VN')} đ
                                                </p>
                                            </div>
                                            <div className="action-bar position-absolute">
                                                <div className="d-flex flex-column gap-15">
                                                    {/* <button className="border-0 bg-transparent">
                                                        <img
                                                            src={prodcompare}
                                                            alt="compare"
                                                        />
                                                    </button> */}
                                                    <button className="border-0 bg-transparent">
                                                        <img
                                                            onClick={() =>
                                                                navigate(
                                                                    "/product/" +
                                                                        item?._id,
                                                                )
                                                            }
                                                            src={view}
                                                            alt="view"
                                                        />
                                                    </button>
                                                    {/* <button className="border-0 bg-transparent">
                                                        <img
                                                            src={addcart}
                                                            alt="add cart"
                                                        />
                                                    </button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                </div>
            </Container>
            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img
                                src="images/famous-1.jpg"
                                className="img-fluid"
                                alt="famous"
                            />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img
                                src="images/famous-1.jpg"
                                className="img-fluid"
                                alt="famous"
                            />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img
                                src="images/famous-1.jpg"
                                className="img-fluid"
                                alt="famous"
                            />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img
                                src="images/famous-1.jpg"
                                className="img-fluid"
                                alt="famous"
                            />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Sản phẩm đặc biệt</h3>
                    </div>
                </div>
                <div className="row">
                    {productState &&
                        productState?.map((item, index) => {
                            if (item.tags === "special") {
                                return (
                                    <SpecialProduct
                                        key={index}
                                        id={item?._id}
                                        image={item?.images[0]?.url}
                                        brand={item?.brand}
                                        title={item?.title}
                                        totalrating={item?.totalrating.toString()}
                                        price={item?.price.toLocaleString('vi-VN')}
                                        sold={item?.sold}
                                        quantity={item?.quantity}
                                    />
                                );
                            }
                        })}
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Sản phẩm phổ biến 
                        </h3>
                    </div>
                </div>
                <div className="row">
                    {productState &&
                        productState?.map((item, index) => {
                            if (item.tags === "popular") {
                                return (
                                    <div key={index} className="col-3">
                                        <div className="product-card position-relative">
                                            <div className="wishlist-icon position-absolute">
                                                <button
                                                    className="border-0 bg-transparent"
                                                    onClick={(e) => {
                                                        addToWish(item?._id);
                                                    }}>
                                                    <img
                                                        src={wish}
                                                        alt="wishlist"
                                                    />
                                                </button>
                                            </div>
                                            <div className="product-image">
                                                <img
                                                    src={item?.images[0].url}
                                                    className="img-fluid"
                                                    alt="product imag"
                                                />
                                                <img
                                                    src={watch2}
                                                    className="img-fluid"
                                                    style={{ width: "270px" }}
                                                    alt="product imag"
                                                />
                                            </div>
                                            <div className="product-details">
                                                <h6 className="brand">
                                                    {item.brand}
                                                </h6>
                                                <h5 className="product-title">
                                                    {item.title}
                                                </h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={item.totalrating.toString()}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="price">
                                                    {item.price.toLocaleString('vi-VN')} đ
                                                </p>
                                            </div>
                                            <div className="action-bar position-absolute">
                                                <div className="d-flex flex-column gap-15">
                                                    {/* <button className="border-0 bg-transparent">
                                                        <img
                                                            src={prodcompare}
                                                            alt="compare"
                                                        />
                                                    </button> */}
                                                    <button className="border-0 bg-transparent">
                                                        <img
                                                            onClick={() =>
                                                                navigate(
                                                                    "/product/" +
                                                                        item?._id,
                                                                )
                                                            }
                                                            src={view}
                                                            alt="view"
                                                        />
                                                    </button>
                                                    {/* <button className="border-0 bg-transparent">
                                                        <img
                                                            src={addcart}
                                                            alt="add cart"
                                                        />
                                                    </button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                </div>
            </Container>
            <Container class1="marquee-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-01.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-02.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-03.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-04.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-05.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-06.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-07.png"
                                        alt="brand"
                                    />
                                </div>
                                <div className="mx-4 w-25">
                                    <img
                                        src="images/brand-08.png"
                                        alt="brand"
                                    />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Tin tức mới</h3>
                    </div>
                </div>
                <div className="row">
                    {blogState &&
                        blogState?.map((item, index) => {
                            if (index < 4) {
                                return (
                                    <div className="col-3" key={index}>
                                        <BlogCard
                                            id={item?._id}
                                            title={item?.title}
                                            description={item?.description}
                                            image={item?.images[0].url}
                                            date={moment(
                                                item?.createdAt,
                                            ).format("MMMM Do YYYY, h:mm a")}
                                        />
                                    </div>
                                );
                            }
                        })}
                </div>
            </Container>
        </>
    );
};

export default Home;
