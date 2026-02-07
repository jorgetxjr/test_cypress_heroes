import HomePage from "../pages/homePage.js"
import userData from "../fixtures/userData.json"

const homePage = new HomePage()
describe('Test normal user',()=>{
  beforeEach(()=>{
    homePage.accessPage() 
    homePage.loginAllUsers(userData.normalUser,userData.forAllPassword)
  })
  
  it('Check like',()=>{
    homePage.countFans()
  })

  it('Check hire', ()=>{
    homePage.hireHero()
  })

})