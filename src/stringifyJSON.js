// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(obj === null) {
  	return "null";
  } else if (typeof obj === "string") {
  	return "\"" + obj + "\"";
  } else if (typeof obj === "number" || typeof obj === "boolean") {
  	return obj.toString();
  } else if (Array.isArray(obj)) {
  	var arrayString = [];	

  	for(var i = 0; i < obj.length; i++) {
  		var result = stringifyJSON(obj[i]);

  		arrayString.push(result);
  	}

  	var arrayStringFinished = arrayString.join(",");

  	return "[" + arrayStringFinished + "]";
  } 
};

console.log(stringifyJSON(8));
