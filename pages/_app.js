import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";

import { DefaultSeo } from "next-seo";
// import your default seo configuration
import SEO from "../next-seo.config";

import Header from "components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            name: "theme-color",
            content: "#FEF7F4",
          },
          {
            name: "msapplication-navbutton-color",
            content: "#FEF7F4",
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: "#FEF7F4",
          },
        ]}
      />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
