// בקומפוננטה ModalEdit
import './ModalEdit.scss';
import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBRadio,
} from 'mdb-react-ui-kit';

import { OrderStatus, TypeOfOrder, TaskDetails } from '../../Models/TaskDetails.model';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/slices/messageSlice';

interface ModalEditProps {
  taskDetails: TaskDetails | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: TaskDetails) => void;
}

const ModalEdit: FC<ModalEditProps> = ({ taskDetails, isOpen, onClose, onSave }) => {
  const [formValue, setFormValue] = useState<TaskDetails>(taskDetails || 
    new TaskDetails('', '', '', '', new Date(), 0, OrderStatus.Pending, TypeOfOrder.a));
  const [selectedTypeOfOrder, setSelectedTypeOfOrder] = useState<TypeOfOrder>(formValue.typeOfOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskDetails) {
      setFormValue(taskDetails);
    } else {
      setFormValue(new TaskDetails('', '', '', '', new Date(), 0, OrderStatus.Pending, TypeOfOrder.a));
    }
  }, [taskDetails]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onChangeRadio = (selectedStatus: OrderStatus) => {
    setFormValue({ ...formValue, orderStatus: selectedStatus });
  };

  const handleChangeTypeOfOrder = useCallback((value: TypeOfOrder) => {
    setSelectedTypeOfOrder(value);
    setFormValue((prevFormValue) => ({ ...prevFormValue, typeOfOrder: value }));
  }, []);

  const handleSubmit = () => {
    onSave(formValue);
    onClose();
    dispatch(addMessage({ type: 'success', text: 'המשימה נוספה בהצלחה' }));

  };

  const orderStatusOptions = [
    { value: OrderStatus.Pending, label: 'בהמתנה' },
    { value: OrderStatus.Active, label: 'פעיל' },
    { value: OrderStatus.Completed, label: 'נסגר' },
  ];

  const typeOfOrderOptions = [
    { value: TypeOfOrder.a, label: 'סמאשקייק' },
    { value: TypeOfOrder.b, label: 'ניו בורן' },
    { value: TypeOfOrder.c, label: 'בת מצווה' },
    { value: TypeOfOrder.d, label: "בר מצווה" },
    { value: TypeOfOrder.e, label: "ילדים" },
    { value: TypeOfOrder.f, label: "משפחה" },
    { value: TypeOfOrder.g, label: "חלאקה" },
    { value: TypeOfOrder.h, label: "גיל שנה" },
    { value: TypeOfOrder.i, label: "אוכל" },
    { value: TypeOfOrder.j, label: "עוגות וברים" },
    { value: TypeOfOrder.k, label: "צילומי סטילס" },
    { value: TypeOfOrder.l, label: "עבודות גרפיקה" },
    { value: TypeOfOrder.m, label: "עיצובי אלבומים" },
    { value: TypeOfOrder.n, label: "טבע" },
  ];

  return (
    <>
      <MDBModal  open={isOpen} onClose={onClose} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{taskDetails ? 'עריכת משימה' : 'הוספת משימה'}</MDBModalTitle>
              <button className='btn-close' color='none' onClick={onClose}></button>
            </MDBModalHeader>

            <MDBModalBody>
              <MDBRow tag="form" className='g-3'>
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    value={formValue.typeOfOrder}
                    onChange={(e) => handleChangeTypeOfOrder(e.target.value as TypeOfOrder)}
                  >
                    {typeOfOrderOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <MDBCol md="6">
                  <MDBInput
                    value={formValue.theCustomerName}
                    name='theCustomerName'
                    onChange={onChange}
                    required
                    placeholder='שם הלקוח'
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    value={formValue.phone}
                    name='phone'
                    onChange={onChange}
                    required
                    placeholder='מספר טלפון'
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    value={formValue.email}
                    name='email'
                    onChange={onChange}
                    required
                    placeholder='אימייל'
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    value={formValue.payment.toString()}
                    name='payment'
                    onChange={onChange}
                    required
                    placeholder='תשלום'
                  />
                </MDBCol>

                <MDBCol md="6">
                  <div>
                    <MDBRadio
                      name="orderStatus"
                      onClick={() => onChangeRadio(OrderStatus.Pending)}
                      id="flexRadioDefault1"
                      checked={formValue.orderStatus === OrderStatus.Pending}
                      label="בהזמנה"
                    />
                    <MDBRadio
                      name="orderStatus"
                      onClick={() => onChangeRadio(OrderStatus.Active)}
                      id="flexRadioDefault2"
                      checked={formValue.orderStatus === OrderStatus.Active}
                      label="פעיל"
                    />
                    <MDBRadio
                      name="orderStatus"
                      onClick={() => onChangeRadio(OrderStatus.Completed)}
                      id="flexRadioDefault3"
                      checked={formValue.orderStatus === OrderStatus.Completed}
                      label="נסגר"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>

            <MDBModalFooter>
              <button className="btn btn-danger" color='secondary' onClick={onClose}>
                סגור
              </button>
              <button className="btn btn-danger" onClick={handleSubmit}>שמור</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default ModalEdit;


/**               <MDBDropdown>
                    <MDBDropdownToggle>{selectedTypeOfOrder}</MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {typeOfOrderOptions.map((option) => (
                        <MDBDropdownItem
                          key={option.value}
                          onClick={() => handleChangeTypeOfOrder(option.value)}
                        >
                          {option.label}
                        </MDBDropdownItem>
                      ))}
                    </MDBDropdownMenu>
                  </MDBDropdown>
*/