import { db } from "./Firebase";
import { setDoc, doc, addDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

export const writeData = async(database, data) => {
    try {
        const docRef = await addDoc(collection(db, database), data);
        return `Document ID: ${docRef.id}`;
    } catch(e) {
        console.log(`Error ${e}`);
    };
};

export const readData = async(database) => {
    const querySnapshots = await getDocs(collection(db, database));
    // console.log(querySnapshots.docs.map(doc => doc.data()));
    // querySnapshots.forEach((doc) => {
    //     console.log(doc);
    // });
    return querySnapshots;
};

export const updateData = async(database, id, data) => {
    await setDoc(doc(db, database, id), data);
    // const docu = db.collection(database).doc(id);
    // const res = await docu.update({});
};

export const deleteData = async(database, id) => {
    await deleteDoc(doc(db, database, id));
};