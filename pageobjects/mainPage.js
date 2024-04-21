const Base = require('../pageobjects/base');
const header = require('../pageobjects/components/header')

class MainPage extends Base {
    get cookiesExitButton() {
        return $('.modal-popup > a')
    }

    get loginField() {
        return $('[name="USER_LOGIN"]')
    }

    get passwordField() {
        return $('[name="USER_PASSWORD"]')
    }

    get loginButton() {
        return $('.btn.btn-default.bold')
    }

    get loginError() {
        return $('.alert.alert-danger')
    }

    get searchInputField() {
        return $('.search-input#title-search-input_fixed[placeholder="Поиск"]')
    }

    get searchButton() {
        return $('.search-button-div [type="submit"]')
    }

    get suggestCatalogMenu() {
        return $('.wrap > .dropdown-toggle[href="/catalog/"]');
    }

    get suggestCatalogItem() {
        return $$('.section_info a')
    }

    async getPageName(itemName) {
        return $(`//*[@id="pagetitle" and text()='${itemName}']`)
    }

    async cookiesButton() {
        await this.cookiesExitButton.waitForDisplayed();
        await this.cookiesExitButton.click();
    }

    async loginPage() {
        await header.openLoginMenu();
        await this.loginField.waitForDisplayed();
        await this.loginField.click();
        await this.loginField.setValue('User Name');
        await this.passwordField.waitForDisplayed();
        await this.passwordField.click();
        await this.passwordField.setValue('Password');
        await this.loginButton.click();
    }

    async searchField() {
        await header.writeTextInSearchPanel();
        await this.searchInputField.waitForDisplayed();
        await this.searchInputField.setValue('iPhone')
        await this.searchButton.waitForDisplayed;
        await this.searchButton.click()
    }

    async goToSuggestCatalogItemByNumber(suggestItemNumber, itemName) {
        await this.suggestCatalogMenu.waitForDisplayed();
        await this.suggestCatalogMenu.click();
        await this.suggestCatalogItem[suggestItemNumber].click();
        await (await this.getPageName(itemName).waitForDisplayed);
    }

}


module.exports = new MainPage();