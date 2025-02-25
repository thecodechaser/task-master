import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskTable } from './components/TaskTable';
import { KanbanBoard } from './components/KanbanBoard';
import { LayoutGrid, Table } from 'lucide-react';

function App() {
  const [view, setView] = useState<'table' | 'kanban'>('table');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex space-x-1 p-4">
              <button
                onClick={() => setView('table')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  view === 'table'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Table size={20} />
                Task List
              </button>
              <button
                onClick={() => setView('kanban')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  view === 'kanban'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LayoutGrid size={20} />
                Kanban Board
              </button>
            </div>
          </div>
          
          {view === 'table' ? <TaskTable /> : <KanbanBoard />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;