import { useState, useEffect } from 'react';
import { fetchUnits } from '../services/api';

export const useUnits = () => {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        const loadUnits = async () => {
            try {
                setLoading(true);
                const data = await fetchUnits();
                if (mounted) {
                    setUnits(data);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err.message || 'Failed to load units');
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        loadUnits();

        return () => {
            mounted = false;
        };
    }, []);

    return { units, loading, error };
};
