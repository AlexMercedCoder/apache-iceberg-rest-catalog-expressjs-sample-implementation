import catalog from "../middleware/catalog.js"

// function to return array for of parent namespace
export const splitNamepsace = (parent) => {
    // handle scenario with no parent query
    if (parent === undefined){
        return undefined
    }
    const namepaceSplit = parent.split("%1F")
    return namepaceSplit
}

// recursive function to return list of namespaces
export const namespaceList = (nameSplit, partsSoFar = [], catalogLevel = catalog) => {
    // if checking the root namespaces
    if (nameSplit === undefined){
        // generate list of namespaces
        const keys = Object.keys(catalogLevel)
        const result = []
        for (let key of keys){
            result.push([...partsSoFar, key])
        }
        return result
    }
    
    // check if next portion of namespace exists
    if (!catalogLevel[nameSplit[0]]){
        return "NamespaceDoesNotExist"
    }
    // moved checked portion to partsSoFar
    partsSoFar.push(nameSplit.splice(0,1)[0])
    // check if we have more parts to check
    if(nameSplit.length < 1){
        const keys = Object.keys(catalogLevel[partsSoFar.at(-1)])
        const result = []
        for (let key of keys){
            result.push([...partsSoFar, key])
        }
        return result
    } else {
        return namespaceList(nameSplit, partsSoFar, catalogLevel[partsSoFar.at(-1)])
    }
}