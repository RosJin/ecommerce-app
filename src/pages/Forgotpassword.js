import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useNavigate, Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordToken } from "../features/user/userSlice";

const emailSchema = yup.object({
    email: yup
        .string()
        .email("Email phải hợp lệ")
        .required("Vui lòng nhập email"),
});

const Forgotpassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: emailSchema,
        onSubmit: (values) => {
            dispatch(forgotPasswordToken(values));
        },
    });

    return (
        <>
            <Meta title={"Quên mật khẩu/Đổi mật khẩu"} />
            <BreadCrumb title="Quên mật khẩu/Đổi mật khẩu" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">
                                Quên mật khẩu/Đổi mật khẩu
                            </h3>
                            <p className="text-center mt-2 mb-3">
                                Chúng tôi sẽ gửi cho bạn 1 email để  đổi mật khẩu
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                action=""
                                className="d-flex flex-column gap-15">
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    val={formik.values.email}
                                    onCh={formik.handleChange("email")}
                                    onBl={formik.handleBlur("email")}
                                />
                                <div className="error text-center">
                                    {formik.touched.email &&
                                        formik.errors.email}
                                </div>
                                <div>
                                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                        <button
                                            className="button border-0"
                                            type="submit">
                                            Gửi
                                        </button>
                                        <Link to="/login">Hủy</Link>
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

export default Forgotpassword;
