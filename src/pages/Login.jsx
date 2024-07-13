import React, { useEffect } from 'react'
import '../index.css'
import profileIcon from '../assets/images/profileIcon.png'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup'
export default function Login() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const initialValues = {
        email_id: '',
        Password: '',
        consent: false
    }
    const loginSchema = Yup.object({
        email_id: Yup.string().email('Invalid email format').required('Please Enter Email id'),
        Password: Yup.string().min(6).max(14).required('Please Enter Password'),
    })
    const { values, handleChange, handleSubmit,errors } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <>
            <div className="pageWrapper lg:tw-flex tw-justify-center mt-5 tw-pb-10">
                <div className="rightSec lg:tw-w-[40%] tw-mt-7 lg:tw-mt-0 sm:tw-p-8 tw-p-3 tw-border tw-rounded-lg tw-shadow-lg">
                    <div className="">
                        <div className="logo tw-text-center">
                            <img className='tw-w-[100px] tw-mx-auto' src={profileIcon} alt="logo" />
                        </div>
                        <h1 className="tw-text-[#202224] tw-text-center tw-text-[32px] tw-font-bold tw-mt-4 tw-mb-0">Login to Account</h1>
                        <p className="tw-text-[#202224] tw-text-center tw-text-sm mt-2">Please enter your email and password to continue</p>
                        <form className="tw-my-10 tw-mx-10" id="loginForm" onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label htmlFor="email_id" className="mx-1">Email ID</label>
                                <input type="email" value={values.name} onChange={handleChange} id="email_id" name="email_id" className="form-control" />
                                <div className="error tw-text-xs tw-text-red-500">{errors.email_id}</div>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="Password" className="mx-1">Password</label>
                                <input type="password" value={values.Password} onChange={handleChange} id="Password" name="Password" className="form-control" />
                                <div className="error tw-text-xs tw-text-red-500">{errors.Password}</div>
                            </div>
                            <div className="form-group my-2">
                                <div className="check-field consentCheckbox">
                                    <label className="check_show check_lable">
                                        <input type="checkbox" value={values.consent} onChange={handleChange} name="consent" id="consent" className="terms-condition "
                                            aria-required="true" />
                                        <i></i>
                                        <span className='px-2'>Remember Password</span>
                                    </label>
                                </div>
                                <div className="error tw-text-xs tw-text-red-500">{errors.consent}</div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="submitBtn tw-bg-[#3b5d50] tw-py-3 tw-w-full tw-text-white tw-text-sm tw-font-semibold tw-rounded-[3px]">LOGIN</button>
                                <div className="mt-3"></div>
                                <NavLink to='/sign-up' type="submit" className="submitBtn tw-bg-[#3b5d50] tw-py-3 tw-w-full tw-text-white tw-text-sm tw-font-semibold tw-rounded-[3px]">SIGN UP</NavLink>
                            </div>
                            <div className="tw-text-center tw-mt-5">
                                <a href="" className="tw-text-[#27364B] tw-text-sm tw-underline">Forget Password?</a>
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

