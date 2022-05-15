import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:4000/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }
  }, [user]);

  return [admin];
};
export default useAdmin;
