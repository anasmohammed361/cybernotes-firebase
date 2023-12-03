import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireStore, storage } from "../../firebase";
import { v4 } from "uuid";
import { singleFile } from "../home/types";
import { arrayUnion, doc, setDoc } from "firebase/firestore";

export async function uploadFileAndReturnUrl(file: File) {
  const reference = ref(storage, v4());
  const result = await uploadBytes(reference, file);
  const url = await getDownloadURL(result.ref);
  return url;
}

export async function uploadDataToFirestore(obj: singleFile) {
  const dbCollection = doc(fireStore, "notes", obj.subject);
  await setDoc(
    dbCollection,
    {
      files: arrayUnion(obj),
    },
    { merge: true }
  );
}
