
import React, { useEffect } from "react";

export default function Dashboard() {

  useEffect(()=>{
    console.log("Dashboard")
  },[])
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}