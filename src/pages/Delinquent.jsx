import React from 'react';
import { delinquentAccounts } from '../utils/mockData';

const Delinquent = () => {
    return (
        <div className="container py-12 animate-fade-in">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-main">Delinquent Accounts</h1>
                    <p className="text-muted mt-2">Overview of overdue payments and auction status.</p>
                </div>
                <button className="btn btn-primary">Export Report</button>
            </div>

            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface border-b border-border">
                                <th className="p-4 font-semibold text-muted">Unit</th>
                                <th className="p-4 font-semibold text-muted">Tenant Name</th>
                                <th className="p-4 font-semibold text-muted">Amount Due</th>
                                <th className="p-4 font-semibold text-muted">Days Overdue</th>
                                <th className="p-4 font-semibold text-muted">Status</th>
                                <th className="p-4 font-semibold text-muted">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {delinquentAccounts.map((account) => (
                                <tr key={account.id} className="border-b border-border hover:bg-surface/50 transition-colors">
                                    <td className="p-4 font-medium text-main">{account.unit}</td>
                                    <td className="p-4 text-muted">{account.name}</td>
                                    <td className="p-4 text-danger font-medium">${account.amountDue}</td>
                                    <td className="p-4 text-muted">{account.daysOverdue} days</td>
                                    <td className="p-4">
                                        <span className={`badge ${account.status === 'Auction Scheduled' ? 'badge-danger' :
                                                account.status === 'Pending Auction' ? 'badge-warning' : 'badge-success'
                                            }`}>
                                            {account.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="text-primary hover:text-primary-hover font-medium text-sm">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Delinquent;
