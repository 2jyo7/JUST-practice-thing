"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-3xl">
      Github followers: {data?.followers}
      <Image
        src={data?.avatar_url}
        alt="Git picture"
        width={300}
        height={300}
      />
    </div>
  );
}

export default Github;
