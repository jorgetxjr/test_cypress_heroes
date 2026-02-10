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
        const avatarPath = "C:/Users/Jorge/Downloads/jailson-mendes.jpg"
        createHeroPage.createAHero("Jailson",10,25,42,4,avatarPath)

    })

    it('Editing a hero',()=>{
        homePage.admEditHero()
        createHeroPage.editName('Ursao Peludo')
        
    })

    it('Deleting a hero',()=>{
        homePage.admDeleteHero()
    })
})