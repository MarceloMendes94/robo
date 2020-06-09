const readline=require('readline-sync')

function start(){
    const content={}
    content.searchTerm = askAndReturnTerm()
    content.prefix= askAndReturnPrefix()

    function askAndReturnTerm(){
        return readline.question("type a wikipedia search term: ")
    }

    function askAndReturnPrefix(){
        const prefixes=['who is','what is','the history of']
        const selectPrefixIndex=readline.keyInSelect(prefixes,"choose one option: ")
        const selectPrefixText=prefixes[selectPrefixIndex]
        return selectPrefixText
    }

    console.log(content)
}

start()