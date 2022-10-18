import PageHeader from "components/layout-components/PageHeader";
import React from "react";

import { useParams } from "react-router-dom";

function Client() {
  const params = useParams();
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
}

export default Client;
