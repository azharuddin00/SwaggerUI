const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
Given('I visit festivals Page',()=>{
    cy.visit('/')
    cy.get("body").should('be.visible')
    cy.get("ol>li").should('be.visible')
})
Then ('I should see a list of Festivals',()=>{
    cy.get("ol>li").should('be.visible')
})
Then ('I should get the count of Festivals',()=>{        
    cy.get("ol>li").then(($festivals) => {
    const countFestivals = Cypress.$($festivals).length
    cy.log(countFestivals)
    expect($festivals).to.have.length(countFestivals)

})})
Then ('I should get the count of Bands',()=>{        
    cy.get("ol li ul").then(($bands) => {
    let countBands = Cypress.$($bands).length
    cy.log(countBands)
    expect($bands).to.have.length(countBands)
    let numberofPerformances = 0
    cy.get("ol li ul").each(($band) => {
        let bandText = $band.text()
        if (bandText.length > 3) {
            numberofPerformances += 1
        }
        cy.log(numberofPerformances)
    })
    })
})
Then('I should get the Names of Festivals',()=>{
    cy.get("ol>li").each(($festival) => {
        let festivalText = $festival.text()
        cy.log(festivalText)
    })
})
Then('I should get the Names of Bands',()=>{
    cy.get("ol li ul").each(($band) => {
        let bandText = $band.text()
        if (bandText.length > 3) {
            cy.log(bandText)
        }

    })
})
