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

// БОЛЕЕ КОМПАКТНЫЙ ВАРИАНТ ----------
function check1(s) {
	var c = 0,
		q = 0,
		f = 0;

	for(var i=0; i< s.length; i++){
		s[i] == '(' && c++;
		s[i] == ')' && c--;
		s[i] == '[' && q++;
		s[i] == ']' && q--;
		s[i] == '{' && f++;
		s[i] == '}' && f--;
	}

	return c===0 && q ===0 && f===0;
}

// проверяем гибкость ума
function check2(s) {
	return s.split('(').length == s.split(')').length && s.split('{').length == s.split('}').length && s.split('[').length == s.split(']').length
}
