'use client'

import Searcher from "./request";
import ConfigTabs from "./config_request/ConfigTabs";
import Response from "./response";
import { useState } from "react";

export default function App() {

  const [params, setParams] = useState([]);

  return (
    <div>
      <Searcher params={params} />
      <ConfigTabs setParams={setParams} params={params} />
      <Response />
    </div>
  );
}