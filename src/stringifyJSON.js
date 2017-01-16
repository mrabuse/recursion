// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
  	return "null";
  } else if (typeof obj === "string") {
  	return "\"" + obj + "\"";
  } else if (typeof obj === "number" || typeof obj === "boolean") {
  	return obj.toString();
  } else if (Array.isArray(obj)) {
  	var arrayString = [];	

  	for (var i = 0; i < obj.length; i++) {
  		var result = stringifyJSON(obj[i]);

  		arrayString.push(result);
  	}

  	var arrayStringFinished = arrayString.join(",");

  	return "[" + arrayStringFinished + "]";
  } else if (typeof obj === "undefined" || typeof obj === "function") {
  	return; 
  }	else {
  	var objectString = [];
  	for(var key in obj) {
  		if(typeof obj[key] === "function" || typeof obj[key] === "undefined") {
  		} else {
  			var value = stringifyJSON(obj[key]);
  			var key = stringifyJSON(key);
  			objectString.push((key + ":" + value));
  		}
  	}

  	var objectStringFinished = objectString.join(",");

  	return "{" + objectStringFinished + "}";
  };
};


