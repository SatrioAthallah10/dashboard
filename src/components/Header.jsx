import React from 'react';
import {
  SearchIcon,
  BellIcon,
  MenuIcon,
  XIcon,
  UserIcon
} from './Icons';

export default function Header({
  searchQuery,
  setSearchQuery,
  currentState,
  setCurrentState,
  mobileOpen,
  setMobileOpen,
  onOpenProfile
}) {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Sidebar"
        >
          <MenuIcon size={20} />
        </button>

        <div className="search-container">
          <SearchIcon className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Search records, users, activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              <XIcon size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="header-controls">
        <div className="state-switcher">
          <button
            className={`state-btn ${currentState === 'normal' ? 'active' : ''}`}
            onClick={() => setCurrentState('normal')}
          >
            Normal
          </button>
          <button
            className={`state-btn ${currentState === 'loading' ? 'active-loading' : ''}`}
            onClick={() => setCurrentState('loading')}
          >
            Loading
          </button>
          <button
            className={`state-btn ${currentState === 'empty' ? 'active-empty' : ''}`}
            onClick={() => setCurrentState('empty')}
          >
            Empty
          </button>
          <button
            className={`state-btn ${currentState === 'error' ? 'active-error' : ''}`}
            onClick={() => setCurrentState('error')}
          >
            Error
          </button>
        </div>

        <button className="icon-btn" title="Notifications">
          <BellIcon size={18} />
          <span className="notification-dot"></span>
        </button>

        <button className="header-user-btn" onClick={onOpenProfile}>
          <div className="avatar" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>
            <span>SA</span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Profile</span>
        </button>
      </div>
    </header>
  );
}
