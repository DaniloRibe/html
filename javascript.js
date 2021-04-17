let parameters = {};

location.search.slice(1).split('&').forEach((value, number)=>{
    const data = value.split('=');
    if (data.length > 1) {
        parameters[data[0]] = decodeURIComponent(data[1]);
    }
});

document.getElementById('nome').value = parameters.nome?.replace(/\+/g, ' ') || '';

document.getElementById('telefone').value = parameters.telefone || '';

document.getElementById('endereco').value = parameters.endereco?.replace(/\+/g, ' ') || '';

document.getElementById('idade').value = parameters.idade || '';


switch (parameters.gender) {
    case 'masculino':
        document.querySelector("#masculino").checked = true;
        break;
    case 'feminino':
        document.querySelector("#feminino").checked = true;
        break;
    case 'outros':
        document.querySelector("#outros").checked = true;
        break;
}

document.getElementById('cpf').value = parameters.cpf || '';

document.getElementById('problema').value = parameters.problema?.replace(/\+/g, ' ') || '';

document.getElementById('data').value = parameters.data || '';

document.getElementById('email').value = parameters.email || '';


function dell(element) {
    element.value = '';
}