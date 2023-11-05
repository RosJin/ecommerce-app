import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createQuery, creatrQuery } from "../features/contact/contactSlice"

const contactSchema = yup.object({
    name: yup.string().required("Vui lòng nhập tên"),
    email: yup
        .string()
        .nullable()
        .email("Email phải hợp lệ")
        .required("Vui lòng nhập email"),
    mobile: yup
        .string()
        .default("")
        .nullable()
        .required("Vui lòng nhập số điện thoại"),
    comment: yup
        .string()
        .default("")
        .nullable()
        .required("Vui lòng nhập nhận xét"),
});

const Contact = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            email: "",
            comment: "",
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            dispatch(createQuery(values))
        },
    });

    return (
        <>
            <Meta title={"Liên hệ"} />
            <BreadCrumb title="Liên hệ" />
            <Container class1="contact-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1775.9933213722009!2d105.75147131470791!3d10.038378830973455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1694507766569!5m2!1svi!2s"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title">Liên hệ</h3>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    action=""
                                    className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Tên"
                                            name="name"
                                            onChange={formik.handleChange(
                                                "name",
                                            )}
                                            onBlur={formik.handleBlur("name")}
                                            value={formik.values.name}
                                        />
                                        <div className="error">
                                            {formik.touched.name &&
                                                formik.errors.name}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            name="email"
                                            onChange={formik.handleChange(
                                                "email",
                                            )}
                                            onBlur={formik.handleBlur("email")}
                                            value={formik.values.email}
                                        />
                                        <div className="error">
                                            {formik.touched.email &&
                                                formik.errors.email}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Số điện thoại"
                                            name="mobile"
                                            onChange={formik.handleChange(
                                                "mobile",
                                            )}
                                            onBlur={formik.handleBlur("mobile")}
                                            value={formik.values.mobile}
                                        />
                                        <div className="error">
                                            {formik.touched.mobile &&
                                                formik.errors.mobile}
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            id=""
                                            className="w-100 form-control"
                                            cols="30"
                                            rows="4"
                                            placeholder="Nhận xét"
                                            name="comment"
                                            onChange={formik.handleChange(
                                                "comment",
                                            )}
                                            onBlur={formik.handleBlur(
                                                "comment",
                                            )}
                                            value={
                                                formik.values.comment
                                            }></textarea>
                                        <div className="error">
                                            {formik.touched.comment &&
                                                formik.errors.comment}
                                        </div>
                                    </div>
                                    <dir>
                                        <button className="button border-0">
                                            Gửi
                                        </button>
                                    </dir>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">
                                    Hãy liên hệ với chúng tôi
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineHome className="fs-5" />
                                            <address className="mb-0">
                                                332 Ninh Kieu , Can Tho
                                            </address>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiPhoneCall className="fs-5" />
                                            <a href="tel:+84 07093021">
                                                +84 07093021
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineMail className="fs-5" />
                                            <a href="mailto:huyhoang.hn462@gmail.com">
                                                huyhoang.hn462@gmail.com
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiInfoCircle className="fs-5" />
                                            <p className="mb-0">
                                                Thứ Hai- Chủ Nhật 08:00 - 22:00 
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
