import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addRating,
    getAProduct,
    getAllProducts,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import ImageZoom from "./ImageZoom";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [alreadyAdded, serAlreadyAdded] = useState(false);
    const location = useLocation();
    const getProductId = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product?.singleproduct);
    const productsState = useSelector((state) => state.product?.product ?? []);
    const cartState = useSelector((state) => state.auth?.cartProducts ?? []);
    useEffect(() => {
        dispatch(getAProduct(getProductId));
        dispatch(getUserCart());
        dispatch(getAllProducts());
    }, []);
    useEffect(() => {
        for (let index = 0; index < cartState.length; index++) {
            if (getProductId === cartState[index]?.productId?._id) {
                serAlreadyAdded(true);
            }
        }
    });
    const uploadCart = () => {
        dispatch(
            addProdToCart({
                productId: productState?._id,
                quantity,

                price: productState?.price,
            }),
        );
        navigate("/cart");
    };
    const totalReviews = productState?.ratings.length;
    const imageUrl = productState?.images[0].url
  
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    const [popularProduct, setPopularProduct] = useState([]);
    useEffect(() => {
        let data = [];
        for (let index = 0; index < productsState.length; index++) {
            const element = productsState[index];
            if (element.tags === "popular") {
                data.push(element);
            }
            setPopularProduct(data);
        }
    }, [productState]);

    const [star, setStar] = useState(null);
    const [comment, setComment] = useState(null);
    const addRatingToProduct = () => {
        if (star === null) {
            toast.error("Vui lòng xếp hạng sản phẩm");
            return false;
        } else if (comment === null) {
            toast.error("Vui lòng viết đánh giá về sản phẩm");
            return false;
        } else {
            dispatch(
                addRating({
                    star: star,
                    comment: comment,
                    prodId: getProductId,
                }),
            );
            setTimeout(() => {
                dispatch(getAProduct(getProductId));
            }, 300);
        }
        return false;
    };
    return (
        <>
            <Meta title={productState?.title} />
            <BreadCrumb title={productState?.title} />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ImageZoom imageUrl={imageUrl} />
                            </div>
                        </div>
                        {/* <div className="other-product-images d-flex flex-wrap gap-15">
                            {productState &&
                                productState?.images.map((item, index) => {
                                    return (
                                        <div>
                                            <img
                                                key={index}
                                                src={item?.url}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    );
                                })}
                        </div> */}
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">{productState?.title}</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">
                                    {productState?.price.toLocaleString(
                                        "vi-VN",
                                    )} đ
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={productState?.totalrating}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0 t-review">
                                        ({totalReviews} Reviews)
                                    </p>
                                </div>
                                <a className="review-btn" href="#review">
                                    Viết đánh giá
                                </a>
                            </div>
                            <div className=" py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">
                                        Thương hiệu :
                                    </h3>
                                    <p className="product-data">
                                        {productState?.brand}
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">
                                        Loại sản phẩm :
                                    </h3>
                                    <p className="product-data">
                                        {productState?.category}
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">
                                        Dạng sản phẩm :
                                    </h3>
                                    <p className="product-data">
                                        {productState?.tags}
                                    </p>
                                </div>

                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    {alreadyAdded === false && (
                                        <>
                                            <h3 className="product-heading">
                                                Số lượng:
                                            </h3>
                                            <div className="">
                                                <input
                                                    type="number"
                                                    name=""
                                                    min={1}
                                                    max={999}
                                                    className="form-control"
                                                    style={{ width: "70px" }}
                                                    id=""
                                                    onChange={(e) =>
                                                        setQuantity(
                                                            e.target.value,
                                                        )
                                                    }
                                                    value={quantity}
                                                />
                                            </div>
                                        </>
                                    )}
                                    <div
                                        className={
                                            alreadyAdded
                                                ? "ms-0"
                                                : "ms-5" +
                                                  "d-flex align-items-center gap-30 ms-5"
                                        }>
                                        <button
                                            className="button border-0"
                                            // data-bs-toggle="modal"
                                            // data-bs-target="#staticBackdrop"
                                            type="button"
                                            onClick={() => {
                                                alreadyAdded
                                                    ? navigate("/cart")
                                                    : uploadCart();
                                            }}>
                                            {alreadyAdded
                                                ? "Đi tới giỏ hàng"
                                                : "Thêm vào giỏ hàng"}
                                        </button>
                                        {/* <button className="button signup">
                                            Buy It Now
                                        </button> */}
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className="product-heading">
                                        Thời gian vận chuyển :
                                    </h3>
                                    <p className="product-data">
                                        Tùy thuộc vào nơi ở của bạn <br /> Thời
                                        gian vận chuyển có thể giao động từ
                                        <b> 3 đến 10 ngày</b>
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className="product-heading">
                                        Link sản phẩm :
                                    </h3>
                                    <a
                                        href="javascript:void(0)"
                                        onClick={() => {
                                            copyToClipboard(
                                                window.location.href,
                                            );
                                        }}>
                                        Sao chép link sản phẩm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Mô tả sản phẩm</h4>
                        <div className="bg-white p-3">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: productState?.description,
                                }}></p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id="review">Đánh giá sản phẩm</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-form py-4">
                                <h4>Viết đánh giá</h4>
                                <div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={true}
                                        activeColor="#ffd700"
                                        onChange={(e) => {
                                            setStar(e);
                                        }}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name=""
                                        id=""
                                        className="w-100 form-control"
                                        cols="30"
                                        rows="4"
                                        placeholder="Nhận xét"
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                        }}></textarea>
                                </div>
                                <div className="d-flex justify-content-end mt-3">
                                    <button
                                        onClick={addRatingToProduct}
                                        className="button border-0"
                                        type="button">
                                        Gửi đánh giá của bạn
                                    </button>
                                </div>
                            </div>
                            <div className="reviews mt-4">
                                {productState &&
                                    productState.ratings?.map((item, index) => {
                                        return (
                                            <div className="review" key={index}>
                                                <div className="d-flex gap-10 align-items-center">
                                                    <h6 className="mb-0">
                                                        Người dùng đánh giá 
                                                    </h6>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={item?.star}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                <p className="mt-3">
                                                    {item?.comment}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Sản phẩm phổ biến của chúng tôi
                        </h3>
                    </div>
                    <ProductCard data={popularProduct} />
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
