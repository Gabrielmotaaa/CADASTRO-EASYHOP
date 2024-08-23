$().ready(function() {

    // validate signup form on keyup and submit
    $("#form-base").validate({
        rules: {

            base: {
                required: true,
                maxlength: 5,
            },

            email: {
                required: true,
                email: false
            },

            modelo: {
                required: true,
                modelo: false
            },

            numeroSerie: {
                required: true,
                numeroSerie: false

            },

            senha: {
                required: true,
                maxlength:5
                
            },

            concluir : {
                
                required: true ,
                concluir: false
            },

            dispositivo: "required"

        },
        messages: {
            base: {
                required: "Insira o codigo da base",
                maxlength: "O Código da Base Deve Ter no Maximo 5 Carácteres.",
                minlanght: "A senha deve conter no minimo 4 caracteres."
            },


            email: {
                required: "Insira o E-mail",
                email: "O E-mail insérido não é Valido."
            },

            modelo: {
                required: "Selecione o Módelo",
                modelo: "Selecoine o Módelo"
            },

            numeroSerie: {
                required: "Insira o Número de Série",
                numeroSerie: "Insira o Número de Série"

            },

            senha: {
                required: "Insira a Senha",
                maxlength: "A Senha da Base Deve ter no Máximo 4 Caracteres."
                
            },

            concluir: {
                required: "selecione a caixa para aceitar",
                concluir: "Selecione a caixa para aceitar"
            },

            dispositivo: "Insira o Dispositivo"

        }
    });
});