import Head from "next/head";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1 className="text-9xl font-bold">Not Found</h1>
      <p className="text-3xl">Please check the URL and try again.</p>
    </div>
  );
};

export default NotFound;