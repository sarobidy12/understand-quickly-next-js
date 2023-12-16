import Head from "next/head";
import React from "react";

interface Params {
  params: {
    id: number;
  };
}

const UserContent: React.FC<Params> = async ({ params }) => {
  const { id } = params;

  const data = await getServerSideProps(id);
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div>
        <h1>{data.name}</h1>
      </div>
    </>
  );
};

const getServerSideProps = async (id: number) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  return resp.json();
};

export default UserContent;
