import React from 'react';
import { ClipboardList } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 px-8 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ClipboardList size={32} />
          <h1 className="text-2xl font-bold">TaskMaster Pro</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-purple-200 transition-colors">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-200 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-200 transition-colors">
                Team
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};