import React, { useState } from 'react';

const AuctionCard = ({ auction, placeBid }) => {
    const [biddingOn, setBiddingOn] = useState(false);
    const [bidAmount, setBidAmount] = useState('');

    const handleBidClick = () => {
        setBiddingOn(true);
        setBidAmount('');
    };

    const handlePlaceBid = async () => {
        const amount = parseFloat(bidAmount);
        if (!amount || amount <= auction.current_bid) {
            alert('Bid must be higher than the current bid.');
            return;
        }

        const result = await placeBid(auction.id, amount);
        if (result.success) {
            setBiddingOn(false);
            alert('Bid placed successfully!');
        } else {
            alert(result.error || 'Error placing bid.');
        }
    };

    return (
        <div className="card overflow-hidden flex flex-col">
            <div className="h-48 bg-surface relative">
                <img
                    src={auction.image}
                    alt={`Unit ${auction.unit_number}`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Ends in {auction.ends_in}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-main">Unit {auction.unit_number}</h3>
                        <span className="text-sm text-muted">{auction.size}</span>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-muted">Current Bid</p>
                        <p className="text-2xl font-bold text-primary">${auction.current_bid}</p>
                    </div>
                </div>

                <p className="text-muted text-sm mb-6 flex-grow">
                    {auction.description}
                </p>

                {biddingOn ? (
                    <div className="animate-fade-in">
                        <div className="flex gap-2 mb-2">
                            <input
                                type="number"
                                value={bidAmount}
                                onChange={(e) => setBidAmount(e.target.value)}
                                className="input py-2"
                                placeholder={`> ${auction.current_bid}`}
                                autoFocus
                            />
                            <button
                                onClick={handlePlaceBid}
                                className="btn btn-primary"
                            >
                                Bid
                            </button>
                        </div>
                        <button
                            onClick={() => setBiddingOn(false)}
                            className="text-xs text-muted hover:text-main w-full text-center"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleBidClick}
                        className="btn btn-primary w-full"
                    >
                        Place Bid
                    </button>
                )}
            </div>
        </div>
    );
};

export default AuctionCard;
