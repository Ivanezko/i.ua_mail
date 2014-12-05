if (window.Autoload) {
	Autoload.DEPENDENCY['PROJ_clearError'] = [ 'FV_E_TEXT' ];
	Autoload.DEPENDENCY['PROJ_showVarError'] = [ 'FV_E_TEXT' ];
	Autoload.DEPENDENCY['PROJ_showFormError'] = [ 'FV_E_TEXT' ];
}

function PROJ_clearError(form, name)
{
//	var ctrl;
//	if (name)
//		ctrl = new Array(form.elements[name]);
//	else
//		ctrl = form.elements;
//	for (var i = 0; i < ctrl.length; i++) {
//		if (ctrl[i].style.background)
//			ctrl[i].style.background = 'transparent';
//		ctrl[i].title = '';
//	}

	var el = form.getElementsByTagName('P');
	for (var i = 0; i < el.length; i++) {
		if (el[i].className == 'error')
			el[i].style.display = 'none';
	}
}

function PROJ_showVarError(form, name, desc, type, etype, err)
{
	var error, _error;
	if (typeof err == 'string' && err) {
		error = _error = err;
	} else if (typeof err == 'object' && err[etype]) {
		error = _error = err[etype];
	} else if (FV_E_TEXT[type][etype]) {
		_error = FV_E_TEXT[type][etype];
		if (desc) {
			error = FV_FIELD + ' "' + desc + '" ' + _error;
		} else {
			error = _error;
		}
	}
//	var ctrl = form.elements[name];
//	if (ctrl) {
//		if (!ctrl.style && ctrl.length) {
//			for (var i = 0; i < ctrl.length; i++) {
//				ctrl[i].style.background = '#ffeded';
//				if (_error)
//					ctrl[i].title = _error;
//			}
//		} else {
//			ctrl.style.background = '#ffeded';
//			if (_error)
//				ctrl.title = stripTags(_error);
//		}
//	}

	if (!error)
		return;
	var el = document.getElementById(name + '_errCtrl');
	if (el) {
		el.className = 'error';
		el.getElementsByTagName('SPAN')[0].innerHTML = error;
		el.style.display = 'block';
	}

	return stripTags(error) + '\n';
}

function PROJ_showFormError(name, eStr)
{
	var el=document.getElementById(name + '_errCtrl');
	if (el) {
		el.className == 'error';
		var tmp = window.I_VER2 ? 'DIV' : 'B';
		el.getElementsByTagName(tmp)[0].innerHTML = eStr;
		el.style.display = 'block';
	}
}