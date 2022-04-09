import { useState } from "react";
import { ref, push, set } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "libs/firebase";
function useAddNewProduct() {
  console.log("useAddNewProduct Loaded");
  const [loading, setloading] = useState(false);

  const productLoader = async function (productData, imageFile) {
    setloading(true);
    const newRef = await push(ref(db, "products"));
    // console.log("ref: ", newRef.key);
    const imageRef = await storageRef(storage, `images/products/${imageFile.name}`)
    const uploadRef = await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);
    set(newRef, { ...productData });

    let results = Promise.all([newRef, imageRef, uploadRef, imageUrl]);

    results
      .then(() => {
        set(newRef, {
          ...productData,
          imageUrl,
          imageStoragePath: uploadRef.metadata.fullPath,
          uid: newRef.key,
        });
      })
      .then(() => {
        setloading(false);
      });
  };

  return [loading, productLoader];
}
export { useAddNewProduct };
