import React, { useState } from 'react';

const mockCameras = [
    { id: 1, location: 'Main Gate', status: 'Online', ip: '192.168.1.101', type: 'PTZ' },
    { id: 2, location: 'Unit Block A', status: 'Online', ip: '192.168.1.102', type: 'Fixed' },
    { id: 3, location: 'Unit Block B', status: 'Offline', ip: '192.168.1.103', type: 'Fixed' },
    { id: 4, location: 'Loading Bay', status: 'Online', ip: '192.168.1.104', type: 'PTZ' }
];

const mockPackages = [
    { id: 1, name: 'Personal Unit Cam', price: 10, interval: 'month', features: ['24/7 Recording', 'Motion Alerts'], active: true },
    { id: 2, name: 'Driveway Plate Tracker', price: 25, interval: 'month', features: ['LPR AI', 'Cloud Storage'], active: false }
];

const CameraManager = () => {
    const [packages, setPackages] = useState(mockPackages);

    const togglePackageStatus = (id) => {
        setPackages(packages.map(p => p.id === id ? { ...p, active: !p.active } : p));
    };

    return (
        <div className="container py-12 animate-fade-in">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-main">Camera Feed Manager</h1>
                    <p className="text-muted mt-2">Monitor facility endpoints and manage customer security packages.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Camera Feeds */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-main mb-4">Live Facility Feeds</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockCameras.map(cam => (
                            <div key={cam.id} className="card p-0 overflow-hidden relative group cursor-pointer border-2 border-transparent hover:border-primary transition-all">
                                {/* Dummy Video Feed Area */}
                                <div className="h-48 bg-zinc-900 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    {cam.status === 'Online' ? (
                                        <div className="text-white/20 text-6xl my-auto animate-pulse">🎥</div>
                                    ) : (
                                        <div className="text-danger/50 text-xl font-mono">FEED_LOST</div>
                                    )}
                                    <div className="absolute top-2 right-2 flex gap-2">
                                        <span className={`px-2 py-0.5 text-xs font-bold rounded ${cam.status === 'Online' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                                            {cam.status.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-2 left-2 text-white/70 font-mono text-xs">
                                        REC • {new Date().toLocaleTimeString()}
                                    </div>
                                </div>
                                <div className="p-3 bg-surface border-t">
                                    <div className="flex justify-between items-center">
                                        <div className="font-bold text-main flex items-center gap-2">
                                            {cam.location} 
                                        </div>
                                        <span className="text-xs text-muted font-mono">{cam.ip}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Service Packages */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-main">Customer Service Plans</h2>
                        <button className="text-sm font-semibold text-primary hover:text-white transition-colors">+ New Plan</button>
                    </div>

                    <div className="space-y-4">
                        {packages.map(pkg => (
                            <div key={pkg.id} className={`card border-l-4 transition-colors ${pkg.active ? 'border-primary' : 'border-muted opacity-60'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-main">{pkg.name}</h3>
                                    <button 
                                        onClick={() => togglePackageStatus(pkg.id)}
                                        className={`text-xs px-2 py-1 rounded font-bold transition-colors ${pkg.active ? 'bg-danger/10 text-danger hover:bg-danger/20' : 'bg-success/10 text-success hover:bg-success/20'}`}
                                    >
                                        {pkg.active ? 'Disable' : 'Enable'}
                                    </button>
                                </div>
                                
                                <div className="mb-4">
                                    <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                                    <span className="text-muted text-sm">/{pkg.interval}</span>
                                </div>

                                <ul className="space-y-1 mb-0">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="text-sm text-muted flex items-center gap-2">
                                            <span className="text-primary text-xs">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary/5 p-4 rounded border border-primary/20">
                        <h4 className="font-bold text-main mb-1 text-sm">Notice</h4>
                        <p className="text-xs text-muted">
                            Active service packages are immediately displayed to tenants in their dashboard as upsells.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraManager;
