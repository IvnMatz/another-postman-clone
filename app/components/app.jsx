import Searcher from "./request";
import ConfigTabs from "./config_request/ConfigTabs";
import Response from "./response";

export default function App() {
  return (
    <div>
      <Searcher />
      <ConfigTabs />
      <Response />
    </div>
  );
}