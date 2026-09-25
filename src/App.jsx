import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import RecentActivity from './components/RecentActivity';
import { LoadingView, EmptyView, ErrorView } from './components/StateViews';
import UserProfileModal from './components/UserProfileModal';
import RowDetailModal from './components/RowDetailModal';
import { initialTableData, initialActivities } from './mockData';
import { PlusIcon } from 'lucide-react';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentState, setCurrentState] = useState('normal');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableData, setTableData] = useState(initialTableData);
  const [activities, setActivities] = useState(initialActivities);

  const filteredData = tableData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toString().includes(searchQuery);

    const matchesStatus =
      filterStatus === 'ALL' ||
      item.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const totalItems = filteredData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  const handleResetSearch = () => {
    setSearchQuery('');
    setFilterStatus('ALL');
    setCurrentState('normal');
  };

  const handleAddNewRecord = () => {
    const newId = 100 + tableData.length + 1;
    const newEntry = {
      id: newId,
      name: 'New Developer',
      avatarInitials: 'ND',
      email: 'satrioathallah13@gmail.com',
      role: 'Full-Stack Developer',
      status: 'Active',
      amount: '$2,500.00',
      date: new Date().toISOString().split('T')[0]
    };
    setTableData([newEntry, ...tableData]);
  };

  const renderMainContent = () => {
    if (currentState === 'loading') {
      return <LoadingView />;
    }

    if (currentState === 'error') {
      return <ErrorView onRetry={() => setCurrentState('normal')} />;
    }

    if (currentState === 'empty' || (searchQuery !== '' && totalItems === 0)) {
      return <EmptyView onReset={handleResetSearch} />;
    }

    return (
      <>
        <StatCards />

        {activeTab === 'overview' && (
          <div className="dashboard-layout-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <DataTable
                data={paginatedData}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
                onSelectRow={(row) => setSelectedRow(row)}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalItems={totalItems}
              />
            </div>
            <RecentActivity
              activities={activities}
              onRefresh={() => setActivities([...initialActivities].reverse())}
            />
          </div>
        )}

        {activeTab === 'datatable' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <DataTable
              data={paginatedData}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
              onSelectRow={(row) => setSelectedRow(row)}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
              totalItems={totalItems}
            />
          </div>
        )}

        {activeTab === 'activity' && (
          <RecentActivity
            activities={activities}
            onRefresh={() => setActivities([...initialActivities].reverse())}
          />
        )}

        {activeTab === 'settings' && (
          <div className="card-panel">
            <div className="panel-header">
              <div className="panel-title">System Settings</div>
            </div>
            <div className="profile-field-group">
              <div className="profile-field-label">Environment</div>
              <div className="profile-field-value">Production Cluster Node #1</div>
            </div>
            <div className="profile-field-group">
              <div className="profile-field-label">Design Pattern</div>
              <div className="profile-field-value">Brutalist Neo-Editorial (Portfolio Strict)</div>
            </div>
            <div className="profile-field-group">
              <div className="profile-field-label">API Rate Limit</div>
              <div className="profile-field-value">10,000 requests / min</div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="dashboard-app">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onOpenProfile={() => setIsProfileOpen(true)}
        dataCount={tableData.length}
      />

      <div className="main-wrapper">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentState={currentState}
          setCurrentState={setCurrentState}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        <main className="content-area">
          <div className="dashboard-title-bar">
            <div className="title-group">
              <h1>
                {activeTab === 'overview' && 'System Overview'}
                {activeTab === 'datatable' && 'Database Records'}
                {activeTab === 'activity' && 'Audit Log & Activity'}
                {activeTab === 'settings' && 'Platform Settings'}
              </h1>
              <p>Welcome back, Satrio. Here is your platform metrics performance.</p>
            </div>

            <div className="action-group">
              <button className="btn-brutal" onClick={handleAddNewRecord}>
                <PlusIcon size={16} />
                Add Record
              </button>
            </div>
          </div>

          {renderMainContent()}
        </main>
      </div>

      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <RowDetailModal
        row={selectedRow}
        onClose={() => setSelectedRow(null)}
      />
    </div>
  );
}
