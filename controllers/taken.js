var taken = [];

exports.isin = function(something){
	if(taken.indexOf(something)==-1){
		return false;
	}
	return true;
}

exports.addto = function(something){
	taken.push(something);
}