import "../styles/globals.css";
import { WorkItemProvider } from "../contexts/workItemProvider";

function MyApp({ Component, pageProps }) {
  return (
    <WorkItemProvider>
      <Component {...pageProps} />
    </WorkItemProvider>
  );
}

export default MyApp;
