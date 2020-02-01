import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Página não encontrada.</h1>
    <p>
      Por favor tente novamente voltando à <Link to="/">página inicial</Link>.
    </p>
  </Layout>
);

export default NotFoundPage;
