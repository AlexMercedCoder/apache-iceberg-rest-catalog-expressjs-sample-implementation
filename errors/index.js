// boilerplace error responses to use in controllers

export const namespaceAlreadyExists = (res) => {
  res.status(409).json({
    error: {
      message: "The given namespace already exists",
      type: "AlreadyExistsException",
      code: 409,
    },
  });
};

export const noSuchTable = (res) => {
  res.status(404).json({
    error: {
      message: "The given table does not exist",
      type: "NoSuchTableException",
      code: 404,
    },
  });
};

export const noSuchNamespace = (res) => {
  res.status(404).json({
    error: {
      message: "The given namespace does not exist",
      type: "NoSuchNamespaceException",
      code: 404,
    },
  });
};

export const tableAlreadyExists = (res) => {
  res.status(409).json({
    error: {
      message: "The given table already exists",
      type: "AlreadyExistsException",
      code: 409,
    },
  });
};

export const unprocessableEntityDuplicateKey = (res) => {
  res.status(409).json({
    error: {
      message:
        "The request cannot be processed as there is a key present multiple times",
      type: "UnprocessableEntityException",
      code: 422,
    },
  });
};
