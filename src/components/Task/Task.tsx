import React, { FC } from 'react';
import './Task.scss';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { TaskDetails, OrderStatus } from '../../Models/TaskDetails.model';
import { moveCursor } from 'readline';

interface TaskProps {
  taskDetails: TaskDetails;
  onDelete: () => void;
  onEdit: ()=> void;
}

const Task: FC<TaskProps> = ({ taskDetails, onDelete ,onEdit}) => {
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.Pending:
        return 'warning';
      case OrderStatus.Active:
        return 'info';
      case OrderStatus.Completed:
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <tr>
      <td>
      
              <img
                src={taskDetails.imageUrl}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              
        <p className='fw-bold mb-1'>{taskDetails.theCustomerName}</p>
      </td>
      <td>
        <p className='text-muted mb-0'>{taskDetails.phone}</p>
        <p className='text-muted mb-0'>{taskDetails.email}</p>
      </td>
      <td>
        <p className='fw-normal mb-1'>{taskDetails.theDateOfFilming.toLocaleDateString()}</p>
        <p className='text-muted mb-0'>{taskDetails.payment} ₪</p>
      </td>
      <td>
        <MDBBadge color={getStatusColor(taskDetails.orderStatus)} pill>
          {taskDetails.orderStatus}
        </MDBBadge>
      </td>
      <td>{taskDetails.typeOfOrder}</td>
      <td>

        <button onClick={onEdit} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">עריכה</button>
      </td>
      <td>
        <button onClick={onDelete} className="btn btn-danger">מחיקה</button>
      </td>
    </tr>
  );
}

export default Task;
