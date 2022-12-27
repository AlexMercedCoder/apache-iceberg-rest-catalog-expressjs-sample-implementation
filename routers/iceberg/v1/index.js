// this router handles routing from "/iceberg/v1"

import express from "express";
import { v1_config } from "../../../controllers/iceberg/v1/controllers.js";
import placeholder from "../../../controllers/placeholder.js";

const v1Router = express.Router();

// test route "/iceberg/v1/test"
v1Router.get("/test", (req, res) => res.send("server working"));

// /iceberg/v1/config
v1Router.get("/config", v1_config);

// /iceberg/v1/oauth/tokens
v1Router.get("/oauth/tokens", placeholder("/v1/oauth/tokens"));

// /iceberg/v1/:prefix/namespaces
v1Router.get("/:prefix/namespaces", placeholder("/v1/:prefix/namespaces"));

// /iceberg/v1/:prefix/namespaces - POST
v1Router.post("/:prefix/namespaces", placeholder("/v1/:prefix/namespaces"));

// /iceberg/v1/:prefix/namespaces/:namespace
v1Router.get(
  "/:prefix/namespaces/:namespace",
  placeholder("/v1/:prefix/namespaces/:namespace")
);

// /iceberg/v1/:prefix/namespaces/:namespace - DELETE
v1Router.delete(
  "/:prefix/namespaces/:namespace",
  placeholder("/v1/:prefix/namespaces/:namespace")
);

// /iceberg/v1/:prefix/namespaces/:namespace/properties - POST
v1Router.post(
  "/:prefix/namespaces/:namespace/properties",
  placeholder("/v1/:prefix/namespaces/:namespace/properties")
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables
v1Router.get(
    "/:prefix/namespaces/:namespace/tables",
    placeholder("/v1/:prefix/namespaces/:namespace/tables")
  );

// /iceberg/v1/:prefix/namespaces/:namespace/tables - POST
v1Router.post(
    "/:prefix/namespaces/:namespace/tables",
    placeholder("/v1/:prefix/namespaces/:namespace/tables")
  );

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table
v1Router.get(
    "/:prefix/namespaces/:namespace/tables/:table",
    placeholder("/v1/:prefix/namespaces/:namespace/tables/:table")
  );

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table - POST
v1Router.post(
    "/:prefix/namespaces/:namespace/tables/:table",
    placeholder("/v1/:prefix/namespaces/:namespace/tables/:table")
  );

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table - DELETE
v1Router.delete(
    "/:prefix/namespaces/:namespace/tables/:table",
    placeholder("/v1/:prefix/namespaces/:namespace/tables/:table")
  );

// /iceberg/v1/:prefix/tables/rename - POST
v1Router.post(
    "/:prefix/tables/rename",
    placeholder("/v1/:prefix/tables/rename")
  );

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table/metrics - POST
v1Router.post(
    "/:prefix/namespaces/:namespace/tables/:table/metrics",
    placeholder("/v1/:prefix/namespaces/:namespace/tables/:table/metrics")
  );

export default v1Router;
