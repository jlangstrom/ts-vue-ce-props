// https://docs.cypress.io/api/introduction/api.html

describe('Wrong prop types', () => {
  it('print the type of the props', () => {
    cy.visit('/')
    cy.get('#appCe').shadow().find('p[t-id="propFoo"]').should("have.text", "number");
    cy.get('#appCe').shadow().find('p[t-id="propBar"]').should("have.text", "number");
    cy.get('#appCe').shadow().find('p[t-id="propBaz"]').should("have.text", "string");
  })
})
