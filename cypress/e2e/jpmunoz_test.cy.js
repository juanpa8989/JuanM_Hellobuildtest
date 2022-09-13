describe('search bar functionality', () => {
  beforeEach( () => {
    //This is going to have the test run on Google search page.
    cy.visit('https://www.google.com')
  })
  it('shows results', () => {
    cy.get('.gLFyf').type('roses{enter}')
    cy.get('#rcnt').should('have.length.at.least', 1)
  })
  it('shows result count', () => {
    cy.get('.gLFyf').type('orchids{enter}')
    cy.get('#result-stats').should('include.text', 'Cerca de')
  })
  it('show search time', () => {
    cy.get('.gLFyf').type('sunflowers{enter}')
    cy.get('nobr').should('not.include.value', 0)
  })
  it('shows links to "Settings"', () => {
    cy.get('.gLFyf').type('poppies  {enter}')
    cy.get('circle').should('be.visible')
  })
})
describe('error message after invalid text', () => {
  beforeEach( () => {
    //This is going to have the test run on Google search page. This time, only once.
    cy.visit('https://www.google.com')
  })
  it('shows error message', () => {
    cy.get('.gLFyf').type('165498789789{enter}')
    cy.get('.eqAnXb').should('include.text', 'any', 'ningún')
  })
})