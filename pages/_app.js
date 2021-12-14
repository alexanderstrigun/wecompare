import "../styles/globals.css";
import { WorkItemProvider } from "../contexts/workItemProvider";
import { OverlayProvider } from "../contexts/overlayProvider";

function MyApp({ Component, pageProps }) {
  return (
    <WorkItemProvider>
      <OverlayProvider>
        <Component {...pageProps} />
      </OverlayProvider>
    </WorkItemProvider>
  );
}

export default MyApp;
