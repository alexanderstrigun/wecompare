import "../styles/globals.css";
import { WorkItemProvider } from "../contexts/workItemProvider";
import { OverlayProvider } from "../contexts/overlayProvider";
import { TrackItemProvider } from "../contexts/trackItemProvider";

function MyApp({ Component, pageProps }) {
  return (
    <TrackItemProvider>
      <WorkItemProvider>
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </WorkItemProvider>
    </TrackItemProvider>
  );
}

export default MyApp;
