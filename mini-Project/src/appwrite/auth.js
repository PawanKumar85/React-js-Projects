import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  // constructor
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwrite_project_id);
    this.account = new Account(this.client);
  }

  //create an account(sign up)
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Signup User",error);
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Login User",error);
    }
  }

  // get current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("GetCurrent User",error);
    }
    return null;
  }

  //logout
  async logout() {
    try {
      await this.account.deleteSessions("current");
    } catch (error) {
      console.log("Logout User",error);
    }
  }
}

const authService = new AuthService();
export default authService;
