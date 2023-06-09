describe("The Festivals", () => {
    it("Visit Festivals Page", () => {
        cy.visit('/')
        cy.get("body").should('be.visible')
        cy.get("ol>li").should('be.visible')
    })
    it("Number of Festivals", () => {
        cy.get("ol>li").then(($festivals) => {
            const countFestivals = Cypress.$($festivals).length
            cy.log(countFestivals)
            expect($festivals).to.have.length(countFestivals)
            cy.get("ol>li").each(($festival) => {
                let festivalText = $festival.text()
                cy.log(festivalText)
            })
        })
    })
    it("Number of Bands Performed", () => {
        cy.get("ol li ul").then(($bands) => {
            let countBands = Cypress.$($bands).length
            let numberofPerformances = 0
            expect($bands).to.have.length(countBands)
            cy.get("ol li ul").each(($band) => {
                let bandText = $band.text()
                if (bandText.length > 3) {
                    cy.log(bandText)
                    numberofPerformances += 1
                }
                cy.log(numberofPerformances)
            })
        })
    })
})

