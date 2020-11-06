$(document).ready(function(){
    $('.btn-new').click(function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar nova categoria')

        const datacricao = new Date().toLocaleString()

        $('.modal-body').load('src/categorias/visao/form-categoria.html', function(){
            $('#dataagora').val(dataagora)
        })

        $('.btn-save').show()
        $('.btn-update').hide()

        $('#modal-categoria').modal('show')


    })
})