const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const num in collection) {
        callback(collection[num])
      }
      return collection
    },

    map: function(coll, callbackFunc) {
      for (const number in coll) {
        callbackFunc(coll[number])
      }
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
