export const initialTableData = [
  { id: 101, name: 'Alex Rivera', avatarInitials: 'AR', email: 'satrioathallah13@gmail.com', role: 'UI/UX Designer', status: 'Active', amount: '$1,250.00', date: '2026-09-25' },
  { id: 102, name: 'Sophia Chen', avatarInitials: 'SC', email: 'satrioathallah13@gmail.com', role: 'Product Manager', status: 'Active', amount: '$3,400.00', date: '2026-09-24' },
  { id: 103, name: 'Marcus Vance', avatarInitials: 'MV', email: 'satrioathallah13@gmail.com', role: 'Backend Engineer', status: 'Pending', amount: '$890.00', date: '2026-09-24' },
  { id: 104, name: 'Elena Rostova', avatarInitials: 'ER', email: 'satrioathallah13@gmail.com', role: 'Data Analyst', status: 'Completed', amount: '$4,150.00', date: '2026-09-23' },
  { id: 105, name: 'Liam O\'Connor', avatarInitials: 'LO', email: 'satrioathallah13@gmail.com', role: 'DevOps Lead', status: 'Failed', amount: '$720.00', date: '2026-09-23' },
  { id: 106, name: 'Amara Patel', avatarInitials: 'AP', email: 'satrioathallah13@gmail.com', role: 'Frontend Developer', status: 'Active', amount: '$2,100.00', date: '2026-09-22' },
  { id: 107, name: 'David Kim', avatarInitials: 'DK', email: 'satrioathallah13@gmail.com', role: 'Security Engineer', status: 'Pending', amount: '$1,850.00', date: '2026-09-21' },
  { id: 108, name: 'Chloe Dubois', avatarInitials: 'CD', email: 'satrioathallah13@gmail.com', role: 'Content Strategist', status: 'Completed', amount: '$950.00', date: '2026-09-20' },
  { id: 109, name: 'Tariq Al-Mansoor', avatarInitials: 'TA', email: 'satrioathallah13@gmail.com', role: 'QA Automation', status: 'Active', amount: '$1,400.00', date: '2026-09-19' },
  { id: 110, name: 'Grace Hopper', avatarInitials: 'GH', email: 'satrioathallah13@gmail.com', role: 'System Architect', status: 'Completed', amount: '$5,000.00', date: '2026-09-18' },
  { id: 111, name: 'Carlos Mendez', avatarInitials: 'CM', email: 'satrioathallah13@gmail.com', role: 'Support Specialist', status: 'Failed', amount: '$420.00', date: '2026-09-17' },
  { id: 112, name: 'Zoe Zhang', avatarInitials: 'ZZ', email: 'satrioathallah13@gmail.com', role: 'Cloud Architect', status: 'Active', amount: '$3,800.00', date: '2026-09-16' }
];

export const initialActivities = [
  { id: 1, user: 'Satrio Athallah', action: 'deployed production v2.4 build to US-East cluster', timestamp: '10 minutes ago', type: 'system' },
  { id: 2, user: 'Sophia Chen', action: 'approved quarterly budget report for Q4', timestamp: '45 minutes ago', type: 'user' },
  { id: 3, user: 'Marcus Vance', action: 'submitted new pull request #142 for Auth service', timestamp: '2 hours ago', type: 'user' },
  { id: 4, user: 'Security Bot', action: 'blocked suspicious IP address 192.168.1.104', timestamp: '3 hours ago', type: 'security' },
  { id: 5, user: 'Stripe Gateway', action: 'processed subscription payout of $12,450.00', timestamp: '5 hours ago', type: 'payment' }
];

export const initialNotifications = [
  { id: 1, title: 'New System Build', desc: 'Production v2.4 build successfully deployed', time: '5m ago', read: false, type: 'system' },
  { id: 2, title: 'Security Alert', desc: 'Blocked unauthorized login attempt from 192.168.1.104', time: '20m ago', read: false, type: 'security' },
  { id: 3, title: 'Payout Received', desc: 'Stripe processed subscription payout of $12,450.00', time: '1h ago', read: false, type: 'payment' },
  { id: 4, title: 'Team Update', desc: 'Sophia Chen updated Q4 roadmap milestones', time: '3h ago', read: true, type: 'user' }
];
