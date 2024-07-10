import React, { FC } from 'react';
import './Contact.scss';
import { useFormik } from 'formik';
import * as yup from "yup"

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const myForm = useFormik({
    // אובייקט ברירת מחדל עם כל המאפינים באובייקט
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      mokedId: null
    },
    // מאפיין המקבל פונקציה כאשר מפעילים על אירוע סמיט
    onSubmit: (value: any) => {
      console.log(value);
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("שדה חובה"),
      lastName: yup.string().required("שדה חובה"),
      email: yup.string().email("מייל לא תקין").required("שדה חובה"),
      phone: yup.string().matches(/^[0-9]+$/, "הטלפון חייב להכיל רק מספרים").min(9, "מינימום תווים 9").required("שדה חובה"),
      mokedId: yup.string().required("שדה חובה")
    })
  });

  return (
    <div className="HrWorker row">
      <div dir='rtl' className='col-sm-6 m-auto'>
        <h2 className='mt-3 mb-3'>צרו קשר</h2>
        <form onSubmit={myForm.handleSubmit}>
          <div className='form-group'>
            <label className='mb-2'>שם פרטי</label>
            <input
              name='firstName'
              onChange={myForm.handleChange}
              onBlur={myForm.handleBlur}
              value={myForm.values.firstName}
              className={myForm.errors.firstName && myForm.touched.firstName ? 'form-control is-invalid' : 'form-control'}
            />
            {myForm.errors.firstName && myForm.touched.firstName && (
              <small className='errors text-danger'>{myForm.errors.firstName.toString()}</small>
            )}
          </div>

          <div className='form-group mt-3'>
            <label className='mb-2'>שם משפחה</label>
            <input
              name='lastName'
              onChange={myForm.handleChange}
              onBlur={myForm.handleBlur}
              value={myForm.values.lastName}
              className={myForm.errors.lastName && myForm.touched.lastName ? 'form-control is-invalid' : 'form-control'}
            />
            {myForm.errors.lastName && myForm.touched.lastName && (
              <small className='errors text-danger'>{myForm.errors.lastName.toString()}</small>
            )}
          </div>

          <div className='form-group mt-3'>
            <label className='mb-2'>מייל</label>
            <input
              name='email'
              onChange={myForm.handleChange}
              onBlur={myForm.handleBlur}
              value={myForm.values.email}
              className={myForm.errors.email && myForm.touched.email ? 'form-control is-invalid' : 'form-control'}
            />
            {myForm.errors.email && myForm.touched.email && (
              <small className='errors text-danger'>{myForm.errors.email.toString()}</small>
            )}
          </div>

          <div className='form-group mt-3'>
            <label className='mb-2'>טלפון</label>
            <input
              name='phone'
              onChange={myForm.handleChange}
              onBlur={myForm.handleBlur}
              value={myForm.values.phone}
              className={myForm.errors.phone && myForm.touched.phone ? 'form-control is-invalid' : 'form-control'}
            />
            {myForm.errors.phone && myForm.touched.phone && (
              <small className='errors text-danger'>{myForm.errors.phone.toString()}</small>
            )}
          </div>

          <div className='form-group mt-3'>
            <label className='mb-2'>נושא</label>
            <select
              className={myForm.errors.mokedId && myForm.touched.mokedId ? 'form-control is-invalid' : 'form-control'}
              onChange={myForm.handleChange}
              onBlur={myForm.handleBlur}
              value={myForm.values.mokedId || ""}
              name='mokedId'
            >
              <option value="">בחר נושא...</option>
              <option value="כללי">כללי</option>
              <option value="הצעת מחיר">הצעת מחיר</option>
              <option value="הזמנה">הזמנה</option>
            </select>
            {myForm.errors.mokedId && myForm.touched.mokedId && (
              <small className='errors text-danger'>{myForm.errors.mokedId.toString()}</small>
            )}
          </div>

          <div className='mt-4 d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary'>שלח</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
