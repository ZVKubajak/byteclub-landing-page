import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get email from URL parameter
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleUnsubscribe = async () => {
    if (!email) {
      setMessage('Email address is required');
      return;
    }

    setStatus('loading');
    
    try {
      // Use your existing DELETE endpoint
      const response = await fetch(`/api/subscribe/${encodeURIComponent(email)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to unsubscribe');
      }

      setStatus('success');
      setMessage('You have been successfully unsubscribed from Byte Club emails.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
      console.error('Unsubscribe error:', error);
    }
  };

  return (
    <div className="container mx-auto max-w-md py-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Unsubscribe from Byte Club</h1>
        
        {status === 'success' ? (
          <div className="text-center p-4 bg-green-50 rounded-md text-green-700 mb-4">
            {message}
          </div>
        ) : (
          <>
            <p className="mb-6 text-gray-600">
              We're sorry to see you go! Please confirm your email address below to unsubscribe from our mailing list.
            </p>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your email"
                readOnly={!!searchParams.get('email')}
              />
            </div>
            
            {message && status === 'error' && (
              <div className="text-red-600 mb-4">
                {message}
              </div>
            )}
            
            <button
              onClick={handleUnsubscribe}
              disabled={status === 'loading'}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {status === 'loading' ? 'Processing...' : 'Unsubscribe'}
            </button>
          </>
        )}
        
        <div className="mt-6 text-center">
          <a href="/" className="text-red-600 hover:text-red-800">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnsubscribePage;