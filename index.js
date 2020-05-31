const readline = require(`readline-sync`)

function start(){ //guarda tudo que foi encontrado nas pesquisas
    const content = {}

    content.searchTerm = askandReturnSearchTerm()
    content.prefix = askAndReturnPrefix() //o que deve ser colocado para titulo youtube

    function askandReturnSearchTerm(){
        return readline.question('Type a Wikipedia Search term:') //Pegar input user
    }
    function askAndReturnPrefix(){
        const prefixes = ['Who is','What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes,'Chose one option: ')
        const selectPrefixText = prefixes[selectPrefixIndex]
        
        return selectPrefixText
    }


    console.log(content)
}
start()