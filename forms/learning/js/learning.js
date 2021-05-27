function t1() {

    $("#treinamentos_tabs").removeClass("active");
    $("#treinamentos_nav").removeClass("active");

    $("#treinamento_1_nav").addClass("active");
    $("#treinamento_1_tabs").addClass("active");
    

}

function quest_1() {

    $("#quest").removeClass("nav-close");
    window.location.hash = '#quest';
}

function previous_1() {

    $("#treinamento_1_nav").removeClass("active");
    $("#treinamento_1_tabs").removeClass("active");

    $("#treinamentos_tabs").addClass("active");
    $("#treinamentos_nav").addClass("active");
}

function go_1() {

    $("#modalOrion").removeClass("nav-close");
}

function exit_1() {

    $("#modalOrion").addClass("nav-close");
}



    

