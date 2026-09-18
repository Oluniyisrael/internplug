// UseruserLayout.jsx
import { useState } from "react";
import { Link, useLocation, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { Menu, X, ChevronDown, Bell, Search, Home, Wrench, MessageSquare, Settings, LogOut, FileText, CreditCard } from "lucide-react";
import Logo from "../components/logo/Logo";

export default function UserPageLayout({ }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user } = useOutletContext()

  const location = useLocation();
  const navigate = useNavigate();

  const notifications = user.notifications;

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getInitials = () => {
    if (!user?.firstName) return "U";
    return `${user.firstName[0]}${user.lastName ? user.lastName[0] : ""}`.toUpperCase();
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("token");
    navigate("/login");
  };

  const userRoutes = [
    { name: "Dashboard", icon: Home, link: "/user/dashboard" },
    { name: "My Requests", icon: Wrench, link: "/user/requests" },
    { name: "Find Engineers", icon: Search, link: "/user/find-engineers" },
    { name: "Messages", icon: MessageSquare, link: "/user/messages" },
    { name: "Payments", icon: CreditCard, link: "/user/payments" },
    { name: "Settings", icon: Settings, link: "/user/settings" },
  ];

  return (
    <div className="flex h-screen bg-[#0a0712] font-sans text-white overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-full sm:max-w-[280px] transform bg-[#100b1d] border-r border-white/10 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col shadow-2xl`}>
        {/* Logo */}
        <div className="flex items-center justify-between p-6 h-20 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <Logo />
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
          {userRoutes.map((item) => {
            const isActive = location.pathname === item.link || (location.pathname.includes(item.link) && item.link !== "/user/dashboard");

            return (
              <Link key={item.name} to={item.link} onClick={() => setIsSidebarOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm duration-200 ${isActive ? "bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white shadow-lg shadow-[#0080ff]/30" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button type="button" onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-medium">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-[#100b1d] border-b border-white/10 flex items-center justify-between px-6 lg:px-10 z-10">
          <div className="flex items-center gap-4">
            <button type="button" onClick={toggleSidebar} className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center text-sm text-gray-400">
              <Link to="/user/dashboard" className="hover:text-white transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white font-medium capitalize">
                {location.pathname.split("/").pop().replace("-", " ") || "Dashboard"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">


            {/* Notifications */}
            <div className="relative">
              <button type="button" onClick={() => setShowNotifications(!showNotifications)} className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${showNotifications ? "bg-[#0080ff]/20 text-[#0080ff]" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#100b1d]"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl p-4 z-50">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-sm text-white">Notifications</h4>
                    <button type="button" className="text-xs text-[#0080ff] hover:underline">
                      Mark all read
                    </button>
                  </div>

                  <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                    {notifications.length > 0 ? (
                      notifications.map((notif) => (
                        <div key={notif.id} className={`p-3 rounded-lg text-sm transition-colors ${notif.isRead ? "bg-white/5" : "bg-[#0080ff]/10 border-l-2 border-[#0080ff]"}`}>
                          <p className="font-semibold text-white">{notif.title}</p>
                          <p className="text-xs mt-1 text-gray-400">{notif.message}</p>
                          <span className="text-xs text-gray-500 mt-2 block">
                            {new Date(notif.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-center py-4 text-gray-500">No new notifications</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <span className="border-r border-white/10 h-8" />

            {/* Profile Dropdown */}
            <div className="relative">
              <button type="button" onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-3 hover:bg-white/5 p-1.5 rounded-xl transition-all pr-3">
                <div className="w-9 h-9 bg-gradient-to-r from-[#0080ff] to-[#0066cc] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {getInitials()}
                </div>
                <span className="hidden md:block text-sm font-medium text-white truncate">
                  {user?.firstName || "User"}
                </span>
                <ChevronDown size={14} className="hidden md:block text-gray-400" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl py-2 z-50">
                  <div className="px-4 py-3 border-b border-white/10 mb-1">
                    <p className="text-sm font-bold text-white">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-400">{user?.email}</p>
                  </div>
                  <Link to="/user/profile" onClick={() => setShowProfileMenu(false)} className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                    View Profile
                  </Link>
                  <Link to="/user/settings" onClick={() => setShowProfileMenu(false)} className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                    Settings
                  </Link>
                  <button type="button" onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        {location.pathname === "/user/find-engineers" ? (
          // Full-bleed, no scroll, no padding, map page manages its own layout
          <main className="flex-1 overflow-hidden bg-[#0a0712]">
            <Outlet context={{ user }} />
          </main>
        ) : (
          <main className="flex-1 overflow-y-auto bg-[#0a0712] p-4 lg:p-8 flex flex-col custom-scrollbar">
            <div className="max-w-7xl mx-auto w-full flex-1">
              <Outlet context={{ user }} />
            </div>
            <footer className="max-w-7xl mx-auto w-full mt-12 pt-6 border-t border-white/10 text-xs text-gray-500">
              <p>© {new Date().getFullYear()} NIWTS. All rights reserved.</p>
            </footer>
          </main>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 128, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 128, 255, 0.5);
        }
      `}</style>
    </div>
  );
}