import React, { useState } from "react";

import Head from "next/head";
import LinkRow from "../src/components/LinkRow";
import SanityClient from "../src/client/sanity";
import ScrollTop from "../src/components/ScrollTop";

const AllRedirects = ({ pageData }) => {
  const [search, setSearch] = useState("");

  const filteredData = pageData.filter((redirect) => {
    return (
      redirect.src.toLowerCase().includes(search.toLowerCase()) ||
      redirect.destination.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-3.5 md:p-5">
      <Head>
        <title>All Redirects</title>
        <meta
          name="description"
          content="All redirects created using nhg.app"
        />
      </Head>
      <ScrollTop />
      <h1 className="font-semibold text-center text-3xl md:text-4xl">
        All Redirects
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-slate-500 rounded-md px-4 py-2 w-full max-w-sm mt-5"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <table className="table-fixed w-full">
          <thead className="border border-slate-500">
            <tr>
              <th className="px-4 py-2 text-left">Source</th>
              <th className="px-4 py-2 text-left border-l border-slate-500">
                Destination
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((redirect) => (
              <LinkRow key={redirect.src} redirect={redirect} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRedirects;

export async function getStaticProps() {
  const pageData = await SanityClient.fetch(
    `*[_type == "redirect"]{
      src,
      destination,
    }`
  );

  return {
    props: {
      pageData: pageData,
    },
    revalidate: 300,
  };
}
