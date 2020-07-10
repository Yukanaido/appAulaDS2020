$(document).ready(function(){

    $('#table-categoria').on('click', 'button.btn-view', function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Vizualização de categoria')

        let idcategoria = `idcategoria=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: idcategoria,
            url: 'src/categoria/modelo/view-categoria.php',
            success: function(dados){
                if(dados.tipo = "success"){
                    $('.modal-body').load('src/categorias/visao/form-categoria', function(){
                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readyonly', 'true')
                        $('#dataagora').val(dado.dados.nome)
                        $('#ativo').val(dado.dados.ativo)
                    })
                    $('#modal-categoria').modal('show')
                } else{
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dados.mesagem,
                        type: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }

        })
    })
})