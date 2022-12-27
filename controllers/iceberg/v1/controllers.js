// controllers functions for routes under "iceberg/v1"

export const v1_config = (req, res) => {
    // configs object
    const configs = {
        overrides: {},
        defaults: {}
    }

    // send configs as json
    res.json(configs)
}