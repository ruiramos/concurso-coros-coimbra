import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Pagina nao encontrada</h1>
    <p>
      Por favor tente novamente voltando a <Link to="/">pagina inicial</Link>.
    </p>
  </Layout>
);

export default NotFoundPage;
