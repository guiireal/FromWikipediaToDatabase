const formataSQL = listaEspecialidades => {
    let sql = ''
    listaEspecialidades.forEach(item => {
        sql = sql + `INSERT INTO especialidade VALUES ('${item.especialidade}', '${item.descricao}'); \n`
    })
    console.log(sql)
}

module.exports = formataSQL