import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
                <div className="container relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Secure Space for <br />
                            <span className="text-primary">What Matters Most</span>
                        </h1>
                        <p className="text-xl text-muted mb-8">
                            Premium storage solutions with 24/7 access, climate control, and top-tier security.
                            Manage everything online.
                        </p>
                        <div className="flex gap-md">
                            <Link to="/units" className="btn btn-primary text-lg px-8">
                                Find a Unit
                            </Link>
                            <Link to="/auctions" className="btn btn-outline text-lg px-8">
                                View Auctions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-surface/30">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose StoragePro?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                        <div className="card">
                            <div className="text-primary text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold mb-2">Secure & Safe</h3>
                            <p className="text-muted">24/7 video surveillance and gated access codes for every customer.</p>
                        </div>
                        <div className="card">
                            <div className="text-primary text-4xl mb-4">📍</div>
                            <h3 className="text-xl font-bold mb-2">Our Location</h3>
                            <div className="w-full h-24 mt-2 rounded overflow-hidden border border-border">
                                <iframe
                                    title="Google Maps Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948656111!2d-73.98773138459363!3d40.75797467932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412122879!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="text-primary text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-bold mb-2">Online Management</h3>
                            <p className="text-muted">Pay bills, book units, and manage your account from anywhere.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-glow">
                        <h2 className="text-3xl font-bold mb-4">Ready to clear some space?</h2>
                        <p className="text-lg mb-8 opacity-90">Get 50% off your first month when you book online today.</p>
                        <Link to="/units" className="btn bg-white text-primary hover:bg-gray-100 border-none text-lg px-8 font-bold">
                            Reserve Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
