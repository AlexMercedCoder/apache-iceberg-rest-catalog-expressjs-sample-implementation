// controllers functions for routes under "iceberg/v1"
import * as error from "../../../errors/index.js";
import * as helpers from "../../../helpers/index.js";

// "/config"
export const v1_config = (req, res) => {
  // configs object
  const configs = {
    overrides: {},
    defaults: {},
  };

  // send configs as json
  res.json(configs);
};

// "/oauth/tokens"
export const v1_oauth_tokens =
  (req,
  (res) => {
    res.json({ token_type: "N_A", access_token: "" });
  });

// "/:prefix/namespaces (get)"
export const v1_prefix_namespaces_get = (req, res) => {
  const result = helpers.namespaceList(
    helpers.splitNamepsace(req.query.parent)
  );

  if (result === "NamespaceDoesNotExist") {
    error.noSuchNamespace(res);
  } else {
    res.json(result);
  }
};

// "/:prefix/namespaces (post)"
export const v1_prefix_namespaces_post = (req, res) => {
  res.json({ message: "/:prefix/namespaces (post)" });
};

// "/:prefix/namespaces/:namespace (get)"
export const v1_prefix_namespaces_namespace_get = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace (get)" });
};

// "/:prefix/namespaces/:namespace (delete)"
export const v1_prefix_namespaces_namespace_delete = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace (delete)" });
};

// "/:prefix/namespaces/:namespace/properties (post)"
export const v1_prefix_namespaces_namespace_properties = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace/properties" });
};

// "/:prefix/namespaces/:namespace/tables (get)"
export const v1_prefix_namespaces_namespace_tables_get = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace/tables (get)" });
};

// "/:prefix/namespaces/:namespace/tables (post)"
export const v1_prefix_namespaces_namespace_tables_post = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace/tables (post)" });
};

// "/:prefix/namespaces/:namespace/tables/:table (get)"
export const v1_prefix_namespaces_namespace_tables_table_get = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace/tables (get)" });
};

// "/:prefix/namespaces/:namespace/tables/:table (post)"
export const v1_prefix_namespaces_namespace_tables_table_post = (req, res) => {
  res.json({ message: "/:prefix/namespaces/:namespace/tables (post)" });
};

// "/:prefix/namespaces/:namespace/tables/:table (delete)"
export const v1_prefix_namespaces_namespace_tables_table_delete = (
  req,
  res
) => {
  res.json({ message: "/:prefix/namespaces/:namespace/tables (delete)" });
};

// "/iceberg/v1/:prefix/tables/rename"
export const v1_prefix_tables_rename = (req, res) => {
  res.json({ message: "/iceberg/v1/:prefix/tables/rename" });
};

// "/:prefix/namespaces/:namespace/tables/:table/metrics"
export const v1_prefix_namespaces_namespace_tables_metrics = (req, res) => {
  res.json({
    message: "/:prefix/namespaces/:namespace/tables/:table/metrics",
  });
};
