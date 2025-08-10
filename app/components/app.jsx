'use client'

import "./styles.css";

import Searcher from "./request";
import ConfigTabs from "./config_request/ConfigTabs";
import Response from "./response";
import { useState } from "react";

export default function App() {

  const [params, setParams] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [bodyRaw, setBodyRaw] = useState("{}");
  const [body, setBody] = useState([]);
  const [response, setResponse] = useState({});

  return (
    <div>
      <Searcher params={params} Setresp={setResponse} headers={headers} body={body} />
      <ConfigTabs setParams={setParams} params={params} setHeaders={setHeaders} headers={headers} body={body} setBody={setBody} />
      <Response responseData={response} />
    </div>
  );
}