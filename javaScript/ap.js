let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/SC/municipios';

fetch(url).then( (body) => body.json()).then((data) => {
    console.log(data)
}).catch((error) => console.error('Erro', 
    error.message || error
))

