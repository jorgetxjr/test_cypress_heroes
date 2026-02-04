import HomePage from "../pages/homePage.js"
import userData from "../fixtures/userData.json"

const homePage = new HomePage()

describe('Login actions', () => {
  beforeEach(()=>{
    homePage.accessPage() 
  })
  it('No login', () => {
    homePage.noLoggedUser()
  })

  it('Wrong user and password', ()=>{
    homePage.loginAllUsers(userData.wongUser,userData.wrongPassword)
    homePage.invalidLogin()
  })

  it('Normal user',()=>{
    homePage.loginAllUsers(userData.normalUser,userData.forAllPassword)
    homePage.validNormalUser()
  })

  it('ADM user',()=>{
    homePage.loginAllUsers(userData.adminUser,userData.forAllPassword)
    homePage.validAdmUser()
  })
})