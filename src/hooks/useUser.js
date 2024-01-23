import { useState } from 'react';
import { getAllUsers } from '../services/api/user.service';

const useUser = () => {
    const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     getAllUser();
    //   }, []);

    const getAllUser = async () => {
      const resp = await getAllUsers();
      setUserData(resp);
    };

    const fetchAllUsers = async () => {
        const resp = await getAllUsers();
        setUserData(resp.data);
      };

    return { userData, getAllUser, fetchAllUsers};
}

export default useUser