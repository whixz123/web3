import React from 'react';
import { BarChart3, Clock, DollarSign, Users } from 'lucide-react';

const stats = [
  { name: 'Active Escrows', value: '12', icon: Clock },
  { name: 'Total Value Locked', value: '$45,231', icon: DollarSign },
  { name: 'Users', value: '2,300', icon: Users },
  { name: 'Completed Jobs', value: '1,205', icon: BarChart3 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <Icon className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Recent Escrows
        </h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Project #{i}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Created 2 days ago
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">
                  {(Math.random() * 10).toFixed(2)} ETH
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Active
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}