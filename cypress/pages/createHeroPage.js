class CreateHeroPage
{
    selectorsList()
    {
        const selectors={
            name:'[data-cy="nameInput"]',
            price:'[data-cy="priceInput"]',
            fansNumber:'[data-cy="fansInput"]',
            saves:'[data-cy="savesInput"]',
            powersList:'[data-cy="powersSelect"]',
            avatarImage: '[data-cy="avatarFile"]',
            submitButton:'[class="max-w-[100px] items-center py-2 px-4 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"]',
            //this button smells like a problem
        }
        return selectors
    }

    isInCorrectPage()
    {
        //TODO: review the classes
    }

    createAHero(heroName,price,fans,savesNumber,power,avatarFile)
    {
        cy.get(this.selectorsList().name).type(heroName)
        cy.get(this.selectorsList().price).type(price)
        cy.get(this.selectorsList().fansNumber).type(fans)
        cy.get(this.selectorsList().saves).type(savesNumber)
        cy.get(this.selectorsList().powersList).select(power)
        cy.get(this.selectorsList().avatarImage).selectFile(avatarFile)
        cy.get(this.selectorsList().submitButton).click()
    }

    editName(newName)
    {
        cy.get(this.selectorsList().name).clear()
        cy.get(this.selectorsList().name).type(newName)
    }
}
export default CreateHeroPage