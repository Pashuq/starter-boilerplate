import React from "react";

import { useParams } from "react-router-dom";

function Client() {
  const params = useParams();
  return <div>User {params.id}</div>;
}

export default Client;
