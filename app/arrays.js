exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(oldGain, newGain){
      return oldGain + newGain;
    });
  },

  remove: function(arr, item) {
    arr = arr.filter(function(gain){
      return gain != item;
    });
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var chain = arr;

    for (var i = chain.length -1; i >= 0; i--){
      if (chain[i] === item){
        chain.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
