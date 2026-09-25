import React, { useState } from 'react';
import { FilterIcon } from './Icons';

export default function DataTable({
  data,
  selectedRows,
  setSelectedRows,
  onSelectRow,
  filterStatus,
  setFilterStatus
}) {
  const [sortField, setSortField] = useState('id');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    if (aVal < bVal) return sortAsc ? -1 : 1;
    if (aVal > bVal) return sortAsc ? 1 : -1;
    return 0;
  });

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'active';
      case 'pending':
        return 'pending';
      case 'failed':
        return 'failed';
      default:
        return 'completed';
    }
  };

  return (
    <div className="card-panel">
      <div className="panel-header">
        <div className="panel-title">
          <span>Transactions & Records</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FilterIcon size={16} />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              border: '2px solid var(--border-color)',
              backgroundColor: '#ffffff',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="ALL">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>
                <input
                  type="checkbox"
                  checked={data.length > 0 && selectedRows.length === data.length}
                  onChange={handleSelectAll}
                  style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                />
              </th>
              <th className="sortable" onClick={() => handleSort('id')}>
                ID {sortField === 'id' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th className="sortable" onClick={() => handleSort('name')}>
                User {sortField === 'name' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th className="sortable" onClick={() => handleSort('role')}>
                Role {sortField === 'role' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th className="sortable" onClick={() => handleSort('status')}>
                Status {sortField === 'status' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th className="sortable" onClick={() => handleSort('amount')}>
                Amount {sortField === 'amount' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th className="sortable" onClick={() => handleSort('date')}>
                Date {sortField === 'date' ? (sortAsc ? '↑' : '↓') : ''}
              </th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => {
              const isSelected = selectedRows.includes(row.id);
              return (
                <tr key={row.id} style={{ backgroundColor: isSelected ? '#f5f5f5' : 'transparent' }}>
                  <td>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectOne(row.id)}
                      style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                  </td>
                  <td style={{ fontWeight: 700 }}>#{row.id}</td>
                  <td>
                    <div className="table-user">
                      <div className="table-user-avatar">
                        {row.avatarInitials}
                      </div>
                      <div className="table-user-info">
                        <span className="table-user-name">{row.name}</span>
                        <span className="table-user-email">{row.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{row.role}</td>
                  <td>
                    <span className={`status-pill ${getStatusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: 700 }}>{row.amount}</td>
                  <td>{row.date}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      className="btn-brutal-secondary"
                      style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                      onClick={() => onSelectRow(row)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
