import { useState } from 'react';

type LogoutModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function LogoutModal({ onConfirm, onCancel }: LogoutModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Are you sure you want to logout?</h2>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
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
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }
        .modal-actions button {
          margin: 0 1rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
