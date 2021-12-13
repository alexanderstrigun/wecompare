import "../styles/globals.css";
import { WorkItemProvider } from "../contexts/workItemProvider";
import { EditProvider } from "../contexts/editProvider";

function MyApp({ Component, pageProps }) {
  return (
    <WorkItemProvider>
      <Component {...pageProps} />
    </WorkItemProvider>
  );
}

export default MyApp;
