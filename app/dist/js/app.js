import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
    });
}
else
    throw Error('Formulário não encontrado. Verifique!');
const btnImportarDados = document.querySelector('#btn-importar');
if (btnImportarDados) {
    btnImportarDados.addEventListener('click', () => {
        controller.importarDados();
    });
}
else
    throw Error('Botão importar não foi encontrado!');
//# sourceMappingURL=app.js.map