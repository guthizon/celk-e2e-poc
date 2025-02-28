describe('Manter Dados de Alvarás fail', { testIsolation: false }, () => {
    it('Emitir novo alvará Fail', () => {
        cy.clearAllCookies();
        cy.clearAllSessionStorage();
        cy.clearAllLocalStorage();
        cy.visit('/');
        cy.login();
        cy.selecionarEntidade("ACADEMIA DA SAUDE: MAFRA EM FORMA");
        cy.acessarMenu("Tessssst");
       
    })
})
