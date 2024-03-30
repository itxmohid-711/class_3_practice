import React from "react";
import Link from "next/link";

function dashboard() {
  return (   
    <main>  
      <h2>
        <Link href="/">This is my dash board and Click here to move Home Page</Link>
      </h2> 
      <br /> 
      <h2>
      <Link href="/dashboard/analytics"> Click here to move to analytics page</Link>
    </h2>
    <br />
      <h2>
      <Link href="/dashboard/settings"> Click here to move to settings page</Link>
    </h2>
    <br />
      <h2>
      <Link href="/dashboard/settings/password"> Click here to move to password page</Link>
    </h2>
    <br />
      <h2>
      <Link href="/dashboard/settings/profile"> Click here to move to profile page</Link>
    </h2>
    </main>
  );
}
export default dashboard;