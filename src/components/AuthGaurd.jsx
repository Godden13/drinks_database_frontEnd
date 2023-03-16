import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/auth";

let currentUser;

export default function AuthGuard(Component) {
  function Guard(props) {
    const [user, setUser] = useState(currentUser);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) return;
      getCurrentUser()
        .then((user) => {
          setUser(user);
          currentUser = user;
        })
        .catch(() => {
          navigate("/login", { replace: true });
        });
    }, [navigate, user]);

    return user ? <Component {...props} user={user} /> : <>loading...</>;
  }

  return Guard;
}
