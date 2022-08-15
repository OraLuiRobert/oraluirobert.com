import React from "react";
import { Helmet } from "react-helmet";

import favicon from "../static/favicon@2x.png";
import facebook from "../static/card-facebook.png";
import twitter from "../static/card-twitter.png";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="We move startups forward" />
        <meta property="og:title" content="OraLuiRobert" />
        <meta property="og:description" content="Our environment is fun, but our purpose is serious" />
        <meta property="og:url" content="https://oraluirobert.com/" />
        <meta property="og:image" content={facebook} />
        <meta name="twitter:title" content="OraLuiRobert" />
        <meta name="twitter:description" content="Our environment is fun, but our purpose is serious" />
        <meta name="twitter:image" content={twitter} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href={favicon} />
        <title>OraLuiRobert - Our environment is fun, but our purpose is serious</title>
      </Helmet>
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;
