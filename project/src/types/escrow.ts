export interface Escrow {
  id: string;
  client: string;
  freelancer: string;
  amount: string;
  status: 'pending' | 'active' | 'completed' | 'disputed';
  chainId: string;
  createdAt: number;
}

export interface User {
  id: string;
  address: string;
  reputation: number;
  completedJobs: number;
  totalEarnings: string;
}