$(document).ready(function(){
    
    
    $('.categoria').click(function(e){
        console.log('Passei por aqui')


        e.preventDefault()
       
        $('#conteudo').empty()
        $('#conteudo').load('src/categorias/visao/list-categoria.html')
        
    })
    
})