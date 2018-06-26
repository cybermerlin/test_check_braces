function check(s) {
	var c = 0,
		q = 0,
		f = 0;

	for(var i=0; i< s.length; i++){
		switch(s[i]){
			case '(': c++; break;
			case ')': c--; break;
			case '[': q++; break;
			case ']': q--; break;
			case '{': f++; break;
			case '}': f--; break;
		}
	}

	return c===0 && q ===0 && f===0;
}
