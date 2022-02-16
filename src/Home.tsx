
import React, { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    console.log("Home")
  },[])
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}