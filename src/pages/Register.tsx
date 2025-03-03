import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    // AI validation logic can be integrated here

    // Simulate a successful subscription
    setIsSubscribed(true);
  };

  return (
    <div className="max-w-lg mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center pt-40 mb-4">Welcome to [Your App Name]!</h1>
      <p className="text-center mb-6">
        Our app is launching soon, and we would love for you to engage with us. Subscribe to our newsletter to receive the latest updates on our development and launch.
      </p>
      {isSubscribed ? (
        <p className="text-green-500 text-center">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
