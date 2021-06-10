//Selecionados resposta de 'A' 
var checkBoxes1 = document.querySelectorAll(".checkboxA");

var selecionados = 0;

var perguntas01 = document.getElementById("perguntas01");

addEventListener("click", function () {
    selecionados = 0;

    checkBoxes1.forEach(function(el){
        if(el.checked){
            selecionados++;
        }
    });

    document.getElementById("resA").value = selecionados;
});
/************************************************************/

//Selecionados resposta de 'B'
var checkBoxes2 = document.querySelectorAll(".checkboxB");

var res = 0;

var perguntas02 = document.getElementById("perguntas02");

addEventListener("click", function () {
    res = 0;

    checkBoxes2.forEach(function(el){
        if(el.checked){
            res++;
        }
    });

    document.getElementById("resB").value = res;
});
/************************************************************/

//Selecionados resposta de 'C'
var checkBoxes3 = document.querySelectorAll(".checkboxC");

var res2 = 0;



addEventListener("click", function () {
    res2 = 0;

    checkBoxes3.forEach(function(el){
        if(el.checked){
            res2++;
        }
    });

    document.getElementById("resC").value = res2;
});
/************************************************************/

function vocacao(){
    let nome = document.getElementById("nome").value;
    let resposta = document.querySelector('input[name="resposta"]:checked').value;
    console.log(nome)
    console.log(resposta)


    if((resposta == "A1") || (resposta == "A2") || (resposta == "A3")){
        let content = document.getElementById("content");
        content.innerHTML = `
            <p>Olá, <strong>${nome}</strong> essas são as dicas de profissão de acordo com sua vocação</p>

            <h4>Lista de Curoso/Profissões</h4>

            <div id="contDescription">
                <div id="lista">
                    <div>
                        <p class="active" id="programador">Programador</p>
                        <p id="professor">Professor de matemática</p>                      
                    </div>
                </div>

                <div id="imagem">
                    <img id="imagemSRC" src="assets/img/programador.jpg" alt="">
                </div>

                <div id="descricao">
                    <p id="descricaoInt">
                        O programador é o profissional que cria, desenvolve e mantém diferentes 
                        tipos de softwares em sistemas amplos ou para uso em computadores pessoais.
                    </p>
                </div>
            </div>
        `

        var programador = document.getElementById('programador');
        programador.addEventListener("click", function(){
            
            //Removendo classe dinamicamente
            let el = document.getElementById('professor');
            el.classList.remove('active');

            //Adicionando classe dinamicamente
            let el2 = document.getElementById('programador');
            el2.classList.add('active');

            //Mudando o atributo 'src' da tag img
            document.getElementById("imagemSRC").src="assets/img/programador.jpg";

            //Mudando o conteúdo da tag p
            let descricao = document.getElementById("descricaoInt");
            descricao.innerHTML = `
            <p>
                O programador é o profissional que cria, desenvolve e mantém diferentes 
                tipos de softwares em sistemas amplos ou para uso em computadores pessoais.
            </p>
            `
        });

        var professor = document.getElementById('professor');
        professor.addEventListener("click", function(){

            //Removendo classe dinamicamente
            let el = document.getElementById('programador');
            el.classList.remove('active');

            //Adicionando classe dinamicamente
            let el2 = document.getElementById('professor');
            el2.classList.add('active');
            
            //Mudando o atributo 'src' da tag img
            document.getElementById("imagemSRC").src="assets/img/professor.jpg";

            //Mudando o conteúdo da tag p
            let descricao = document.getElementById("descricaoInt");
            descricao.innerHTML = `
            <p>
                O professor exerce diversas funções no processo educativo. Ele realiza diferentes 
                tipos de atividades que buscam educar e ensinar uma pessoa ou grupo em Ciências, Artes, 
                teorias e/ou técnicas específicas e outros tipos de conhecimentos.
            </p>
            `
        });

    }

    else if((resposta == "B1") || (resposta == "B2") || (resposta == "B3")){
        let content = document.getElementById("content");
        content.innerHTML = `
            <p>Olá, <strong>${nome}</strong> essas são as dicas de profissão de acordo com sua vocação</p>

            <h4>Lista de Curoso/Profissões</h4>

            <div id="contDescription">
                <div id="lista">
                    <div>
                        <p class="active" id="psicologo">Psicologo</p>
                        <p id="agente">Agente Social</p>                      
                    </div>
                </div>

                <div id="imagem">
                    <img id="imagemSRC" src="assets/img/psicologa.jpg" alt="">
                </div>

                <div id="descricao">
                    <p id="descricaoInt">
                        O objetivo do psicólogo é compreender e analisar os indivíduos a fim de 
                        solucionar problemas relacionados ao comportamento.
                    </p>
                </div>
            </div>
        `

        var psicologo = document.getElementById('psicologo');
        psicologo.addEventListener("click", function(){
            
            //Removendo classe dinamicamente
            let el = document.getElementById('agente');
            el.classList.remove('active');

            //Adicionando classe dinamicamente
            let el2 = document.getElementById('psicologo');
            el2.classList.add('active');

            //Mudando o atributo 'src' da tag img
            document.getElementById("imagemSRC").src="assets/img/psicologa.jpg";

            //Mudando o conteúdo da tag p
            let descricao = document.getElementById("descricaoInt");
            descricao.innerHTML = `
            <p>
                O objetivo do psicólogo é compreender e analisar os indivíduos a fim de 
                solucionar problemas relacionados ao comportamento.
            </p>
            `
        });

        var agente = document.getElementById('agente');
        agente.addEventListener("click", function(){

            //Removendo classe dinamicamente
            let el = document.getElementById('psicologo');
            el.classList.remove('active');

            //Adicionando classe dinamicamente
            let el2 = document.getElementById('agente');
            el2.classList.add('active');
            
            //Mudando o atributo 'src' da tag img
            document.getElementById("imagemSRC").src="assets/img/agente.jpg";

            //Mudando o conteúdo da tag p
            let descricao = document.getElementById("descricaoInt");
            descricao.innerHTML = `
            <p>
                O Agente Social tem a função de propiciar segurança e bem-estar aos indivíduos 
                e/ou famílias em situação de risco/vulnerabilidade social.
            </p>
            `
        });

    }

    else if((resposta == "C1") || (resposta == "C2") || (resposta == "C3")){
        let content = document.getElementById("content");
        content.innerHTML = `
            <p>Olá, <strong>${nome}</strong> essas são as dicas de profissão de acordo com sua vocação</p>

            <h4>Lista de Curoso/Profissões</h4>

            <div id="contDescription">
                <div id="lista">
                    <div>
                        <p class="active" id="medico">Médico</p>
                        <p id="enfermeiro">Enfermeira(o)</p>                      
                    </div>
                </div>

                <div id="imagem">
                    <img id="imagemSRC" src="assets/img/medico.jpg" alt="">
                </div>

                <div id="descricao">
                    <p id="descricaoInt">
                        O médico é o profissional que busca diagnosticar, tratar e curar pessoas doentes. 
                        Ele pode ser generalista, ou seja, atender todos os tipos de encaminhamentos da área da saúde, 
                        ou especializado em alguma atividade ou função específica.
                    </p>
                </div>
            </div>
        `

        var medico = document.getElementById('medico');
        medico.addEventListener("click", function(){
            
            //Removendo classe dinamicamente
            let el = document.getElementById('enfermeiro');
            el.classList.remove('active');

            //Adicionando classe dinamicamente
            let el2 = document.getElementById('medico');
            el2.classList.add('active');

            //Mudando o atributo 'src' da tag img
            document.getElementById("imagemSRC").src="assets/img/medico.jpg";

            //Mudando o conteúdo da tag p
            let descricao = document.getElementById("descricaoInt");
            descricao.innerHTML = `
            <p>
                O médico é o profissional que busca diagnosticar, tratar e curar pessoas doentes. 
                Ele pode ser generalista, ou seja, atender todos os tipos de encaminhamentos da área da saúde, 
                ou especializado em alguma atividade ou função específica.
            </p>
            `
        });

        var enfermeiro = document.getElementById('enfermeiro');
        enfermeiro.addEventListener("click", function(){

            //Removendo classe dinamicamente
            let el = document.getElementById('medico');
            el.classList.remove('active');

            //Adicionando classe dinamicamente
            let el2 = document.getElementById('enfermeiro');
            el2.classList.add('active');
            
            //Mudando o atributo 'src' da tag img
            document.getElementById("imagemSRC").src="assets/img/enfermeira.jpg";

            //Mudando o conteúdo da tag p
            let descricao = document.getElementById("descricaoInt");
            descricao.innerHTML = `
            <p>
                A principal função do enfermeira(o) é cuidar das pessoas, ajudando na recuperação de pacientes. 
                Suas principais atividades serão cuidar dos doentes e acompanhar a evolução do quadro clínico dos mesmos.
            </p>
            `
        });

    }
}
























