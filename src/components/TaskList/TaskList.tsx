import React, { FC, useRef, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBInputGroup, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { OrderStatus, TaskDetails, TypeOfOrder } from '../../Models/TaskDetails.model';
import Task from '../Task/Task';
import ModalEdit from '../ModalEdit/ModalEdit';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/slices/messageSlice';

interface TaskListProps {}

const TaskList: FC<TaskListProps> = () => {
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState<TaskDetails[]>([  
    new TaskDetails("/img/smashcake/2.jpg", "שולמית מועלם", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Active, TypeOfOrder.g),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "אילה גולומבק ", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Active, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/נתי12.jpg", "נתי לוי", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.g),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "תהילה מרשק", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.f),
    new TaskDetails("/img/lacoach/IMG_7564.jpg", "נתנאל זקס", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.d),
    new TaskDetails("/img/lacoach/IMG_6719.jpg", "אברימי טלסניק", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.d),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "חני גנזל", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.f),
    new TaskDetails("/img/lacoach/2.jpg", "איזי שפיגלמן", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.g),
    new TaskDetails("/img/lacoach/ee.jpg", "עובדיה חקוק", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.g),
    new TaskDetails("/img/smashcake/2.jpg", "מרגלית גולומבק", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.f),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "הדס גולומבק ", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "גילי גולומבק ", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/smashcake/2.jpg", "איתן שטיינברג", "0523456456", "eitan@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.a),
    new TaskDetails("/img/smashcake/2.jpg", "יעל זקס", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.a),
    new TaskDetails("/img/smashcake/2.jpg", "יונתן שטיינברג", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.a),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "יאיר לוריא ", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.d),
    new TaskDetails("/img/smashcake/2.jpg", "נפתלי דוידסון", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.d),
    new TaskDetails("/img/smashcake/2.jpg", "רודין", "0523456456", "eitan@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.f),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "פנינה שטיינברג", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/batmitzva/כריכה.jpg", "ללי גולומבק ", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/IMG_2084.jpg", "אריה גולומבק", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.d),
    new TaskDetails("/img/lacoach/תמי ויעל.jpg", "תמי ויעל זקס", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.e),
    new TaskDetails("/img/lacoach/100.jpg", "בית כנסת בן עמי", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.k),
    new TaskDetails("/img/lacoach/עמוד 33.jpg", "אביגיל בן שמעון", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/IMG_0772.jpg", "שוהם בקאל", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/1.jpg", "יעל וזאנה", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/IMG_3486.jpg", "נעמה כהן", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/כריכה.jpg", "פלינקר", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/IMG_8620.jpg", "שולמית דוידסון", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.c),
    new TaskDetails("/img/lacoach/כריכה.jpg", "אריה להב", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.m),
    new TaskDetails("/img/lacoach/כריכה ליבי.jpg", "ליבי להב", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.m),
    new TaskDetails("/img/lacoach/עמוד 3.jpg", "הודיה בן אשר", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.m),
    new TaskDetails("/img/lacoach/Untitled-1.jpg", "ברכי בת מצווה", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.m),
    new TaskDetails("/img/lacoach/עמוד 8.jpg", "טליה פלינקר", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.m),
    new TaskDetails("/img/lacoach/עמוד 1.jpg", "מוטי דוידסון", "0556789156", "gili@gmail.com", new Date('2022-08-24'), 700, OrderStatus.Completed, TypeOfOrder.m),
    new TaskDetails("/img/lacoach/עמוד 14.jpg", "אליצור דוידסון", "0523456456", "yossi@gmail.com", new Date('2021-06-25'), 250, OrderStatus.Completed, TypeOfOrder.m),
  ]);

  const [tasksFilter, setTasksFilter] = useState<TaskDetails[]>(tasks);  

  const [currentTask, setCurrentTask] = useState<TaskDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const lacoachRef = useRef<HTMLInputElement>(null);
const statusRef=useRef<HTMLInputElement>(null);
  const handleDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setTasksFilter(newTasks); 
    dispatch(addMessage({ type: 'error', text: 'המשימה נמחקה בהצלחה' }));

  };

  const handleSave = (task: TaskDetails) => {
    if (currentTask) {
      const index = tasks.findIndex(t => t === currentTask);
      const newTasks = [...tasks];
      newTasks[index] = task;
      setTasks(newTasks);
      setTasksFilter(newTasks);
      dispatch(addMessage({ type: 'success', text: 'המשימה עודכנה בהצלחה' }));

    } else {
      setTasks([...tasks, task]);
      setTasksFilter([...tasks, task]); 
    }
    setIsModalOpen(false); 
  };

  const handleEdit = (task: TaskDetails) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setCurrentTask(null);
    setIsModalOpen(true);
    dispatch(addMessage({ type: 'success', text: 'המשימה נוספה בהצלחה' }));

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const searchByStatus = () => {
    if (statusRef.current) {
      const name = statusRef.current.value.trim(); 
      const filteredTasks = tasks.filter(task => task.orderStatus.includes(name));
      setTasksFilter(filteredTasks);
    }
  };

  const searchByLacoach = () => {
    if (lacoachRef.current) {
      const name = lacoachRef.current.value.trim(); // להסיר רווחים מתחילה וסוף
      const filteredTasks = tasks.filter(task => task.theCustomerName.includes(name));
      setTasksFilter(filteredTasks);
    }
  };
    
  return (
    <div dir="rtl">

      <h1>רשימת עבודות</h1>
      <MDBInputGroup>
        <MDBInput onChange={searchByStatus} ref={statusRef} label='Search' placeholder='חיפוש לפי סטטוס'
 className='form-control'/>      
        <MDBInput onChange={searchByLacoach} ref={lacoachRef} label='Search' placeholder='חיפוש לפי לקוח' className='form-control'/>

      </MDBInputGroup>

      <button onClick={handleAddNew} className="btn btn-danger">
        הוספת עבודה
      </button>
      <ModalEdit
        taskDetails={currentTask}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
      />
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>שם הלקוח</th>
            <th scope='col'>פרטי התקשרות</th>
            <th scope='col'>תאריך צילום ותשלום</th>
            <th scope='col'>סטטוס</th>
            <th scope='col'>סוג הזמנה</th>
            <th scope='col'>עריכה</th>
            <th scope='col'>מחיקה</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {tasksFilter.map((taskDetails, index) => (
            <Task
              key={index}
              taskDetails={taskDetails}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(taskDetails)}
            />
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default TaskList;
