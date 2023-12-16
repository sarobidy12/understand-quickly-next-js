import type { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";
import React from "react";


interface Params {
  params: {
    id: number;
  };
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  // read route params
  const id = params.id;

  // fetch data
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // optionally access and extend (rather than replace) parent metadata
  const json: any = await user.json();

  return {
    title: json.name,
  };
}

const UserContent: React.FC<Params> = async ({ params }) => {
  const { id } = params;

  const data = await getServerSideProps(id);

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

const getServerSideProps = async (id: number) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  return resp.json();
};

export default UserContent;
