import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

type LogoutModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function LogoutModal({ onConfirm, onCancel }: LogoutModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal flex-col flex justify-center items-center">
        <HelpCircle size={48} className="text-red-500 mb-4 " />
        <h2 className="text-xl font-semibold">Are you sure you want to logout?</h2>
        <div className="modal-actions mt-6">
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200 ml-4"
          >
            No
          </button>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background-color: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        .modal-actions button {
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  );
}
