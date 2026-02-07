class HomePage
{
    selectorsList()
    {
        const selectors={
            loginButton:'li > .undefined',
            likeButtonGroup:'[data-cy="like"]',
            moneyButtonGroup:'[data-cy="money"]',
            emailField:'[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            singInButton:'[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 w-full"]',
            invalidLoginMessage: '[class="text-red-500"]',
            newHeroButton:'[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"]',
            noLoggedButtonOK: '[class="flex flex-col gap-4 text-center"]',
            fansAccountGroup:'[data-cy="fans"]',
            savesAccountGroup: '[data-cy="saves"]',
            hireHeroYesButton: '[class="undefined items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-red-300"]',
            waitTime:500,

        }
        return selectors
    }
    accessPage()
    {
        cy.visit('localhost:3000')
    }

    loginAllUsers(userName, password)
    {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().singInButton).click()
        
    }

    invalidLogin()
    {
        cy.get(this.selectorsList().invalidLoginMessage).should('exist')
    }
    noLoggedUser()
    {
        cy.get(this.selectorsList().likeButtonGroup).eq(0).click()
        cy.get(this.selectorsList().noLoggedButtonOK).should('is.visible')
    }

    validNormalUser()
    {
        //cy.visit('http://localhost:3000/heroes')
        cy.wait(this.selectorsList().waitTime)
        cy.get(this.selectorsList().loginButton)
            .invoke('text')
            .then((text)=>{
                expect(text).equal('Logout')
            })

    }

    validAdmUser()
    {
        //cy.visit('http://localhost:3000/heroes')
        cy.wait(this.selectorsList().waitTime)
        cy.get(this.selectorsList().loginButton)
            .invoke('text')
            .then((text)=>{
                expect(text).equal('Logout')
            })
        
        cy.get(this.selectorsList().newHeroButton)
            .invoke('text')
            .then((text)=>{
                expect(text).equal('Create New Hero')
            })
    }

    countFans()
    {
        cy.wait(this.selectorsList().waitTime)
        cy.get(this.selectorsList().fansAccountGroup).eq(0)
            .invoke('text')
            .then((text)=>{
                const currentFanNumber = parseInt(text)
                cy.get(this.selectorsList().likeButtonGroup).eq(0).click()
                cy.get(this.selectorsList().fansAccountGroup).eq(0)
                    .should('not.have.text',currentFanNumber.toString())
                    .invoke('text')
                    .then((newText)=>{
                        const updatedNumber = parseInt(newText)
                        expect(updatedNumber).to.equal(currentFanNumber+1)
                    })

            })
    }

    hireHero()
    {
        cy.wait(this.selectorsList().waitTime)
        cy.get(this.selectorsList().savesAccountGroup).eq(0)
            .invoke('text')
            .then((text)=>{
                const currentSaves = parseInt(text)
                cy.get(this.selectorsList().moneyButtonGroup).eq(0).click()
                cy.get(this.selectorsList().hireHeroYesButton).click()
                cy.get(this.selectorsList().savesAccountGroup).eq(0)
                    .should('not.have.text',currentSaves.toString())
                    .invoke('text')
                    .then((newText)=>{
                        const updatedValue = parseInt(newText)
                        expect(updatedValue).to.equal(currentSaves+1)

                    })

            })

    }

}
export default HomePage