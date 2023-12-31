import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Email phải hợp lệ")
        .required("Vui lòng nhập email"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
        },
    });

    useEffect(()=>{
        if(authState.user !== null && authState.isError === false){
            navigate("/")
        }
    },[authState])

    return (
        <>
            <Meta title={"Đăng nhập"} />
            <BreadCrumb title="Đăng nhập" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng nhập</h3>
                            <form
                                action=""
                                onSubmit={formik.handleSubmit}
                                className="d-flex flex-column gap-15">
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
                                    <Link to="/forgot-password">
                                        Quên mật khẩu / Đổi mật khẩu
                                    </Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button
                                            className="button border-0"
                                            type="submit">
                                            Đăng nhập
                                        </button>
                                        <Link
                                            to="/signup"
                                            className="button signup">
                                            Đăng ký
                                        </Link>
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

export default Login;
