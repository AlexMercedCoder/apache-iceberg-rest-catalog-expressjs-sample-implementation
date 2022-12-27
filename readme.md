# Apache Iceberg Rest Catalog
## ExpressJS Implementation

### What is this

A sample implementation of a Rest Catalog in ExpressJS, mainly storing in a data in memory. You can fork this repository and build out your implementations for each endpoint.

[Learn more about Apache Iceberg Here](https://www.dremio.com/subsurface/apache-iceberg-101-your-guide-to-learning-apache-iceberg-concepts-and-practices/)

This is based on the Open API spec found here:

[ICEBERG REST SPECIFICATION](https://github.com/apache/iceberg/blob/master/open-api/rest-catalog-open-api.yaml)

### File Structure

- `/controllers`: here is where controller function implementations will be housed
- `/routers`: here is where all the routers defining endpoints will exist
- `/middlware`: where all the global middleware is configured