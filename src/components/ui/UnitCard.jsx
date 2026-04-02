import React, { useState } from 'react';

const UnitCard = ({ unit, onReserve }) => {
    const [reserving, setReserving] = useState(false);

    const handleReserveClick = async () => {
        setReserving(true);
        const result = await onReserve(unit.id);
        if (result && result.success) {
            alert('Reservation confirmed!');
        } else {
            alert('Failed to reserve unit.');
        }
        setReserving(false);
    };

    return (
        <div className="card hover:border-primary group relative overflow-hidden">
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
                onClick={handleReserveClick}
                disabled={unit.status !== 'Available' || reserving}
                className={`w-full btn ${unit.status === 'Available' ? 'btn-primary' : 'btn-outline opacity-50 cursor-not-allowed'
                    }`}
            >
                {reserving ? 'Reserving...' : unit.status === 'Available' ? 'Reserve Now' : 'Unavailable'}
            </button>
        </div>
    );
};

export default UnitCard;
