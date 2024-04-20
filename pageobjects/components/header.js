const Base = require('../base')

class Header extends Base {
    constructor() {
        super();
        this.loginMenu = async () => $('.personal.top.login.twosmallfont');
        this.searchPanel = async () => $('.search-input#title-search-input_fixed[placeholder="Поиск"]')
    }

    async openLoginMenu() {
        await (await this.loginMenu()).waitForDisplayed();
        await (await this.loginMenu()).click();
    }
    async writeTextInSearchPanel(){
        await (await this.searchPanel()).waitForDisplayed();
        await (await this.searchPanel()).click();
    }
}

module.exports = new Header();