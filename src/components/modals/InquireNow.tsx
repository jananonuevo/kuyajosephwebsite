import React, { useState, type FormEvent } from "react";
import Content from "./inquirenow/Content";
import Header from "./inquirenow/Header";

interface InquireNowProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InquireNow: React.FC<InquireNowProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-md p-6 mx-auto transition-all duration-100 ease-in-out transform scale-100 bg-white rounded-lg shadow-2xl">
        
        <Header isOpen={isOpen} closeModal={closeModal} />
        <Content isOpen={isOpen} closeModal={closeModal} />

      </div>
    </div>
  );
};

export default InquireNow;