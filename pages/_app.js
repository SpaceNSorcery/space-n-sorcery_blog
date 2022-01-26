import "../styles/globals.scss";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Layout } from "../components";
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

    </Layout>

  )
}

export default MyApp;
