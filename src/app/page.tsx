"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const repoName = "tushar-fulmali";

export default function Home() {
  const [pathName, setPathName] = useState<string>("");
  const [basePath, setBasePath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setPathName(window.location.pathname);
        setBasePath(
          window.location.pathname.startsWith(`/${repoName}`)
            ? `/${repoName}`
            : "",
        );
      }, 0);
    }
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>

          <button className="btn btn-primary">Bootstrap Button</button>
        </div>
      </main>
      <div>
        <h3>BasePath {basePath}</h3>
        <h3>PathName {pathName}</h3>

        <h3>NODE_ENV: {process.env.NODE_ENV}</h3>
        <h3>ENV_CONFIG: {process.env.ENV_CONFIG}</h3>
        <h3>NEXT_PUBLIC_REPO_NAME: {process.env.NEXT_PUBLIC_REPO_NAME}</h3>
        <h3>NEXT_PUBLIC_BASE_PATH: {process.env.NEXT_PUBLIC_BASE_PATH}</h3>
        <h3>BASE_PATH: {process.env.BASE_PATH}</h3>
        <h3>ASSET_PREFIX: {process.env.ASSET_PREFIX}</h3>
        <h3>PUBLIC_URL: {process.env.PUBLIC_URL}</h3>
        <h3>REPO_NAME: {process.env.REPO_NAME}</h3>
        <h3>ENV_BASE_PATH: {process.env.ENV_BASE_PATH}</h3>
        <h3>ENV_REPO_NAME: {process.env.ENV_REPO_NAME}</h3>
      </div>
    </div>
  );
}
