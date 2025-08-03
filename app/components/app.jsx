'use client'

import "./styles.css";

import Searcher from "./request";
import ConfigTabs from "./config_request/ConfigTabs";
import Response from "./response";
import { useState } from "react";

export default function App() {

  const [params, setParams] = useState([]);
  const [response, setResponse] = useState({});

  return (
    <div>
      <Searcher params={params} Setresp={setResponse} />
      <ConfigTabs setParams={setParams} params={params} />
      <Response responseData={response} />
    </div>
  );
}