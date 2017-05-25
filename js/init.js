function loginStart() {
	var modal = document.getElementsByClassName('modal-loader')[0];
	modal.classList.add('loading');
	setTimeout(function(){
		window.location.href = 'dashboardTela.html';
	}, 900);
}

function loginEnd() {
	var modal = document.getElementsByClassName('modal-loader')[0];
	modal.classList.add('loading');
	setTimeout(function(){
		window.location.href = 'index.html';
	}, 900);
}

function showClientData() {
	var clientId = document.getElementById('clientId');
	if (clientId !== null || clientId !== "" || clientId !== undefined) {
		document.getElementsByClassName('consulta-cliente')[0].classList.add('show');
		document.getElementsByClassName('cadastro-cliente')[0].classList.remove('show');
	}
}

function hideClientData() {
	document.getElementsByClassName('consulta-cliente')[0].classList.remove('show');
	document.getElementsByClassName('cadastro-cliente')[0].classList.add('show');
}

function cleanAllFields() {
	var inputArea = document.getElementsByClassName('cadastro-cliente')[0];
	var inputFields = inputArea.getElementsByTagName('input');
	for (i=0; i < inputFields.length; i++) {
		inputFields[i].value = "";
	}
}

function forOfor() {
	window.location.href = "404.html";
}
