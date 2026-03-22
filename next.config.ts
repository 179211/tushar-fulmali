const isProd = process.env.NODE_ENV === "production";
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "envBasePath";
const envRepoName = process.env.NEXT_PUBLIC_REPO_NAME || "envRepoName";
const repoName = "tushar-fulmali";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  /* config options here
  New-Item "public/.nojekyll" -ItemType File
  */
};

export default nextConfig;
