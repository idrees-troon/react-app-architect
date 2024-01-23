import { users } from "../interfaces/api-urls";
import { getRequest} from "../interfaces/axios-methods";

async function getAllUsers() {
    try {
        const response = await getRequest(users.GET_ALL_USERS);
        return await response?.data;
      } catch (error) {
        return await error;
      }
  }


export { getAllUsers }