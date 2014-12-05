function formManagerLog(arg)
{
	if (window.console)
		window.console.log(arg);
}

function validateStr(val, empty, max, min, preg)
{
	if (!val.length) throw empty ? 1 : 0;
	if (max && val.length > max) throw 4;
	if (min && val.length < min) throw 3;
	if (preg && !val.match(preg)) throw 6;
}

function validateVal(val, empty, max, min)
{
	if (!val) throw empty ? 1 : 0;
	if (max && val > max) throw 4;
	if (min && val < min) throw 3;
}

function validateImg(val_elem, empty, val, maxX, maxY, minX, minY, maxSize)
{
	if (!val_elem.length) throw empty ? 1 : 0;
	if (!val || !val.src) return;
	if (!val.src.match(/^file:/)) return;
	if (!val.src.match(/\.(jpg|jpeg|gif|bmp|png)$/i)) throw 7;
	if (!val.complete) return;
	if (val.width < 2 || val.height < 2) return;
	if (maxX && val.width > maxX) throw 7;
	if (maxY && val.height > maxY) throw 7;
	if (minX && val.width < minX) throw 7;
	if (minY && val.height < minY) throw 7;
	if (maxSize && val.fileSize > maxSize) throw 4;
}

function validateFile(val, empty, maxSize)
{
	if (!val || !val.value) throw empty ? 1 : 0;
//	if (maxSize && val.fileSize > maxSize) throw 4;
}

function inputLimit(input, maxlen, left)
{
	inputstr = input.value;
	strlen = inputstr.length;
	if (strlen > maxlen) {
		input.value = inputstr.substring(0, maxlen);
//		input.scrollTop = input.scrollHeight;
	}

	if (left)
		left = document.getElementById(left);
	if (left) {
		if (left.tagName == 'INPUT')
			left.value = maxlen - input.value.length;
		else
			left.innerHTML = maxlen - input.value.length;
	}

	return true;
}

var FV_TYPE_STRING = 1;
var FV_TYPE_INTEGER = 2;
var FV_TYPE_BOOL = 3;
var FV_TYPE_FLOAT = 4;
var FV_TYPE_ARRAY = 5;

var FV_E_EMPTY = 1;
var FV_E_TYPE = 2;
var FV_E_MIN = 3;
var FV_E_MAX = 4;
var FV_E_ARRAY = 5;
var FV_E_PATTERN = 6;
var FV_E_CUSTOM = 7;

var FV_FIELD;
var FV_E_TEXT = new Array();
FV_E_TEXT[FV_TYPE_STRING] = new Array();
FV_E_TEXT[FV_TYPE_INTEGER] = new Array();
FV_E_TEXT[FV_TYPE_BOOL] = new Array();
FV_E_TEXT[FV_TYPE_FLOAT] = new Array();
FV_E_TEXT[FV_TYPE_ARRAY] = new Array();

function FV_choiseJSLanguage(JS_LANG_ID)
{
	if (JS_LANG_ID == 2) {
		FV_FIELD = 'Поле';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_EMPTY] = 'не вказано';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_TYPE] = 'має невірний тип';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_MIN] = 'закоротке';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_MAX] = 'задовге';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_ARRAY] = 'має недопустиме значення';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_PATTERN] = 'має невірний формат';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_CUSTOM] = 'містить помилку';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_EMPTY] = 'не вказано';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_TYPE] = 'має невірний тип';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_MIN] = 'замале';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_MAX] = 'завелике';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_ARRAY] = 'має недопустиме значення';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_PATTERN] = 'має невірний формат';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_CUSTOM] = 'містить помилку';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_EMPTY] = 'не вказано';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_TYPE] = 'має невірний тип';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_MIN] = 'замале';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_MAX] = 'завелике';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_ARRAY] = 'має недопустиме значення';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_PATTERN] = 'має невірний формат';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_CUSTOM] = 'містить помилку';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_EMPTY] = 'не вказано';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_TYPE] = 'має невірний тип';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_MIN] = 'замале';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_MAX] = 'завелике';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_ARRAY] = 'має недопустиме значення';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_PATTERN] = 'має невірний формат';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_CUSTOM] = 'містить помилку';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_EMPTY] = 'не вказано';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_TYPE] = 'має невірний тип';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_MIN] = 'замале';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_MAX] = 'завелике';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_ARRAY] = 'має недопустиме значення';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_PATTERN] = 'має невірний формат';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_CUSTOM] = 'містить помилку';
	} else if (JS_LANG_ID == 3) {
		FV_FIELD = 'Field';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_EMPTY] = 'is empty';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_TYPE] = 'has wrong type';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_MIN] = 'is to short';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_MAX] = 'is to long';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_ARRAY] = 'has illegal value';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_PATTERN] = 'has wrong format';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_CUSTOM] = 'error';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_EMPTY] = 'is empty';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_TYPE] = 'has wrong type';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_MIN] = 'is to small';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_MAX] = 'is to big';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_ARRAY] = 'has illegal value';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_PATTERN] = 'has wrong format';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_CUSTOM] = 'error';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_EMPTY] = 'is empty';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_TYPE] = 'has wrong type';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_MIN] = 'is to small';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_MAX] = 'is to big';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_ARRAY] = 'has illegal value';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_PATTERN] = 'has wrong format';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_CUSTOM] = 'error';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_EMPTY] = 'is empty';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_TYPE] = 'has wrong type';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_MIN] = 'is to small';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_MAX] = 'is to big';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_ARRAY] = 'has illegal value';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_PATTERN] = 'has wrong format';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_CUSTOM] = 'error';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_EMPTY] = 'is empty';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_TYPE] = 'has wrong type';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_MIN] = 'is to small';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_MAX] = 'is to big';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_ARRAY] = 'has illegal value';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_PATTERN] = 'has wrong format';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_CUSTOM] = 'error';
	} else {
		FV_FIELD = 'Поле';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_EMPTY] = 'не указано';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_TYPE] = 'имеет неверный тип';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_MIN] = 'слишком короткое';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_MAX] = 'слишком длинное';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_ARRAY] = 'содержит недопустимое значение';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_PATTERN] = 'имеет неверный формат';
		FV_E_TEXT[FV_TYPE_STRING][FV_E_CUSTOM] = 'содержит ошибку';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_EMPTY] = 'не указано';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_TYPE] = 'имеет неверный тип';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_MIN] = 'слишком маленькое';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_MAX] = 'слишком большое';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_ARRAY] = 'содержит недопустимое значение';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_PATTERN] = 'имеет неверный формат';
		FV_E_TEXT[FV_TYPE_INTEGER][FV_E_CUSTOM] = 'содержит ошибку';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_EMPTY] = 'не указано';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_TYPE] = 'имеет неверный тип';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_MIN] = 'слишком маленькое';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_MAX] = 'слишком большое';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_ARRAY] = 'содержит недопустимое значение';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_PATTERN] = 'имеет неверный формат';
		FV_E_TEXT[FV_TYPE_BOOL][FV_E_CUSTOM] = 'содержит ошибку';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_EMPTY] = 'не указано';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_TYPE] = 'имеет неверный тип';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_MIN] = 'слишком маленькое';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_MAX] = 'слишком большое';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_ARRAY] = 'содержит недопустимое значение';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_PATTERN] = 'имеет неверный формат';
		FV_E_TEXT[FV_TYPE_FLOAT][FV_E_CUSTOM] = 'содержит ошибку';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_EMPTY] = 'не указано';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_TYPE] = 'имеет неверный тип';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_MIN] = 'слишком маленькое';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_MAX] = 'слишком большое';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_ARRAY] = 'содержит недопустимое значение';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_PATTERN] = 'имеет неверный формат';
		FV_E_TEXT[FV_TYPE_ARRAY][FV_E_CUSTOM] = 'содержит ошибку';
	}
}
FV_choiseJSLanguage(1);

function setOptionsLeave(select, arr, group)
{
	setOptions(select, arr, select.multiple ? 0 : 1, group);
}

function setOptions(select, arr, leave, group)
{
//	alert(window.b);
//	alert(b.ie);
//	alert(b.ie6);
//	alert(b.opera7);
//	alert(b.ff);
//	for (var i in arr) {
//		alert(i + ' = ' + arr[i]);
//		for (var j in arr[i])
//			alert(j + ' = ' + arr[i][j]);
//
//	}
//	alert(arr.length);
//	alert(group);
	if (group && (!window.b || !b.ns6 && !b.ie6 && !b.opera7 && !b.ff && !b.chrome && !b.safari))
			group = false;

	select.length = leave ? leave : 0;
	var optgroups = select.getElementsByTagName('OPTGROUP');
	var needClone = optgroups.length > 0;
	for (var i = optgroups.length - 1; i >= 0; i--)
		select.removeChild(optgroups[i]);

	if (needClone) {
		var newSelect = select.parentNode.insertBefore(select.cloneNode(true), select.nextSibling);
		select.parentNode.removeChild(select);
		select = newSelect;
	}

//	alert([ group, needClone ]);

	var optgroup, opt, optText, groupLabel;
	for (var i in arr) {
		if (typeof(arr[i]) == 'object') {
			groupLabel = i;
			if (group) {
				optgroup = document.createElement('OPTGROUP');
				optgroup.label = groupLabel;
				select.appendChild(optgroup);
			} else {
				optgroup = select;
			}

			for (var j in arr[i]) {
				if (group) {
					if (arr[i][j] == groupLabel) {
//						alert([ i, j, arr[i][j] ]);
						groupLabel = null;
						continue;
					}

					optText = arr[i][j];
				} else {
					if (arr[i][j] == groupLabel) {
						optText = '[' + arr[i][j] + ']';
						groupLabel = null;
					} else {
						optText = '&nbsp;&nbsp;&nbsp;&nbsp;' + arr[i][j];
					}
				}
				opt = document.createElement('OPTION');
				opt.value = j;
				opt.innerHTML = optText;
				optgroup.appendChild(opt);
			}
		} else {
			opt = document.createElement('OPTION');
			opt.value = i;
			opt.innerHTML = arr[i];
			select.appendChild(opt);
		}
	}

	select.selectedIndex = 0;
	select.disabled = false;
}

function disableSubmit(form)
{
	if (!form)
		form = document;
	var inSub = form.getElementsByTagName('INPUT');
	for (var i = 0; i < inSub.length; i++) {
		if (inSub[i].type == 'submit') {
			inSub[i].onclick = function () {return false;}
			inSub[i].style.color = '#888888';
		}
	}
	return;
}


// Actual func that regenerates image
var reqRndImageTimeOut;
var reqRndImage;
function doRegenerateRndImage(name, scriptPath)
{
	if (!reqRndImage)
		reqRndImage = new Subsys_JsHttpRequest_Js();
	if (reqRndImageTimeOut) {
		clearTimeout(reqRndImageTimeOut);
		reqRndImageTimeOut = null;
	}

	var rndSeq = document.getElementsByName(name + '_rndSeq');
	var img  = document.getElementsByName(name + '_img');
	reqRndImage.elRndSeq = rndSeq[0];
	reqRndImage.elImage = img[0];

	reqRndImage.onreadystatechange = function() {
		if (reqRndImage.readyState == 4) {
			try {
				reqRndImage.elRndSeq.value = reqRndImage.responseJS.rndSeq;
				reqRndImage.elImage.src = reqRndImage.responseJS.imageUrl;
			} catch (e) {
			}
		}
	}
	reqRndImage.caching = false;
	reqRndImage.open('GET', scriptPath, true);
	reqRndImage.send({});
}

// Regenerates image on request
function regenerateRndImage(name, scriptPath)
{
	if (reqRndImageTimeOut)
		clearTimeout(reqRndImageTimeOut);
	reqRndImageTimeOut = setTimeout('doRegenerateRndImage("' + name + '", "' + scriptPath + '")', 600);
}

//function operaLabelBFix(name)
//{
//	if (b.opera) {
//		var inp = document.getElementById(name);
//		if (inp.onclick)
//			inp.onclick();
//	}
//}