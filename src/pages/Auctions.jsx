import React from 'react';
import { useAuctions } from '../hooks/useAuctions';
import AuctionCard from '../components/ui/AuctionCard';

const Auctions = () => {
    const { auctions, loading, error, placeBid } = useAuctions();

    if (loading) return <div className="container py-12 text-center text-muted">Loading auctions...</div>;
    if (error) return <div className="container py-12 text-center text-danger">{error}</div>;

    return (
        <div className="container py-12 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-main">Online Auctions</h1>
                <p className="text-muted mt-2">Bid on abandoned units. Great deals on hidden treasures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {auctions.map((auction) => (
                    <AuctionCard key={auction.id} auction={auction} placeBid={placeBid} />
                ))}
            </div>
        </div>
    );
};

export default Auctions;
