/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, image, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title;
  const ogImage = image || `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || metaTitle}
      titleTemplate={
        lang === "en" && title
          ? `%s`
          : title
          ? `%s | ${site.siteMetadata.title}`
          : site.siteMetadata.title
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content:
            lang === "en" && title
              ? title
              : title
              ? `${title} | ${site.siteMetadata.title}`
              : site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:width`,
          content: `1366`,
        },
        {
          property: `og:image:height`,
          content: `1024`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title
            ? `${title} | ${site.siteMetadata.title}`
            : site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `pt`,
  meta: [],
  description: ``,
  image: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
