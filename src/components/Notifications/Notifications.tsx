import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState, AppDispatch } from '../../redux/store';
import { clearNotifications } from '../../redux/notificationsSlice';

const Notifications: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications.notifications);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    notifications.forEach(notification => {
      if (notification.type === 'success') {
        toast.success(notification.message);
      } else if (notification.type === 'error') {
        toast.error(notification.message);
      }
    });

    dispatch(clearNotifications());
  }, [notifications, dispatch]);

  return <ToastContainer />;
};

export default Notifications;
