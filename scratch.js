const obj = {
  cheese: {
    bread: {
      hello: {},
    },
  },
};

const name = ["cheese", "bread", "cheese"]

console.log(Object.keys(name.reduce((namespaces, namespace)=> {
    if(namespaces[namespace] && typeof namespaces[namespace] === "object"){
        return namespaces[namespace]
    } else {
        throw "this namespace doesn't exist"
    }
}, obj)))