import axios from '../api/axios';

const SIGNUP_URL = '/signup';
const LOGIN_URL = '/login';

class Auth {
  async createUserWithEmailAndPassword(email: string, password: string) {
    try {
      const response = await axios.post(SIGNUP_URL, JSON.stringify({ email, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log(JSON.stringify(response?.data));

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log(JSON.stringify(response?.data));

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async loginWithLinkedinData(linkedinData: object) {
    try {
      const response = await axios.post(SIGNUP_URL, JSON.stringify(linkedinData), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log(JSON.stringify(response?.data));

      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export const auth = new Auth();
