
// Whitelisted URLS
const whitelist = ['http://example1.com', 'http://example2.com']

// Function to return CORS configurations to middleware
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

export default corsOptions