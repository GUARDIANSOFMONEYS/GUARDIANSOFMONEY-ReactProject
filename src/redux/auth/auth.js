import axios from "axios";

const BASE_URL = "https://wallet.b.goit.study/api";

export const registerUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/auth/register`, data);
    return response.data;
};
