import React, { Component } from 'react';
import TextEditor from './TextEditor';
import Modal from '../Modal';

function Annotate({ top }) {
  return (
    <Modal top={top}>
      <TextEditor />
    </Modal>
  );
}

export default Annotate;
