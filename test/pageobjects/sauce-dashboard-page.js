import { $ } from '@wdio/globals'

class DashboardPage{

    get addToCartButton() {
        return $('//*[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get cartButton() {
        return $('//*[@id="shopping_cart_container"]/a')
    }

    async validateOnPage() {
        await expect(this.addToCartButton).toBeDisplayed()
    }

    async clickCartButton() {
        await this.cartButton.click()
    }
}

export default new DashboardPage();