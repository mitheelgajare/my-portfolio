import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Info = () => {
  const router = useRouter();
  return (
    <div className="info-page">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="title">Some Information About Myself</div>
      <p className="para">
        <h3 className="para-title">Experience</h3> <br />I have 1.5+ year of
        experience in all the skills mentioned on the skills page right{" "}
        <Link href="/skills">here</Link>
        <br />
      </p>
      <p className="para">
        <h3 className="para-title">Contact Me</h3> <br />
        Github: <a href="https://github.com/mitheelgajare">Click here</a>
      </p>
      <p className="para">
        <h3 className="para-title">Spoken Languages I Know</h3>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Marathi</li>
          <li>French</li>
        </ul>
      </p>
      <div className="buttondiv">
        <button
          onClick={() => {
            router.push("/projects");
          }}
        >
          Projects &gt;
        </button>
        <button
          onClick={() => {
            router.push("/skills");
          }}
        >
          Skills &gt;
        </button>
      </div>
    </div>
  );
};

export default Info;
