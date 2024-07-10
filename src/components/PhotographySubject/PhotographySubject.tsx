import React, { FC, useState } from 'react';
import './PhotographySubject.scss';
import { PhotographySubjectDetails } from '../../Models/PhotographySubjectDetails.model';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import PhotographySubjectModal from '../PhotographySubjectModal/PhotographySubjectModal';

interface PhotographySubjectProps {
  photographySubjectDetails: PhotographySubjectDetails;
}

const PhotographySubject: FC<PhotographySubjectProps> = ({ photographySubjectDetails }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = (id: string) => {
    navigate(`/photos/${id}`);
  };

  return (
    <>
      <MDBCard className='h-100' onClick={toggleModal}>
        <div className='bg-image hover-overlay'>
          <MDBCardImage
            src={photographySubjectDetails.imageUrl}
            alt='...'
            position='top'
            className='img-fluid'
          />
          <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
        </div>
        <MDBCardBody>
          <MDBCardTitle>
            <h5 className="card-title">{photographySubjectDetails.name}</h5>
          </MDBCardTitle>
          <MDBCardText>
            <p className="card-text">{photographySubjectDetails.details}</p>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className='text-muted' onClick={() => handleClick(photographySubjectDetails.name)}>
            לכל התמונות
          </small>
        </MDBCardFooter>
      </MDBCard>

      
      <PhotographySubjectModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        photographySubjectDetails={photographySubjectDetails}
      />
    </>
  );
};

export default PhotographySubject;
