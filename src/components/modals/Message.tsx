import React from "react";
import Header from './message/Header';
import Content from './message/Content';

interface MessageProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Message: React.FC<MessageProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-md p-6 mx-auto transition-all duration-100 ease-in-out transform scale-100 bg-white rounded-lg shadow-2xl">
        
        <Header isOpen={isOpen} closeModal={closeModal} />
        <Content />

      </div>
    </div>
  );
};

export default Message;

