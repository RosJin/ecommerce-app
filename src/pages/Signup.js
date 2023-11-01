import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const signUpSchema = yup.object({
    firstname: yup.string().required("Vui lòng nhập tên"),
    lastname: yup.string().required("Vui lòng nhập họ"),
    email: yup
        .string()
        .email("Email phải hợp lệ")
        .required("Vui lòng nhập email"),
    mobile: yup.string().required("Vui lòng nhập số điện thoại"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const Signup = () => {
    const authState = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(registerUser(values));
        },
    });

    useEffect(()=>{
        if(authState.createdUser !== null && authState.isError === false){
            navigate("/login")
        }
    },[authState])

    return (
        <>
            <Meta title={"Đăng ký"} />
            <BreadCrumb title="Đăng ký" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng ký</h3>
                            <form
                                action=""
                                onSubmit={formik.handleSubmit}
                                className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="text"
                                    name="firstname"
                                    placeholder="Họ"
                                    val={formik.values.firstname}
                                    onCh={formik.handleChange("firstname")}
                                    onBl={formik.handleBlur("firstname")}
                                />
                                <div className="error">
                                    {formik.touched.firstname &&
                                        formik.errors.firstname}
                                </div>
                                <CustomInput
                                    type="text"
                                    name="lastname"
                                    placeholder="Tên"
                                    val={formik.values.lastname}
                                    onCh={formik.handleChange("lastname")}
                                    onBl={formik.handleBlur("lastname")}
                                />
                                <div className="error">
                                    {formik.touched.lastname &&
                                        formik.errors.lastname}
                                </div>
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    val={formik.values.email}
                                    onCh={formik.handleChange("email")}
                                    onBl={formik.handleBlur("email")}
                                />
                                <div className="error">
                                    {formik.touched.email &&
                                        formik.errors.email}
                                </div>
                                <CustomInput
                                    type="tel"
                                    name="mobile"
                                    placeholder="Số điện thoại"
                                    val={formik.values.mobile}
                                    onCh={formik.handleChange("mobile")}
                                    onBl={formik.handleBlur("mobile")}
                                />
                                <div className="error">
                                    {formik.touched.mobile &&
                                        formik.errors.mobile}
                                </div>
                                <CustomInput
                                    className="mt-1"
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    val={formik.values.password}
                                    onCh={formik.handleChange("password")}
                                    onBl={formik.handleBlur("password")}
                                />
                                <div className="error">
                                    {formik.touched.password &&
                                        formik.errors.password}
                                </div>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">
                                            Đăng ký
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Signup;
