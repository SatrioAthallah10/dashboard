import React, { useState, useEffect, useRef } from 'react';
import {
  SearchIcon,
  BellIcon,
  MenuIcon,
  XIcon
} from './Icons';

export default function Header({
  searchQuery,
  setSearchQuery,
  currentState,
  setCurrentState,
  mobileOpen,
  setMobileOpen,
  onOpenProfile,
  notifications = [],
  setNotifications
}) {
  const [notifOpen, setNotifOpen] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAllRead = () => {
    if (!setNotifications) return;
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleToggleRead = (id) => {
    if (!setNotifications) return;
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const handleClearAll = () => {
    if (!setNotifications) return;
    setNotifications([]);
  };

  const getNotifIcon = (type) => {
    switch (type) {
      case 'security':
        return '🔒';
      case 'payment':
        return '💳';
      case 'user':
        return '👤';
      default:
        return '⚡';
    }
  };

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

        <div className="notification-wrapper" ref={dropdownRef}>
          <button
            className="icon-btn"
            title="Notifications"
            onClick={() => setNotifOpen(!notifOpen)}
          >
            <BellIcon size={18} />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          {notifOpen && (
            <div className="notification-dropdown">
              <div className="notif-header">
                <div className="notif-title">
                  <span>Notifications</span>
                  {unreadCount > 0 && (
                    <span className="nav-badge" style={{ fontSize: '0.7rem' }}>
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button className="notif-mark-read" onClick={handleMarkAllRead}>
                    Mark all read
                  </button>
                )}
              </div>

              <div className="notif-list">
                {notifications.length === 0 ? (
                  <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    No notifications
                  </div>
                ) : (
                  notifications.map((item) => (
                    <div
                      key={item.id}
                      className={`notif-item ${!item.read ? 'unread' : ''}`}
                      onClick={() => handleToggleRead(item.id)}
                    >
                      <div className="notif-icon">{getNotifIcon(item.type)}</div>
                      <div className="notif-content">
                        <div className="notif-item-title">{item.title}</div>
                        <div className="notif-item-desc">{item.desc}</div>
                        <div className="notif-item-time">{item.time}</div>
                      </div>
                      {!item.read && <div className="notif-unread-dot"></div>}
                    </div>
                  ))
                )}
              </div>

              {notifications.length > 0 && (
                <div className="notif-footer">
                  <button className="notif-clear-btn" onClick={handleClearAll}>
                    Clear all notifications
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

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
