export const units = [
    { id: 1, size: '5x5', price: 50, status: 'Available', type: 'Climate Controlled', floor: '1st' },
    { id: 2, size: '5x10', price: 85, status: 'Available', type: 'Standard', floor: '1st' },
    { id: 3, size: '10x10', price: 140, status: 'Occupied', type: 'Climate Controlled', floor: '2nd' },
    { id: 4, size: '10x15', price: 180, status: 'Available', type: 'Standard', floor: '1st' },
    { id: 5, size: '10x20', price: 220, status: 'Available', type: 'Drive-up', floor: '1st' },
    { id: 6, size: '5x5', price: 45, status: 'Maintenance', type: 'Standard', floor: '2nd' },
];

export const auctions = [
    {
        id: 101,
        unitNumber: 'B-204',
        size: '10x10',
        currentBid: 150,
        endsIn: '2h 15m',
        image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80',
        description: 'Abandoned unit containing furniture, boxes, and electronics.'
    },
    {
        id: 102,
        unitNumber: 'A-105',
        size: '5x10',
        currentBid: 80,
        endsIn: '45m',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        description: 'Small unit with tools and garden equipment.'
    },
    {
        id: 103,
        unitNumber: 'C-312',
        size: '10x20',
        currentBid: 450,
        endsIn: '1d 4h',
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        description: 'Large unit packed with office supplies and furniture.'
    },
];

export const delinquentAccounts = [
    { id: 1, name: 'John Doe', unit: 'A-101', amountDue: 450, daysOverdue: 45, status: 'Pending Auction' },
    { id: 2, name: 'Jane Smith', unit: 'B-205', amountDue: 120, daysOverdue: 15, status: 'Late' },
    { id: 3, name: 'Bob Johnson', unit: 'C-304', amountDue: 890, daysOverdue: 90, status: 'Auction Scheduled' },
];
