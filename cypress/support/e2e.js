// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-real-events/support";
import 'cypress-file-upload';



require('@cypress/xpath');
import addContext from "mochawesome/addContext";


// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
Cypress.on("test:after:run", (test, runnable) => {
  const caminho = Cypress.spec.relative;
  const posicaoE2E = caminho.indexOf('e2e');
  const caminhoDinamico = caminho.substring(posicaoE2E + 4);
  console.log(caminhoDinamico);

  if (test.state === "failed") {
    const screenshot = `assets/${caminhoDinamico}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});