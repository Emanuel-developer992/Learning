//EXECUTAR AO CARREGAR A PÁGINA
window.onload = function() {

approval();

console.log("--------");
console.log(getFormMode());
console.log(getMobile());
console.log(getWKNumState());
console.log(getWKUser());
console.log(getWKNumProces());
console.log(getWKUserLocale());
console.log(getWKCardId());
console.log("--------");

};

//FUNÇÃO DE ACESSO AO TREINAMENTO
function t1() {

    $("#treinamentos_tabs").removeClass("active");
    $("#treinamentos_nav").removeClass("active");

    $("#treinamento_1_nav").addClass("active");
    $("#treinamento_1_tabs").addClass("active");
    
    $("#valid_input").val(1);

};

//FUNÇÃO PARA ABRIR O QUESTIONÁRIO
function quest_t1() {

    $("#quest").removeClass("nav-close");
    window.location.hash = '#quest';
};

//ALTERAR TREINAMENTO
function previous_1() {

    $("#treinamento_1_nav").removeClass("active");
    $("#treinamento_1_tabs").removeClass("active");

    $("#treinamentos_tabs").addClass("active");
    $("#treinamentos_nav").addClass("active");

    $("#quest").addClass("nav-close");

    $("#valid_input").val(0);
};

//ABRIR MODAL
function go_1() {

    $("#modalOrion").removeClass("nav-close");

};

//FECHAR MODAL
function exit_1() {

    $("#modalOrion").addClass("nav-close");
};

//APROVAÇÃO
function approval() {

    var valid = $("#valid_input").val();
    var atividade = getWKNumState();

    if (atividade == 2 || atividade == 3) {

        //TREINAMENTO 1
        if (valid == 1) {

            t1();
            quest_t1();

            //readonly cabeçalho
            $("#t1_nome").prop('readonly', true);
            $("#t1_dataNasc").prop('readonly', true);
            $("#t1_setor").prop('readonly', true);
            $("#t1_cargo").prop('readonly', true);
            $("#t1_email").prop('readonly', true);
            $("#t1_contato").prop('readonly', true);

            //disabled questões
            $("#div_t1_q1").addClass('readonly-div');
            $("#div_t1_q2").addClass('readonly-div');
            $("#div_t1_q3").addClass('readonly-div');
           
            //ocutar botão
            $("#t1_pg").addClass('nav-close');

            //VALIDAÇÃO DAS RESPOSTAS
            for (var i = 1; i <= 3; i++) {

                var quest = document.querySelector('input[name="quest' + i + '"]:checked').value;
                
                if (quest == 1) {
                    $("#t1_q" + i + "_c").removeClass();
                    $("#t1_q" + i + "_c").addClass('alert alert-success');
                }
                else {
                    $("#t1_q" + i + "_e").removeClass();
                    $("#t1_q" + i + "_e").addClass('alert alert-danger');
                }

            }


        }

    }

};
    

