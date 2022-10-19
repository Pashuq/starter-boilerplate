import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";

export default class ClientsService {
  static async getAll() {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
