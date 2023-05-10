import { async } from "@firebase/util";
import { collection, doc, orderBy, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Items
export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, "foodItems", `${Date.now()}`), 
        data, { merge : true }
    );
};

// Get All food items
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
};