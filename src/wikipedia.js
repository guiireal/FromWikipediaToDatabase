const wikipedia = require('node-wikipedia')

const pesquisar = termo => {
    return new Promise((resolve, reject) => {
        wikipedia.page.data(termo, { lang: 'pt', content: true }, response => {
            resolve(response)
        })
    })
}

module.exports = pesquisar