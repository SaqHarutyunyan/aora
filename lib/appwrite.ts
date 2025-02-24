import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.sfs.aora",
    projectId: "67bc6b33000f71b55e94",
    databaseId: "67bc6d190038b15a2a63",
    userColactionId: "67bc6d5000359dc1bc3b",
    videosColactionId: "67bc6d9a002fd7057eb3",
    storageId: "67bc6fab0024a38fb85a",
};

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
    email: string,
    password: string,
    username: string
): Promise<any> => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        if (!newAccount) throw new Error("Failed to create Appwrite account");

        const avatarUrl = avatar.getInitials(username);
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userColactionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );
        return newUser;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message || "Failed to create user");
    }
};

export async function signIn(email: string, password: string): Promise<any> {
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        if (!session) throw new Error("Session creation failed");
        return session;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message || "Sign-in failed");
    }
}
