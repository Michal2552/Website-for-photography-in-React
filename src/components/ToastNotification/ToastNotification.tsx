import React, { FC, useEffect, useState } from 'react';
import './ToastNotification.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../../redux/slices/messageSlice';
import { Toast } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

interface ToastNotificationProps {}

const ToastNotification: FC<ToastNotificationProps> = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: any) => state.messageSlice.message);
  const [show, setShow] = useState(!!message);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) {
    return null;
  }

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      dispatch(clearMessage());
    }, 300);
  };

  let toastClassName = '';
  if (message.type === 'error') {
    toastClassName = 'bg-danger text-white';
  } else if (message.type === 'success') {
    toastClassName = 'bg-success text-white';
  }

  return (
    <div className={`ToastNotification ${show ? 'show' : 'hide'} ${toastClassName}`}>
      <div className="toast-header">
        <strong className="mr-auto">הודעת מערכת</strong>
        <button type="button" className="ml-2 mb-1 close" onClick={handleClose}>
          <span>&times;</span>
        </button>
      </div>
      <div className="toast-body">
        {message.text}
      </div>
    </div>
  );
};

export default ToastNotification;



  /* 
  if (!message) {
    return null;
  }

  const handleClose = () => {
    dispatch(clearMessage());
  };

  let toastClassName = 'toast';
  if (message.type === 'error') {
    toastClassName = ' error-toast';
  } else if (message.type === 'success') {
    toastClassName = ' success-toast';
  }

  return (
     <div className="ToastNotification">
    <Toast show={!!message} onClose={handleClose} delay={3000} autohide className={toastClassName}>
      <div>{message.text}</div>
    </Toast>
  </div>

  );
};

export default ToastNotification;
*/