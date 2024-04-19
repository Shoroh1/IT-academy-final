const Base = require('/base');

class MainPage extends Base {
    get cookiesExitButton(){
        return $('.modal-popup > a')
    }

    get lcButton() {
        return $('.personal_wrap');
    }
    get loginField() {
        return $('[name="USER_LOGIN"]')
    }
    get passwordField() {
        return $('[name="USER_PASSWORD"]')
    }
    get loginButton() {
        return $('div.but-r > div.buttons.clearfix > button')
    }

    async cookiesButton() {
        await this.cookiesExitButton.waitForDisplayed();
        await this.cookiesExitButton.click();
    }

}

module.exports = new MainPage();