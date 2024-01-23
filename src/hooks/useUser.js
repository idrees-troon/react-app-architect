import { useState } from 'react';
import { getAllUsers } from '../services/api/user.service';
import { toast } from 'react-toastify';
import { USER } from '../services/interfaces/messages';

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
        toast.success(USER.get_success)
      };

    return { userData, getAllUser, fetchAllUsers};
}

export default useUser