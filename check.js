/**
 * with recursion function, with one run. Can be parallelized
 */
function isValid(str) {
  const braces = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let result = true;

  /**
   * find and check
   * @param str 
   * @param brace 
   */
  function recCheck(str, brace) {
      let r = {valid: false, position: -1};

      for (let i=0; i< str.length; i++) {
          if (str[i] === brace) {
            r.position = i;
            r.valid = true;
            break;
          }
          else if (Object.values(braces).includes(str[i])) {
            r.position = i;
            r.valid = false;
            break;
          }

          switch (str[i]) {
              case '[':
              case '{':
              case '(':
                  let rTemp = recCheck(str.substr(i+1), braces[str[i]]);
                  if (rTemp.position === -1 || !rTemp.valid) return r;
                  else i += rTemp.position + 1;
                break;
          }
      }

      return r;
  }


  for (let i=0; i< str.length; i++) {
    if (!result) break;
    
    switch (str[i]) {
        case '(':
        case '[':
        case '{':
            result = false;
            let res = recCheck(str.substr(i+1), braces[str[i]]);
            if (res.position === -1) res.valid = false;
            else i += res.position + 1;
            result = res.valid;
            break;
    }
  }
  
  return result;
}




// ------------------- simplest tries ------------------

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
