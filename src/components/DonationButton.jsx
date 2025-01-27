import { loadStripe } from '@stripe/stripe-js';

export default function DonationButton() {
  const handleDonation = async (amount) => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);
    const response = await fetch('/api/stripe/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {[100, 200, 500].map((amount) => (
        <button
          key={amount}
          onClick={() => handleDonation(amount)}
          className="bg-white text-primary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="block text-2xl font-bold">${amount}</span>
          <span className="text-sm">Donación única</span>
        </button>
      ))}
    </div>
  )
}