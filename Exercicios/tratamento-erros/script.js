//netflix
var video = Array()
video[1] = Array()
video[1]['nome'] = 'Koe no katachi'
video[1]['categoria'] = 'Anime'

function getVideo(video) {


    try {
        //logica
        //http
        console.log(video[0]['nome'])
    } catch (erro) {
        tratarErro(erro)
        console.log('Agora sim podemos tratar esse erro')
        throw  new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!!!')
    } finally {
        console.log('Sempre passa por aqui (try / finally')
    }


    console.log('A aplicação não morreu')
}

function tratarErro(e) {
    //logica para registrar o erro no servidor
    console.log(e)
}

getVideo(video)