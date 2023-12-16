import React, { Suspense } from "react";
import Card from "../Component/Card/User";

const User = async () => {
  const data: any[] = await getStaticProps();
  return (
    <div>
      <div className="my-4">
        <h1 className="text-2xl font-bold">List user.</h1>
        <p>This is un simple project with next.js, how use dynamique route</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((x: any) => (
          <Card to={`/user/${x.id}`} name={x.name} mail={x.email} key={x.id} />
        ))}
      </div>
    </div>
  );
};

const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const format = await resp.json();
  return format;
};

export default User;
