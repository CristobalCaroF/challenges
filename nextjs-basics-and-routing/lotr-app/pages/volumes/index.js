import React from "react";
import { volumes } from "@/resources/lib/data";

import Head from "next/head";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <h1>Lord of the Rings</h1>
        <p>{volumes.introduction}</p>
      </Head>
      <h2>All Volumes</h2>
      <ul>
        <Link>
          <li></li>
        </Link>
      </ul>
    </>
  );
}
