const wikiPesquisa = require('./src/wikipedia')
const robo = require('./src/robo')
const formataSQL = require('./src/formataSQL')

const termo = 'Lista_de_especialidades_médicas'

const executa = async () => {
    const listaEspecialidades = await robo.getLista(termo, wikiPesquisa)
    formataSQL(listaEspecialidades)
}

executa()



