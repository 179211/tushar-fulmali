const isProd = process.env.NODE_ENV === "production";
const repoName = "tushar-fulmali";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `${repoName}` : "",
  /* config options here
  New-Item "out/.nojekyll" -ItemType File
  */
};

export default nextConfig;
