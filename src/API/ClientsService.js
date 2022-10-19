import axios from "axios";
import { API_BASE_URL, API_JP_USERS } from "constants/ApiConstant";

export default class ClientsService {
  static async getAll() {
    const response = await axios.get(`${API_BASE_URL}${API_JP_USERS}`);
    return response.data;
  }
  static async getUserById(clientId) {
    const response = await axios.get(
      `${API_BASE_URL}${API_JP_USERS}/${clientId}`
    );
    return response.data;
  }
}
