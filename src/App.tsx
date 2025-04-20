import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Button } from './components/ui/Button';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Button label="Click Me" onClick={() => alert('Clicked!')} />
      </div>
    </QueryClientProvider>
  );
}

export default App;