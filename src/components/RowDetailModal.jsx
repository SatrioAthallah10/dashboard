import React from 'react';
import { XIcon } from './Icons';

export default function RowDetailModal({ row, onClose }) {
  if (!row) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">Record #{row.id} Summary</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <XIcon size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="profile-hero">
            <div className="profile-avatar-lg" style={{ width: '60px', height: '60px', fontSize: '1.2rem' }}>
              {row.avatarInitials}
            </div>
            <div className="profile-hero-info">
              <h2>{row.name}</h2>
              <p>{row.email}</p>
            </div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Assigned Role</div>
            <div className="profile-field-value">{row.role}</div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Transaction Amount</div>
            <div className="profile-field-value">{row.amount}</div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Status</div>
            <div className="profile-field-value" style={{ textTransform: 'capitalize' }}>
              {row.status}
            </div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Timestamp</div>
            <div className="profile-field-value">{row.date}</div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button className="btn-brutal" style={{ flex: 1, justifyContent: 'center' }} onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
