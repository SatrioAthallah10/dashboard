import React from 'react';
import { InboxIcon, AlertCircleIcon, RefreshIcon } from './Icons';

export function LoadingView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div className="stats-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-box skeleton-text" style={{ width: '40%' }}></div>
            <div className="skeleton-box skeleton-text" style={{ width: '70%', height: '32px' }}></div>
            <div className="skeleton-box skeleton-text" style={{ width: '50%' }}></div>
          </div>
        ))}
      </div>

      <div className="card-panel">
        <div className="skeleton-box skeleton-text" style={{ width: '30%', height: '24px' }}></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="skeleton-box skeleton-text" style={{ width: '100%', height: '40px', marginBottom: '12px' }}></div>
        ))}
      </div>
    </div>
  );
}

export function EmptyView({ onReset }) {
  return (
    <div className="state-container">
      <div className="state-illustration">
        <InboxIcon size={40} />
      </div>
      <div className="state-title">No Matching Data Found</div>
      <div className="state-desc">
        We couldn't find any results matching your search terms or active status filters.
      </div>
      {onReset && (
        <button className="btn-brutal" onClick={onReset}>
          Reset Search & Filters
        </button>
      )}
    </div>
  );
}

export function ErrorView({ onRetry }) {
  return (
    <div className="state-container" style={{ borderColor: '#c5221f' }}>
      <div className="state-illustration" style={{ backgroundColor: '#fce8e6', borderColor: '#c5221f', color: '#c5221f' }}>
        <AlertCircleIcon size={40} />
      </div>
      <div className="state-title" style={{ color: '#c5221f' }}>
        Failed to Connect to Server
      </div>
      <div className="state-desc">
        An error occurred while fetching the latest dataset from the backend node. Please verify your connection or try again.
      </div>
      {onRetry && (
        <button
          className="btn-brutal"
          style={{ backgroundColor: '#c5221f', borderColor: '#c5221f' }}
          onClick={onRetry}
        >
          <RefreshIcon size={16} />
          Retry Connection
        </button>
      )}
    </div>
  );
}
