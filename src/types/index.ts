
// Define common types for the application

export type BusinessUnit = {
  id: string;
  name: string;
  description?: string;
  color?: string;
};

export type AgentSource = {
  id: string;
  name: string;
  description?: string;
};

export type Agent = {
  id: string;
  name: string;
  description: string;
  businessUnitId: string;
  sourceId: string;
  status: 'active' | 'inactive' | 'maintenance';
  createdAt: string;
  lastActive?: string;
  performance?: {
    successRate: number;
    responseTime: number;
    completedTasks: number;
  };
  type: string;
  version: string;
  owner: string;
};

export type DashboardStats = {
  totalAgents: number;
  activeAgents: number;
  businessUnits: number;
  sources: number;
};
