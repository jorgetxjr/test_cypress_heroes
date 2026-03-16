import userData from '../fixtures/userData.json'
import HomePage from '../pages/homePage.js'
import CreateHeroPage from '../pages/createHeroPage.js'

const homePage = new HomePage()
const createHeroPage = new CreateHeroPage()

describe('Admin user',()=>{
    beforeEach(()=>{
        homePage.accessPage()
        homePage.loginAllUsers(userData.adminUser,userData.forAllPassword)
    })

    it('Creating new hero',()=>{
        homePage.admCreateHero()
        const avatarPath = 'cypress/images/jailson-mendes.jpg'
        
        const heroName = 'Jailson'
        createHeroPage.createAHero(heroName,10,25,42,4,avatarPath)
        homePage.isHeroCreated(heroName)

    })

    it('Editing a hero',()=>{
        const heroNumber = 0
        const heroName = 'Fumacinha'
        homePage.admEditHero(heroNumber)
        createHeroPage.editName(heroName)
        homePage.isHeroEdited(heroNumber,heroName)
        
    })

    it('Deleting a hero',()=>{
        homePage.admDeleteHero(5)
    })
})