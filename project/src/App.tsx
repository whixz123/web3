import React, { useState } from 'react';
import { WalletConnect } from './components/WalletConnect';
import { Dashboard } from './components/Dashboard';
import { CreateEscrow } from './components/CreateEscrow';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                CFEP
              </h1>
            </div>
            <div className="flex items-center">
              <WalletConnect />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Dashboard />
          </div>
          <div>
            <CreateEscrow />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;