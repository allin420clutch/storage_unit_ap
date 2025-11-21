import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-primary font-semibold' : 'text-muted hover:text-main';
    };

    return (
        <nav className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-50">
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
                    <Link to="/delinquent" className="text-sm text-muted hover:text-danger transition-colors">Admin</Link>
                    <Link to="/units" className="btn btn-primary text-sm">Find Unit</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
