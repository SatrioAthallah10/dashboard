import React from 'react';
import { ActivityIcon, RefreshIcon } from './Icons';

export default function RecentActivity({ activities, onRefresh }) {
  return (
    <div className="card-panel">
      <div className="panel-header">
        <div className="panel-title">
          <ActivityIcon size={20} />
          <span>Recent Activity</span>
        </div>
        <button
          className="btn-brutal-secondary"
          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
          onClick={onRefresh}
        >
          <RefreshIcon size={14} />
          Refresh
        </button>
      </div>

      <div className="activity-list">
        {activities.map((item) => (
          <div key={item.id} className="activity-item">
            <div className="activity-icon">
              {item.type === 'security' && '🔒'}
              {item.type === 'user' && '👤'}
              {item.type === 'payment' && '💳'}
              {item.type === 'system' && '⚡'}
            </div>
            <div className="activity-details">
              <div className="activity-text">
                <strong>{item.user}</strong> {item.action}
              </div>
              <div className="activity-time">{item.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
