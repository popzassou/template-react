import { useState } from 'react';
import Button from '@/components/atoms/Button';
import { confirmLogout } from '@/utils/helpers/SwalHelpers'; // pastikan utils ini nanti dibikin

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    confirmLogout(() => {
      localStorage.removeItem('user');
      window.location.replace('/login');
    });
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold text-slate-800">Panel</h1>

        <div className="relative">
          <Button onClick={toggleProfileMenu} className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 transition focus:outline-none p-0 flex items-center justify-center text-slate-600">
            👤
          </Button>

          <div className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-slate-100 py-2 ${isMenuOpen ? '' : 'hidden'}`}>
            <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">
              Profile
            </a>
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
