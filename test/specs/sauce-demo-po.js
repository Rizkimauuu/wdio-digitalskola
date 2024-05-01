import CartPage from "../pageobjects/sauce-cart-page.js"
import DashboardPage from "../pageobjects/sauce-dashboard-page.js"
import LoginPage from "../pageobjects/sauce-login-page.js"



describe('Page Object Demo On Saucelabs', () => {
	it('User Should login Succesfuly', async () => {

		await LoginPage.open()
		await LoginPage.login("standard_user", "secret_sauce")
		await LoginPage.clickLoginButton()
		await DashboardPage.validateOnPage()
		await DashboardPage.clickCartButton()
		await CartPage.validateOnPage()
		

		
	})
})