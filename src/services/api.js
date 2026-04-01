import { supabase } from '../lib/supabase';

/**
 * UNIT API SERVICES
 */
export const fetchUnits = async () => {
    const { data, error } = await supabase
        .from('units')
        .select('*')
        .order('numeric_id', { ascending: true });
    
    if (error) throw new Error(error.message);
    return data;
};

/**
 * AUCTION API SERVICES
 */
export const fetchAuctions = async () => {
    const { data, error } = await supabase
        .from('auctions')
        .select('*')
        .order('numeric_id', { ascending: true });
    
    if (error) throw new Error(error.message);
    return data;
};

export const placeAuctionBid = async (auctionId, newBid) => {
    const { error } = await supabase
        .from('auctions')
        .update({ current_bid: newBid })
        .eq('id', auctionId);

    if (error) throw new Error(error.message);
    return true;
};

/**
 * DELINQUENT API SERVICES
 */
export const fetchDelinquentAccounts = async () => {
    const { data, error } = await supabase
        .from('delinquent_accounts')
        .select('*')
        .order('numeric_id', { ascending: true });
    
    if (error) throw new Error(error.message);
    return data;
};

/**
 * PAYMENT API SERVICES
 */
export const submitPayment = async (unitNumber, amount) => {
    const { data, error } = await supabase
        .from('payments')
        .insert([{ unit_number: unitNumber, amount: parseFloat(amount) }]);

    if (error) throw new Error(error.message);
    return data;
};
