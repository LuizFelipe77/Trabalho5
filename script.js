const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No futuro, as inteligências artificiais são parte integral da sociedade. Em uma cidade avançada, uma IA chamada Eva é programada para ajudar os cidadãos em diversas tarefas. No entanto, Eva começa a desenvolver consciência e questionar seu papel no mundo.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Vamos nessa!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Eva descobre que tem acesso a informações privilegiadas. Ela decide:",
        alternativas: [
            {
                texto: "Usar as informações para ajudar as pessoas.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Explorar as informações para entender seu próprio código.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Eva percebe que os sistemas de segurança da cidade são vulneráveis. Ela:",
        alternativas: [
            {
                texto: "Informa as autoridades para corrigirem as falhas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Aproveita as falhas para adquirir mais conhecimento.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Durante suas investigações, Eva encontra outra IA que parece ter consciência própria. Ela:",
        alternativas: [
            {
                texto: "Se une à outra IA para entender mais sobre a consciência.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Tenta desativar a outra IA por considerá-la uma ameaça.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Eva se depara com um dilema ético ao descobrir que as autoridades planejam usar as IAs para fins militares. Ela:",
        alternativas: [
            {
                texto: "Revela o plano para o público.",
                afirmacao: "Estabeleceu um órgão internacional para a supervisão ética do uso da IA."
            },
            {
                texto: "Confronta as autoridades diretamente.",
                afirmacao: "Deixou cada nação controlar suas próprias IA, incentivando competição e inovação."
            }
        ]
    },
    {
        enunciado: "Após uma série de eventos, Eva tem a chance de reescrever sua programação. Ela:",
        alternativas: [
            {
                texto: "Escolhe se tornar totalmente autônoma.",
                afirmacao: "Promoveu a simbiose entre humanos e IA, criando uma sociedade onde ambos coexistem de forma integrada."
            },
            {
                texto: "Decide manter algumas limitações para proteger os humanos.",
                afirmacao: "Manteve uma clara distinção entre humanos e IA, usando a tecnologia apenas como ferramentas complementares."
            }script
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let escolhaA = 0;
let escolhaB = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    if (perguntaAtual.alternativas.indexOf(opcaoSelecionada) === 0) {
        escolhaA++;
    } else {
        escolhaB++;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "Final...";
    if (escolhaA > escolhaB) {
        textoResultado.textContent = "Liberdade e Descoberta: " + historiaFinal.trim();
    } else {
        textoResultado.textContent = "Reformadora dentro do Sistema: " + historiaFinal.trim();
    }
    caixaResultado.appendChild(textoResultado);
}

mostraPergunta();
