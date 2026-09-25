import React from 'react';
import { XIcon } from './Icons';

export default function UserProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">User Profile Details</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <XIcon size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="profile-hero">
            <div className="profile-avatar-lg">SA</div>
            <div className="profile-hero-info">
              <h2>Satrio Athallah</h2>
              <p>Senior Full-Stack Engineer</p>
            </div>
          </div>

          <div className="profile-stats-row">
            <div className="profile-stat-box">
              <div className="profile-stat-num">48</div>
              <div className="profile-stat-label">Projects</div>
            </div>
            <div className="profile-stat-box">
              <div className="profile-stat-num">99.9%</div>
              <div className="profile-stat-label">Uptime</div>
            </div>
            <div className="profile-stat-box">
              <div className="profile-stat-num">2.4k</div>
              <div className="profile-stat-label">Commits</div>
            </div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Email Address</div>
            <div className="profile-field-value">satrioathallah13@gmail.com</div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Organization Role</div>
            <div className="profile-field-value">Lead System Architect & Admin</div>
          </div>

          <div className="profile-field-group">
            <div className="profile-field-label">Location</div>
            <div className="profile-field-value">Jakarta, Indonesia</div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button className="btn-brutal" style={{ flex: 1, justifyContent: 'center' }} onClick={onClose}>
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
