import React from 'react';
import {
  DollarSignIcon,
  UsersIcon,
  ActivityIcon,
  ServerIcon,
  TrendingUpIcon,
  TrendingDownIcon
} from './Icons';

export default function StatCards({ statsData }) {
  const defaultStats = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$128,450.00',
      change: '+14.2%',
      isPositive: true,
      icon: DollarSignIcon,
      bars: [40, 65, 55, 80, 70, 95, 85, 100]
    },
    {
      id: 2,
      title: 'Active Users',
      value: '24,892',
      change: '+8.5%',
      isPositive: true,
      icon: UsersIcon,
      bars: [30, 45, 60, 50, 75, 70, 85, 90]
    },
    {
      id: 3,
      title: 'Conversion Rate',
      value: '3.42%',
      change: '-0.8%',
      isPositive: false,
      icon: ActivityIcon,
      bars: [80, 75, 65, 70, 55, 60, 50, 45]
    },
    {
      id: 4,
      title: 'System Uptime',
      value: '99.98%',
      change: '+0.02%',
      isPositive: true,
      icon: ServerIcon,
      bars: [95, 98, 99, 97, 100, 99, 100, 100]
    }
  ];

  const data = statsData || defaultStats;

  return (
    <div className="stats-grid">
      {data.map((stat) => {
        const IconComp = stat.icon;
        return (
          <div key={stat.id} className="stat-card">
            <div className="stat-header">
              <div className="stat-icon-wrapper">
                <IconComp size={22} />
              </div>
              <span className={`stat-badge ${stat.isPositive ? 'positive' : 'negative'}`}>
                {stat.isPositive ? <TrendingUpIcon size={14} /> : <TrendingDownIcon size={14} />}
                {stat.change}
              </span>
            </div>

            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
            </div>

            <div className="mini-chart">
              {stat.bars.map((height, idx) => (
                <div
                  key={idx}
                  className="chart-bar"
                  style={{ height: `${height}%`, opacity: 0.3 + (height / 100) * 0.7 }}
                ></div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
