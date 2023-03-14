import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/auth';
import './HomePage.css';

export default function HomePage(){

    const [user, setUser] = useState();

    useEffect(() => {
      getCurrentUser().then(setUser);
    }, []);

  return (
    <div className="homepage">
      <h1>Welcome to the home page</h1>
      <p>
        {user?.firstName} {user?.lastName}
        H
      </p>
    </div>
  );
}