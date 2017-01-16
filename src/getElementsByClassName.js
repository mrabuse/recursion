// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var containsClassName = [];

	function innerGetElementsByClassName(firstElement, className) {
		if(firstElement.classList && firstElement.classList.contains(className)) {
			containsClassName.push(firstElement);
		}

		var children = firstElement.childNodes;

		if(firstElement.hasChildNodes) {
			for(var i = 0; i < children.length; i++) {
				innerGetElementsByClassName(children[i], className);
			}
		}
	}

	if(this === window) {
		innerGetElementsByClassName(document.body, className);
	} else {
		innerGetElementsByClassName(this, className);
	};
		
	return containsClassName;
};
