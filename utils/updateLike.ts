import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase.config";

export async function addLike(id:string,docId:string){
    console.log("ehejie")
   if(!id || !docId) return
   const ref=doc(db,"job-portal", docId);
   console.log('hjgcscsc')
  updateDoc(ref,{
    savedBy: arrayUnion(id)
  }).then((data)=>{
    console.log("lsll",data)
  })
  
  return {update:true}
}


export async function removeLike(id:string,docId:string){
    if(!id || !docId) return
    const ref=doc(db,"job-portal", docId);
   await updateDoc(ref,{
     savedBy: arrayRemove(id)
   })
   return {update:true}
 }