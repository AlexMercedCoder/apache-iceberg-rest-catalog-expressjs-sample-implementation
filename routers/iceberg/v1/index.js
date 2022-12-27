// this router handles routing from "/iceberg/v1"

import express from "express";
import {
  v1_config,
  v1_oauth_tokens,
  v1_prefix_namespaces_get,
  v1_prefix_namespaces_post,
  v1_prefix_namespaces_namespace_get,
  v1_prefix_namespaces_namespace_delete,
  v1_prefix_namespaces_namespace_properties,
  v1_prefix_namespaces_namespace_tables_get,
  v1_prefix_namespaces_namespace_tables_post,
  v1_prefix_namespaces_namespace_tables_table_get,
  v1_prefix_namespaces_namespace_tables_table_delete,
  v1_prefix_namespaces_namespace_tables_table_post,
  v1_prefix_tables_rename,
  v1_prefix_namespaces_namespace_tables_metrics
} from "../../../controllers/iceberg/v1/controllers.js";
import placeholder from "../../../controllers/placeholder.js";

const v1Router = express.Router();

// test route "/iceberg/v1/test"
v1Router.get("/test", (req, res) => res.send("server working"));

// /iceberg/v1/config
v1Router.get("/config", v1_config);

// /iceberg/v1/oauth/tokens - POST
v1Router.post("/oauth/tokens", v1_oauth_tokens);

// /iceberg/v1/:prefix/namespaces
v1Router.get("/:prefix/namespaces", v1_prefix_namespaces_get);

// /iceberg/v1/:prefix/namespaces - POST
v1Router.post("/:prefix/namespaces", v1_prefix_namespaces_post);

// /iceberg/v1/:prefix/namespaces/:namespace
v1Router.get(
  "/:prefix/namespaces/:namespace",
  v1_prefix_namespaces_namespace_get
);

// /iceberg/v1/:prefix/namespaces/:namespace - DELETE
v1Router.delete(
  "/:prefix/namespaces/:namespace",
  v1_prefix_namespaces_namespace_delete
);

// /iceberg/v1/:prefix/namespaces/:namespace/properties - POST
v1Router.post(
  "/:prefix/namespaces/:namespace/properties",
  v1_prefix_namespaces_namespace_properties
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables
v1Router.get(
  "/:prefix/namespaces/:namespace/tables",
  v1_prefix_namespaces_namespace_tables_get
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables - POST
v1Router.post(
  "/:prefix/namespaces/:namespace/tables",
  v1_prefix_namespaces_namespace_tables_post
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table
v1Router.get(
  "/:prefix/namespaces/:namespace/tables/:table",
  v1_prefix_namespaces_namespace_tables_table_get
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table - POST
v1Router.post(
  "/:prefix/namespaces/:namespace/tables/:table",
  v1_prefix_namespaces_namespace_tables_table_post
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table - DELETE
v1Router.delete(
  "/:prefix/namespaces/:namespace/tables/:table",
  v1_prefix_namespaces_namespace_tables_table_delete
);

// /iceberg/v1/:prefix/tables/rename - POST
v1Router.post(
  "/:prefix/tables/rename",
  v1_prefix_tables_rename
);

// /iceberg/v1/:prefix/namespaces/:namespace/tables/:table/metrics - POST
v1Router.post(
  "/:prefix/namespaces/:namespace/tables/:table/metrics",
  v1_prefix_namespaces_namespace_tables_metrics
);

export default v1Router;
