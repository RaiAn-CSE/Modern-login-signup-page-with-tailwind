import { useState } from 'react';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 via-blue-200 to-gray-300`}>
      <div
        className={`relative w-[768px] min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden transform ${isSignUp ? 'transition-transform translate-x-1' : ''}`}
      >
        {/* Sign Up Form */}
        <div
          className={`absolute w-1/2 h-full bg-white flex flex-col items-center justify-center px-10 transition-transform ${isSignUp ? 'translate-x-full opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <h1 className="text-2xl font-bold">Create Account</h1>
          <div className="flex my-4 space-x-3">
            {['google', 'facebook', 'github', 'linkedin'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-300 rounded-full"
              >
                <i className={`fa-brands fa-${platform}`}></i>
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-500 mb-3">
            Or use your email for registration
          </span>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-3 bg-gray-100 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 bg-gray-100 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 bg-gray-100 rounded"
          />
          <button className="px-5 py-2 text-white bg-purple-600 rounded">
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute w-1/2 h-full bg-white flex flex-col items-center justify-center px-10 ${isSignUp ? 'opacity-0 z-0' : 'opacity-100 z-10'
            } transition-transform`}
        >
          <h1 className="text-2xl font-bold">Sign In</h1>
          <div className="flex my-4 space-x-3">
            {['google', 'facebook', 'github', 'linkedin'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-300 rounded-full"
              >
                <i className={`fa-brands fa-${platform}`}></i>
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-500 mb-3">
            Or use your email for login
          </span>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 bg-gray-100 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 bg-gray-100 rounded"
          />
          <a href="#" className="text-sm text-gray-500">
            Forgot your password?
          </a>
          <button className="px-5 py-2 text-white bg-purple-600 rounded mt-3">
            Sign In
          </button>
        </div>

        {/* Toggle Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-purple-600 text-white flex items-center justify-center flex-col transition-transform ${isSignUp ? 'transform translate-x-[-100%]' : ''
            }`}
        >
          <h1 className="text-2xl font-bold">
            {isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}
          </h1>
          <p className="text-sm text-gray-200 mb-4 px-6 text-center">
            {isSignUp
              ? 'Enter your personal details to use all site features.'
              : 'Register with your personal details to use all site features.'}
          </p>
          <button
            className="px-5 py-2 bg-white text-purple-600 rounded"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
