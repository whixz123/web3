import React, { useState } from 'react';
import { Wallet, Loader2 } from 'lucide-react';

interface WalletOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const walletOptions: WalletOption[] = [
  { id: 'internet-identity', name: 'Internet Identity', icon: <Wallet className="w-6 h-6" /> },
  { id: 'metamask', name: 'MetaMask', icon: <Wallet className="w-6 h-6" /> },
  { id: 'plug', name: 'Plug Wallet', icon: <Wallet className="w-6 h-6" /> },
];

export function WalletConnect() {
  const [connecting, setConnecting] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async (walletId: string) => {
    try {
      setError(null);
      setConnecting(walletId);
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setConnecting(null);
      setConnected(true);
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      setConnecting(null);
    }
  };

  const handleDisconnect = () => {
    setConnected(false);
  };

  if (connected) {
    return (
      <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-green-700 dark:text-green-300">Wallet Connected</span>
        <button
          onClick={handleDisconnect}
          className="ml-2 text-sm text-red-600 dark:text-red-400 hover:underline"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
        Connect Wallet
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        Choose your preferred wallet to connect to CFEP
      </p>
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      <div className="space-y-2">
        {walletOptions.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => handleConnect(wallet.id)}
            disabled={connecting !== null}
            className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              {wallet.icon}
              <span className="font-medium">{wallet.name}</span>
            </div>
            {connecting === wallet.id ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}