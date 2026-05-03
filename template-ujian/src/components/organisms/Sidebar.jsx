import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-indigo-900 text-white min-h-screen transition-all duration-300 w-20 lg:w-64 shadow-xl">
      <div className="flex justify-between items-center p-4 border-b border-indigo-800">
        <span className="text-2xl font-bold hidden lg:block">Admin</span>
      </div>

      <nav className="p-4 space-y-2">
        {/* Tombol Dashboard */}
        <NavLink to="/admin/dashboard" className={({ isActive }) => `flex items-center space-x-2 px-4 py-2 rounded transition ${isActive ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}>
          <span className="text-lg">🏠</span>
          <span className="menu-text hidden lg:inline">Dashboard</span>
        </NavLink>

        {/* ⬇️ NANTI COPAS MENU TAMBAHAN UJIAN DI BAWAH SINI ⬇️ */}

        {/*
        <NavLink to="/admin/master-data" className={({ isActive }) => `flex items-center space-x-2 px-4 py-2 rounded transition ${isActive ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}>
          <span className="text-lg">📁</span>
          <span className="menu-text hidden lg:inline">Master Data</span>
        </NavLink>
        */}
      </nav>
    </aside>
  );
};

export default Sidebar;
