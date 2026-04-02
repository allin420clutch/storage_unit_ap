import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const isActive = (path) => {
        return location.pathname === path ? 'text-primary font-semibold' : 'text-muted transition-colors';
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="border-b bg-surface backdrop-blur sticky top-0 z-50">
            <div className="container flex items-center justify-between h-16">
                <Link to="/" className="text-xl font-bold text-main flex items-center gap-sm">
                    <span className="text-primary">Storage</span>Pro
                </Link>

                <div className="hidden md:flex items-center gap-lg">
                    <Link to="/" className={isActive('/')}>Dashboard</Link>
                    <Link to="/units" className={isActive('/units')}>Rent a Unit</Link>
                    <Link to="/auctions" className={isActive('/auctions')}>Auctions</Link>
                    <Link to="/payment" className={isActive('/payment')}>Pay Bill</Link>
                </div>

                <div className="flex items-center gap-md">
                    {isAuthenticated ? (
                        <>
                            <Link to="/delinquent" className="text-sm font-semibold text-danger transition-colors">Accounts Admin</Link>
                            <Link to="/admin/cameras" className="text-sm font-semibold text-danger transition-colors mr-2">Cameras Admin</Link>
                            <button onClick={handleLogout} className="text-sm font-semibold text-muted transition-colors mr-4">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="text-sm font-semibold text-muted transition-colors mr-4">Admin Login</Link>
                    )}
                    <Link to="/units" className="btn btn-primary text-sm">Find Unit</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
