$().ready(function() {

    // validate signup form on keyup and submit
    $("#form-base").validate({
        rules: {

            base: {
                required: true,
                maxlength: 5
            },

            email: {
                required: true,
                email: true
            },

            modelo: {
                required: true,
                modelo: true
            },

            numeroSerie: {
                required: true,
                numeroSerie: true

            },

            senha: {
                required: true,
                maxlength: 4
            },


            dispositivo: "required"

        },
        messages: {
            base: {
                required: "Insira o codigo da base",
                maxlength: "O Código da Base Deve Ter no Maximo 5 Carácteres."
            },

            email: {
                required: "Insira o E-mail",
                email: "O E-mail insérido não é Valido."
            },

            modelo: {
                required: "Selecione o Módelo",
            },

            numeroSerie: {
                required: "Insira o Número de Série",

            },

            senha: {
                required: "Insira a Senha",
                maxlength: "A Senha da Base Deve ter no Máximo 4 Caracteres."
            },

            dispositivo: "Insira o Dispositivo"

        }
    });
});