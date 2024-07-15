import React, { useEffect, useRef, useState } from 'react'
import '../index.css'
import profileIcon from '/react-furni/images/profileIcon.png'
import congratulations from '/react-furni/images/congratulations.gif'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SignUp() {
    const [submit, setSubmit] = useState(false)
    const navigate = useNavigate();
    const firstErrorRef = useRef(null);
    const [startDate, setStartDate] = useState(null);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [submit])

    useEffect(() => {
        if (submit) {
            const timer = setTimeout(() => {
                navigate('/'); // Redirect to home after 3 seconds
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [submit, navigate]);

    const signUpForm = Yup.object({
        salutation: Yup.string().required('please select salutation'),
        full_name: Yup.string()
            .transform(value => value.trim())
            .matches(/^[a-zA-Z]+( [a-zA-Z]+)+$/, 'Full name must contain at least two words')
            .min(3, 'Full name must be at least 3 characters long')
            .max(30, 'Full name must be at most 30 characters long')
            .required('please enter full name'),
        mobile: Yup.string()
            .matches(/^[6-9]\d{9}$/, 'Mobile number must start with 6 to 9 ')
            .min(10).max(10)
            .matches(/^[0-9]+$/, 'Mobile number must be digits only')
            .required('please enter mobile number'),
        date_of_birth: Yup.string().
            required('please enter date of birth'),
        email_id: Yup.string().
            email().
            required('please enter email id'),
        Password: Yup.string().
            min(4).max(20).
            required('please enter password'),
        consent: Yup.boolean().
            oneOf([true], 'please accept terms and conditions')
            .required('Please select consent'),
    })

    const initialValues = {
        salutation: "",
        full_name: "",
        mobile: "",
        date_of_birth: "",
        email_id: "",
        Password: "",
        consent: false,
    }
    const { values, handleChange, handleSubmit, errors, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpForm,
        onSubmit: values => {
            setSubmit(true)
            console.log(values);
        }
    })

    const focusOnError = () => {
        const firstErrorKey = Object.keys(errors)[0];
        if (firstErrorKey) {
            firstErrorRef.current = document.getElementsByName(firstErrorKey)[0];
            firstErrorRef.current && firstErrorRef.current.focus();
        }
    }
    useEffect(() => {
        if (startDate) {
            setFieldValue('date_of_birth', startDate);
        }
    }, [startDate, setFieldValue]);

    return (
        <>
            <div className="pageWrapper lg:tw-flex tw-justify-center mt-5 tw-pb-10">
                <div className="rightSec lg:tw-w-[40%] tw-mt-7 lg:tw-mt-0 sm:tw-p-8 tw-p-3 tw-border tw-rounded-lg tw-shadow-lg">
                    {!submit ?
                        <div className="">
                            <div className="logo tw-text-center">
                                <img className='tw-w-[100px] tw-mx-auto' src={profileIcon} alt="logo" />
                            </div>
                            <h1 className="tw-text-[#202224] tw-text-center tw-text-[32px] tw-font-bold tw-mt-4 tw-mb-0">Create An Account</h1>
                            <p className="tw-text-[#202224] tw-text-center tw-text-sm mt-2">Please enter your details to create account</p>
                            <form className="tw-my-10 tw-mx-10" id="loginForm" onSubmit={handleSubmit}>
                                <div class="tw-flex tw-flex-wrap tw-justify-between sm:tw-mt-8 tw-mt-5">
                                    <div class=" tw-w-full tw-md:w-[48%] tw-flex tw-justify-between tw-flex-wrap">
                                        <div class="form-group tw-mr-0   tw-w-[20%]">
                                            <label for="salutation" className="mx-1">Gender</label>
                                            <select id="salutation" value={values.salutation} onChange={handleChange} name="salutation" className="form-control">
                                                <option value="">Select</option>
                                                <option value="Mr.">Mr</option>
                                                <option value="Mrs.">Mrs</option>
                                                <option value="Ms.">Miss</option>
                                            </select>
                                            <div className="error tw-text-xs tw-text-red-500">{errors.salutation}</div>
                                        </div>
                                        <div class="form-group  tw-w-[75%]">
                                            <label for="full_name" class="control-label">Full Name</label>
                                            <input type="text" value={values.full_name} onChange={handleChange} name="full_name" class="form-control" id="full_name"
                                                onCopy="return false" onDrop="return false" onPaste="return false"
                                                autocomplete="off" maxlength="100" />
                                            <div className="error tw-text-xs tw-text-red-500">{errors.full_name}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-2 ">
                                    <label htmlFor="mobile" className="mx-1">Mobile Number</label>
                                    <input type="tel" minLength="10" maxLength="10" id="mobile" value={values.mobile} onChange={handleChange} name="mobile" className="form-control" />
                                    <div className="error tw-text-xs tw-text-red-500">{errors.mobile}</div>
                                </div>
                                {/* <div class="form-group">
                                    <label for="date_of_birth" className="mx-1">Date Of Birth </label>
                                    <input name="date_of_birth" value={values.date_of_birth} onChange={handleChange} autocomplete="off" onCopy="return false"
                                        onDrop="return false" readonly onPaste="return false" type="text" id="date_of_birth"
                                        maxlength="50" class="form-control  required" aria-required="true" />
                                    <div className="error tw-text-xs tw-text-red-500">{errors.date_of_birth}</div>
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="date_of_birth" className="mx-1  d-block">1 Date Of Birth </label>
                                    <DatePicker
                                        id="date_of_birth"
                                        name="date_of_birth"
                                        selected={startDate}
                                        onChange={setStartDate}
                                        dateFormat="dd/MM/yyyy"
                                        autoComplete="off"
                                        className="form-control required w-full"
                                        aria-required="true"
                                    />
                                    <div className="error tw-text-xs tw-text-red-500">{errors.date_of_birth}</div>
                                </div>


                                <div className="form-group mb-2">
                                    <label htmlFor="email_id" className="mx-1">Email ID</label>
                                    <input type="email" id="email_id" value={values.email_id} onChange={handleChange} name="email_id" className="form-control" />
                                    <div className="error tw-text-xs tw-text-red-500">{errors.email_id}</div>

                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="Password" className="mx-1">Password</label>
                                    <input type="password" id="Password" value={values.Password} onChange={handleChange} name="Password" className="form-control" />
                                    <div className="error tw-text-xs tw-text-red-500">{errors.Password}</div>
                                </div>
                                <div className="form-group my-2">
                                    <div className="check-field consentCheckbox">
                                        <label className="check_show check_lable">
                                            <input type="checkbox" name="consent" value={values.consent} onChange={handleChange} id="consent" className="terms-condition "
                                                aria-required="true" />
                                            <i></i>
                                            <span className='px-2'> I agree the turms and conditions of furni</span>
                                        </label>
                                    </div>
                                    <div className="error tw-text-xs tw-text-red-500">{errors.consent}</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" onClick={focusOnError} className="submitBtn tw-bg-[#3b5d50] tw-py-3 tw-w-full tw-text-white tw-text-sm tw-font-semibold tw-rounded-[3px]">SIGN UP</button>
                                    <div className="mt-3"></div>
                                    <NavLink to='/login' type="submit" className="submitBtn tw-bg-[#3b5d50] tw-py-3 tw-w-full tw-text-white tw-text-sm tw-font-semibold tw-rounded-[3px]">LOGIN</NavLink>
                                </div>

                            </form>
                        </div> :
                        <div className="tw-relative">
                            <div className=" tw-text-center">
                                <img className='tw-z-[-1] tw-w-2/4 tw-h-2/4 tw-rounded-full tw-mx-auto tw-fixed tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]' src={congratulations} alt="logo" />
                            </div>
                            <div className="logo tw-text-center">
                                <img className='tw-w-[100px] tw-mx-auto' src={profileIcon} alt="logo" />
                            </div>
                            <h1 className="tw-text-[#202224] tw-text-center tw-text-[32px] tw-font-bold tw-mt-4 tw-mb-0">Congratulations</h1>
                            <p className="tw-text-[#202224] tw-text-center tw-text-sm mt-2">Your Account Created Succesfully</p>
                            <div className="text-center">
                                <button className='btn btn-lg btn-primary my-4'>
                                    <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>Go To Homepage</NavLink>
                                </button>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

