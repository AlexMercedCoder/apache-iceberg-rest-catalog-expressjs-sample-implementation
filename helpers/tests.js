import * as helpers from "./index.js"

const fakeCatalog = {
    glue: {
        db: {
            tables: {
                cheese: "",
                bread: ""
            }
        }
    }
}


console.log("splitting a name space", helpers.splitNamepsace("glue%1Fdb%1Ftables"))

console.log(
    "getting a list of name spaces",
    helpers.namespaceList(helpers.splitNamepsace("glue%1Fdb%1Ftables"), [], fakeCatalog)
    )

    console.log(
        "getting a list of name spaces",
        helpers.namespaceList(helpers.splitNamepsace(undefined), [], fakeCatalog)
        )