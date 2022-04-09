
import {useState }from 'react'
import {db} from 'libs/firebase';
import {ref, push, set} from 'firebase/database';

 function useAddNewProduct() {
    console.log("useAddNewProduct Loaded");
    const[loading, setloading] = useState(false);

    const productLoader = async function(productData, imageFile){
        setloading(true);
        const newRef = await push(ref(db, 'products'));
        console.log("ref: ", newRef.key);
    }

    return [loading, productLoader]

}
export {useAddNewProduct}