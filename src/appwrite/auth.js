import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

const client = new Client()
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const account = new Account(client);

const authService = {
  createAccount: async ({ email, password, name }) => {
    try {
      const userAccount = await account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return await authService.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  },

  login: async ({ email, password }) => {
   
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  logout: async () => {
    try {
      await account.deleteSessions();
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
