function _importAssert(fn){
  return function(items, type){
    if(!items) return;
    if(typeof items === 'string') items = [items];
    if(Array.isArray(items)){
      items.forEach(function(item){
        fn(item, type)
      })
    }
  }
}

module.exports = {
  init: function(){
    if(!this.options || typeof this.options !== 'object'){
      return;
    }
    var importAssert = _importAssert(this.addAssert);
    importAssert(this.options.js, 'js');
    importAssert(this.options.css, 'css')
  }
}