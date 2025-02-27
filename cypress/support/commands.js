Cypress.Commands.add('visitHomePage', () => {
    cy.visit('/');
})

Cypress.Commands.add('login', (env = 'new', email = Cypress.env('username'), pass = '') => {
    cy.get('[name="login"]').type(email);
    let password = pass !== '' ? pass : Cypress.env('password');
    cy.get('[name="senha"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[name="checkLiAvisoLogin"]').click();
    cy.get('[name="btnAceitar"]').click();

    cy.get("[wicketpath='usuarioLogado']").should('be.visible');
})

Cypress.Commands.add('acessarMenu', (menu) => {
    cy.xpath(`//a/label[text()="${menu}"]`).click();
})

Cypress.Commands.add('selecionarEntidade', (entidade) => {
    cy.xpath(`//label[contains(text(), '${entidade}')]`).click({ force: true });
})

Cypress.Commands.add('acessarSubMenu', (menu) => {
    cy.xpath(`//a/label[text()="${menu}"]`).realHover();
})

Cypress.Commands.add('acessarRotina', (menu) => {
    cy.xpath(`//div/a/label[text()="${menu}"]`).click();
})

Cypress.Commands.add('solicitarDocumento', (doc) => {
    cy.xpath(`//div/label[text()="${doc}"]`).click();
})

Cypress.Commands.add('selecionarTipoAlvara', (doc) => {
    cy.xpath(`//a/label[text()="${doc}"]`).click();
})

Cypress.Commands.add('informarDadosParaEmissaoAlvara', () => {
    cy.get('#id222 > .token-input-list-celk > .token-input-input-token-celk').type('est')
    cy.wait(2000)
    cy.get(':nth-child(8) > [style="display: inline-block; padding-left: 10px;"] > .nivel-1').click();
    cy.wait(2000)
    cy.go('back');

    // cy.get('#id222 > .token-input-list-celk > .token-input-input-token-celk').type('{enter}')
    cy.get('[name="solicitantePanel:root:nomeSolicitante"]').type('teste')
    cy.get('[name="solicitantePanel:root:cpfSolicitante"]').type('04405566672')
    cy.get('[name="solicitantePanel:root:emailSolicitante"]').type('test@gmail.com')
    cy.xpath("//label[text()='Fiscal']//following::li/input[@type='text']").type('test')
    cy.wait(3000)
    cy.xpath("//label[text()='Fiscal']//following::li/input[@type='text']").type('{enter}')
    cy.get('[name="dadosComumRequerimentoVigilancia:root:containerFiscais:btnAdicionarFiscal"]').click();
    cy.get('[name="requerimentoVigilanciaAnexo:form:containerTipoSolicitacaoAnexo:tipoSolicitacaoAnexo"]').select('Cartão CNPJ ou CPF');
    cy.get('[name="requerimentoVigilanciaAnexo:form:containerTipoSolicitacaoAnexo:somenteObrigatorios"]').click();
    cy.get('[name="requerimentoVigilanciaAnexo:form:upload"]').attachFile("voe.pdf");
    cy.get('[name="requerimentoVigilanciaAnexo:form:btnAdicionar"]').click();
    cy.get('[name="btnSalvar"]').click();

})

Cypress.Commands.add('validarMensagemExibida', (msg) => {
    cy.get('p').should('contain', msg);
})
