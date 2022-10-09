import "victormono";
import "../styles/globals.css";
import Page from "../components/page.js";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
