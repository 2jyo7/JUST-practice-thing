import Link from "next/link";
import React from "react";

function User() {
  return (
    <div>
      <Link href={"/user/[id]"}>User:</Link>
    </div>
  );
}

export default User;
