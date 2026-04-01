import { useState, useEffect } from 'react';
import { fetchAuctions, placeAuctionBid } from '../services/api';

export const useAuctions = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadAuctions();
    }, []);

    const loadAuctions = async () => {
        try {
            setLoading(true);
            const data = await fetchAuctions();
            setAuctions(data);
            setError(null);
        } catch (err) {
            setError(err.message || 'Failed to load auctions');
        } finally {
            setLoading(false);
        }
    };

    const placeBid = async (auctionId, newBid) => {
        try {
            await placeAuctionBid(auctionId, newBid);
            
            // Optimistically update the UI instead of re-fetching everything
            setAuctions(auctions.map(a => 
                a.id === auctionId ? { ...a, current_bid: newBid } : a
            ));
            
            return { success: true };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    return { auctions, loading, error, placeBid, refreshAuctions: loadAuctions };
};
