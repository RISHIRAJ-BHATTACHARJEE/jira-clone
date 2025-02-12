"use server";

import { createSessionClient } from "@/lib/appwriteServer";

export const getCurrent = async () => {
    try {
        const {account} = await createSessionClient();
    
        return await account.get();
    } catch (error) {
        console.error("Error:- ",error)
        return null;
    }
}