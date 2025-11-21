import React, { useState } from 'react';
import { auctions as initialAuctions } from '../utils/mockData';

const Auctions = () => {
    const [auctions, setAuctions] = useState(initialAuctions);
    const [biddingOn, setBiddingOn] = useState(null);
    const [bidAmount, setBidAmount] = useState('');

    const handleBidClick = (id) => {
        setBiddingOn(id);
        setBidAmount('');
    };

    const handlePlaceBid = (id, currentBid) => {
        const amount = parseFloat(bidAmount);
        if (!amount || amount <= currentBid) {
            alert('Bid must be higher than the current bid.');
            return;
        }

        setAuctions(auctions.map(auction =>
            auction.id === id ? { ...auction, currentBid: amount } : auction
        ));
        setBiddingOn(null);
        alert('Bid placed successfully!');
    };

    return (
        <div className="container py-12 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-main">Online Auctions</h1>
                <p className="text-muted mt-2">Bid on abandoned units. Great deals on hidden treasures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                {auctions.map((auction) => (
                    <div key={auction.id} className="card overflow-hidden flex flex-col">
                        <div className="h-48 bg-surface relative">
                            <img
                                src={auction.image}
                                alt={`Unit ${auction.unitNumber}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                                Ends in {auction.endsIn}
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-main">Unit {auction.unitNumber}</h3>
                                    <span className="text-sm text-muted">{auction.size}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted">Current Bid</p>
                                    <p className="text-2xl font-bold text-primary">${auction.currentBid}</p>
                                </div>
                            </div>

                            <p className="text-muted text-sm mb-6 flex-grow">
                                {auction.description}
                            </p>

                            {biddingOn === auction.id ? (
                                <div className="animate-fade-in">
                                    <div className="flex gap-2 mb-2">
                                        <input
                                            type="number"
                                            value={bidAmount}
                                            onChange={(e) => setBidAmount(e.target.value)}
                                            className="input py-2"
                                            placeholder={`> ${auction.currentBid}`}
                                            autoFocus
                                        />
                                        <button
                                            onClick={() => handlePlaceBid(auction.id, auction.currentBid)}
                                            className="btn btn-primary"
                                        >
                                            Bid
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setBiddingOn(null)}
                                        className="text-xs text-muted hover:text-main w-full text-center"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleBidClick(auction.id)}
                                    className="btn btn-primary w-full"
                                >
                                    Place Bid
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Auctions;
