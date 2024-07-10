import React, { FC } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { PhotographySubjectDetails } from '../../Models/PhotographySubjectDetails.model';
import './PhotographySubjectModal.scss';

interface PhotographySubjectModalProps {
  isOpen: boolean;
  toggle: () => void;
  photographySubjectDetails: PhotographySubjectDetails;
}

const PhotographySubjectModal: FC<PhotographySubjectModalProps> = ({ isOpen, toggle, photographySubjectDetails }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="photography-subject-modal">
      <ModalHeader toggle={toggle}>{photographySubjectDetails.name}</ModalHeader>
      <ModalBody>
        <img
          src={photographySubjectDetails.imageUrl}
          alt={photographySubjectDetails.name}
          className="img-fluid"
        />
        <p>{photographySubjectDetails.details}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PhotographySubjectModal;
