describe('Manter Dados de Alvarás fail', { testIsolation: false }, () => {
    it('Emitir novo alvará ddd', () => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.visit('/');
        cy.login();
        cy.selecionarEntidade("ACADEMIA DA SAUDE: MAFRA EM FORMA");
        cy.acessarMenu("Vigilância");
        cy.acessarSubMenu("Vigilância Sanitária");
        cy.acessarRotina("Requerimento/Protocolo");
        cy.solicitarDocumento("Alvará");
        cy.selecionarTipoAlvara("Alvará Inicial");
        cy.informarDadosParaEmissaoAlvara();
        cy.validarMensagemExibida('Já existe um alvará inicial para o estabelecimento');
    })
})
