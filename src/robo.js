const jquery = require('jquery')
const jsDom = require('jsdom')
const { JSDOM } = jsDom;
const listaEspecialidades = []

const getLista = async (termo, wikiPesquisa) => {
    const data = await wikiPesquisa(termo)
    const html = data.text['*'].toString()
    const { window } = new JSDOM(html)
    const $ = require('jquery')(window);
    return new Promise((resolve, reject) => {
        $(() => {
            const oList = $("ol:first li")
            $(oList).each(function(li) {
                let especialidade = $(this).find('a:first').text()
                let descricao = $(this).text() + '\n'
                listaEspecialidades.push({especialidade, descricao})
                resolve(listaEspecialidades)
            })
        })  
    })
    
}

module.exports = {
    getLista
}