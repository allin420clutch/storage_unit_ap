import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-border bg-surface mt-auto py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-main mb-4">StoragePro</h3>
                        <p className="text-muted text-sm">
                            Secure, accessible, and affordable storage solutions for everyone.
                            Manage your units and payments online with ease.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-main mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><a href="/units" className="hover:text-primary">Available Units</a></li>
                            <li><a href="/auctions" className="hover:text-primary">Auctions</a></li>
                            <li><a href="/payment" className="hover:text-primary">Pay Bill</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-main mb-4">Contact</h4>
                        <p className="text-muted text-sm">
                            123 Storage Lane<br />
                            Warehouse City, ST 12345<br />
                            (555) 123-4567
                        </p>
                    </div>
                </div>
                <div className="border-t border-border pt-8 text-center text-sm text-muted">
                    &copy; {new Date().getFullYear()} StoragePro. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
