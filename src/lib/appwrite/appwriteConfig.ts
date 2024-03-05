import { Account, Avatars, Client, Databases } from "appwrite";


const client = new Client();

export const appwriteConfig = {
    projectId: "",
    url: ""
}

export const account = new Account(client);
export const avatar = new Avatars(client)
export const database = new Databases(client);
export const storage = new Databases(client)