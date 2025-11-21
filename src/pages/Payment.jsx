import React, { useState } from 'react';

const Payment = () => {
    const [formData, setFormData] = useState({
        unitNumber: '',
        amount: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({
                unitNumber: '',
                amount: '',
                cardNumber: '',
                expiry: '',
                cvc: ''
            });
        }, 2000);
    };

    if (success) {
        return (
            <div className="container py-20 flex justify-center animate-fade-in">
                <div className="card max-w-md w-full text-center p-12">
                    <div className="text-6xl mb-6">🎉</div>
                    <h2 className="text-3xl font-bold text-main mb-4">Payment Successful!</h2>
                    <p className="text-muted mb-8">Thank you for your payment. A receipt has been sent to your email.</p>
                    <button onClick={() => setSuccess(false)} className="btn btn-primary w-full">
                        Make Another Payment
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-12 animate-fade-in">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-main mb-2 text-center">Pay Your Bill</h1>
                <p className="text-muted text-center mb-8">Secure online payment for your storage unit.</p>

                <form onSubmit={handleSubmit} className="card space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-muted mb-2">Unit Number</label>
                        <input
                            type="text"
                            name="unitNumber"
                            value={formData.unitNumber}
                            onChange={handleChange}
                            className="input"
                            placeholder="e.g. A-101"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted mb-2">Payment Amount ($)</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="input"
                            placeholder="0.00"
                            required
                        />
                    </div>

                    <div className="border-t border-border pt-6">
                        <h3 className="text-lg font-semibold text-main mb-4">Card Details</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="0000 0000 0000 0000"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        value={formData.expiry}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-2">CVC</label>
                                    <input
                                        type="text"
                                        name="cvc"
                                        value={formData.cvc}
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`btn btn-primary w-full py-3 text-lg ${loading ? 'opacity-70 cursor-wait' : ''}`}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </form>

                <p className="text-center text-xs text-muted mt-6">
                    Payments are processed securely. We do not store your card information.
                </p>
            </div>
        </div>
    );
};

export default Payment;
