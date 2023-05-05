import { AppComponent } from "./app.component"

describe('app.component.cy.ts', () => {
  it('should mount', () => {
    cy.mount(AppComponent);
  })

  it('should mount 2', () => {
    cy.mount(AppComponent);
  })

  it('should mount 3', () => {
    cy.mount(AppComponent);
  })
})