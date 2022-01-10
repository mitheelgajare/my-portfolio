import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const App = () => {
  const router = useRouter();
  return (
    <div className="home-page">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="hero">
        Hello, <br />
        My name is Mitheel
      </div>
      <button
        onClick={() => {
          router.push("/info");
        }}
      >
        Next &gt;{" "}
      </button>
    </div>
  );
};

export default App;
