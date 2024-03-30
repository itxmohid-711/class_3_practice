import React from "react";
import Link from "next/link";

const profile=()=>{
    return (
        <main> 
    <div>this is my profile page</div>
    <br />
    <h2>
        <Link href="/">Click here to move Home Page</Link>
      </h2>
    </main>
    );
}
export default  (profile);