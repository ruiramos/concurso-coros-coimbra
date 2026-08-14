/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Keep scroll position on same-page hash changes (choir bio modals)
exports.shouldUpdateScroll = ({ routerProps, prevRouterProps }) => {
  if (
    prevRouterProps &&
    routerProps.location.pathname === prevRouterProps.location.pathname
  ) {
    return false;
  }
  return true;
};
