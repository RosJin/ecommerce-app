import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { FiEdit } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'
import ChangePassword from "./ChangePassword";

const profileSchema = yup.object({
    firstname: yup.string().required("Vui lòng nhập tên"),
    lastname: yup.string().required("Vui lòng nhập họ"),
    email: yup
        .string()
        .email("Email phải hợp lệ")
        .required("Vui lòng nhập email"),
    mobile: yup.string().required("Vui lòng nhập số điện thoại"),
});

const Profile = () => {

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

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth.user);
    const [edit, setEdit] = useState(true);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.firstname,
            lastname: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
            dispatch(updateProfile({data: values, config2:config2}));
            setEdit(true);
        },
    });
    const navigate = useNavigate()

    const handleChangePass = () =>{
        navigate("/change-password")
    }

    return (
        <>
            <BreadCrumb title="Hồ sơ người dùng" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="my-3">Cập nhật hồ sơ người dùng</h3>
                            <FiEdit
                                className="fs-3"
                                onClick={() => setEdit(false)}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label
                                    htmlFor="example1"
                                    className="form-label">
                                    Tên
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    className="form-control"
                                    id="example1"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                    disabled={edit}
                                />
                                <div className="error">
                                    {formik.touched.firstname &&
                                        formik.errors.firstname}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="example2"
                                    className="form-label">
                                    Họ
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    className="form-control"
                                    id="example2"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")}
                                    disabled={edit}
                                />
                                <div className="error">
                                    {formik.touched.lastname &&
                                        formik.errors.lastname}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label">
                                    Địa chỉ email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    disabled={edit}
                                />
                                <div className="error">
                                    {formik.touched.email &&
                                        formik.errors.email}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail2"
                                    className="form-label">
                                    Số điện thoại
                                </label>
                                <input
                                    type="number"
                                    name="mobile"
                                    className="form-control"
                                    id="exampleInputEmail2"
                                    aria-describedby="emailHelp"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                    disabled={edit}
                                />
                                <div className="error">
                                    {formik.touched.mobile &&
                                        formik.errors.mobile}
                                </div>
                            </div>
                                <div className="mb-3">
                                    <button onClick={handleChangePass}>Đổi mật khẩu</button>
                                </div>
                            

                            {edit === false && (
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Lưu
                                </button>
                            )}
                            
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;