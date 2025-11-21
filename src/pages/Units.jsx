import React, { useState } from 'react';
import { units } from '../utils/mockData';

const Units = () => {
    const [filter, setFilter] = useState('All');

    const filteredUnits = filter === 'All'
        ? units
        : units.filter(unit => unit.size === filter);

    const uniqueSizes = ['All', ...new Set(units.map(u => u.size))];

    return (
        <div className="container py-12 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-md">
                <div>
                    <h1 className="text-3xl font-bold text-main">Available Units</h1>
                    <p className="text-muted mt-2">Find the perfect space for your needs.</p>
                </div>

                <div className="flex items-center gap-sm">
                    <span className="text-muted text-sm">Filter by size:</span>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="input w-auto py-2 px-4"
                    >
                        {uniqueSizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {filteredUnits.map((unit) => (
                    <div key={unit.id} className="card hover:border-primary group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <span className={`badge ${unit.status === 'Available' ? 'badge-success' :
                                    unit.status === 'Occupied' ? 'badge-danger' : 'badge-warning'
                                }`}>
                                {unit.status}
                            </span>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-main">{unit.size}</h3>
                            <p className="text-muted">{unit.type}</p>
                        </div>

                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold text-primary">${unit.price}</span>
                            <span className="text-muted">/month</span>
                        </div>

                        <div className="space-y-3 mb-6 text-sm text-muted">
                            <div className="flex justify-between">
                                <span>Floor</span>
                                <span className="text-main font-medium">{unit.floor}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Access</span>
                                <span className="text-main font-medium">24/7 Keypad</span>
                            </div>
                        </div>

                        <button
                            disabled={unit.status !== 'Available'}
                            className={`w-full btn ${unit.status === 'Available' ? 'btn-primary' : 'btn-outline opacity-50 cursor-not-allowed'
                                }`}
                        >
                            {unit.status === 'Available' ? 'Reserve Now' : 'Unavailable'}
                        </button>
                    </div>
                ))}
            </div>

            {filteredUnits.length === 0 && (
                <div className="text-center py-12 text-muted">
                    No units found matching your criteria.
                </div>
            )}
        </div>
    );
};

export default Units;
