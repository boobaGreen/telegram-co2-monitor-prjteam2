import React from 'react';

const TelegramLoginButton = () => {
  // to replace this with Telegram login functionality
  const handleLogin = () => {
    alert('Login with Telegram functionality goes here!');
  };

  return (
    <button

      id="telegram-login-button" className="font-body bg-blue-900 hover:bg-blue-950 text-white w-80 text-xl mt-3 py-2 px-6 rounded-md focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"

      onClick={handleLogin}
      aria-label="Login with Telegram"
    >
      Login with Telegram
    </button>
  );
}

export default TelegramLoginButton;
