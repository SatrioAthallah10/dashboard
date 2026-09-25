import React from 'react';
import {
  LayoutDashboardIcon,
  DatabaseIcon,
  ActivityIcon,
  UserIcon,
  SettingsIcon,
  XIcon
} from './Icons';

export default function Sidebar({
  activeTab,
  setActiveTab,
  mobileOpen,
  setMobileOpen,
  onOpenProfile,
  dataCount
}) {
  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboardIcon },
    { id: 'datatable', label: 'Data Table', icon: DatabaseIcon, badge: dataCount },
    { id: 'activity', label: 'Recent Activity', icon: ActivityIcon },
    { id: 'profile', label: 'User Profile', icon: UserIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  const handleNavClick = (id) => {
    if (id === 'profile') {
      onOpenProfile();
    } else {
      setActiveTab(id);
    }
    setMobileOpen(false);
  };

  return (
    <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <div className="brand-logo" onClick={() => setActiveTab('overview')}>
          <div className="logo-symbol">P</div>
          <span>FOLIO</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => setMobileOpen(false)}
          aria-label="Close Sidebar"
        >
          <XIcon size={18} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-title">Navigation</div>
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = activeTab === item.id;
          return (
            <div
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <div className="nav-item-left">
                <IconComp size={18} />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span className="nav-badge">{item.badge}</span>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user-card" onClick={onOpenProfile}>
          <div className="avatar">
            <span>SA</span>
          </div>
          <div className="user-info">
            <span className="user-name">Satrio Athallah</span>
            <span className="user-role">Lead Architect</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
