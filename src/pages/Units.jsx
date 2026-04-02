import React, { useState } from 'react';
import { useUnits } from '../hooks/useUnits';
import UnitCard from '../components/ui/UnitCard';

const Units = () => {
    const { units, loading, error, handleReserve } = useUnits();
    const [filter, setFilter] = useState('All');

    if (loading) return <div className="container py-12 text-center text-muted">Loading units...</div>;
    if (error) return <div className="container py-12 text-center text-danger">{error}</div>;

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
                    <UnitCard key={unit.id} unit={unit} onReserve={handleReserve} />
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
