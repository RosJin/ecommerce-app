import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
    const dispatch = useDispatch();
    const orderState = useSelector(
        (state) => state.auth?.getorderedProduct?.orders ?? [],
    );

    useEffect(() => {
        dispatch(getOrders());
    }, []);
    return (
        <>
            <BreadCrumb title="Đơn hàng của tôi" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <h5>Mã đơn hàng</h5>
                            </div>
                            <div className="col-3">
                                <h5>Tổng giá tiền</h5>
                            </div>
                            <div className="col-3">
                                <h5>Tổng giá tiền sau khi giảm giá</h5>
                            </div>
                            <div className="col-3">
                                <h5>Trạng thái đơn hàng</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        {orderState &&
                            orderState?.map((item, index) => {
                                return (
                                    <div
                                        style={{ backgroundColor: "#febd69" }}
                                        className="row pt-3 my-3"
                                        key={index}>
                                        <div className="col-3">
                                            <p>{item?._id}</p>
                                        </div>
                                        <div className="col-3">
                                            <p>{item?.totalPrice}</p>
                                        </div>
                                        <div className="col-3">
                                            <p>
                                                {item?.totalPriceAfterDiscount}
                                            </p>
                                        </div>
                                        <div className="col-3">
                                            <p>{item?.orderStatus}</p>
                                        </div>
                                        <div className="col-12">
                                            <div
                                                className="row py-3"
                                                style={{
                                                    backgroundColor: "#232f3e",
                                                }}>
                                                <div className="col-3">
                                                    <h6 className="text-white">
                                                        Tên sản phẩm
                                                    </h6>
                                                </div>
                                                <div className="col-3">
                                                    <h6 className="text-white">
                                                        Số lượng
                                                    </h6>
                                                </div>
                                                <div className="col-3">
                                                    <h6 className="text-white">
                                                        Giá
                                                    </h6>
                                                </div>
                                                
                                                {item?.orderItems?.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                className="col-12"
                                                                key={index}>
                                                                <div className="row p-3">
                                                                    <div className="col-3">
                                                                        <p className="text-white">
                                                                            {
                                                                                item
                                                                                    ?.product
                                                                                    ?.title
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <p className="text-white">
                                                                            {
                                                                                item?.quantity
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <p className="text-white">
                                                                            {
                                                                                item?.price
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Orders;
