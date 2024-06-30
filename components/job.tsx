"use client";
import { db } from "@/utils/firebase.config";
import { collection, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useUser } from "@clerk/nextjs";

type Props = {};

const JobSection = (props: Props) => {
  const { user, isLoaded } = useUser();
  const [alljobs, setalljobs] = useState<any>([]);
  async function getData() {
    const docRef = query(collection(db, "job-portal"));
    const docSnap = await getDocs(docRef);
    let all: any = [];
    //  setalljobs(docSnap)
    docSnap.forEach((doc) => {
      console.log(doc.id, doc.data());
      const data = doc.data();
      console.log("s", data.title);
      all.push({
        title: data.title,
        desc: data.desc,
        postedBy: data.postedBy,
        support: data.support,
        type: data.type,
        tags: data.tags,
        location: data.location,
        id: doc.id,
        savedBy: data.savedBy,
      });
    });
    setalljobs(all);
    console.log("g", alljobs);
  }
  useEffect(() => {
    getData();
  }, []);
  
  const getUpdate=(docId:string)=>{

  
onSnapshot(doc(db,"job-portal",docId),(doc)=>{
    console.log("updated ddata", doc.data(),doc.id)
    setalljobs((prev:any)=>prev.map((el:any)=>el.id=== docId?doc.data():el))
   
  })
}
  return (
    <div className="flex flex-col gap-6  overflow-y-scroll p-6 items-center h-screen">
      {alljobs.length > 0
        ? alljobs.map((elm: any) => (
            <Cards
              updateJob={(docId, type) => {
                getUpdate(docId)
                // type == "add"
                //   ? setalljobs([
                //       ...alljobs.filter(
                //         (el: any) =>
                //           (el.id = docId ? el.savedBy.push(user?.id) : el)
                //       ),
                //     ])
                //   : setalljobs([
                //       ...alljobs.filter(
                //         (el: any) =>
                //           (el.id = docId
                //             ? el.savedBy.splice(el.savedBy.indexOf(user?.id))
                //             : el)
                //       ),
                //     ]);
              }}
              id={user?.id}
              elm={elm}
            />
          ))
        : null}
    </div>
  );
};

export default JobSection;
