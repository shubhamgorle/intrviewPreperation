import { useState } from 'react';
const ConditionA = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
    );
  }

export default ConditionA
