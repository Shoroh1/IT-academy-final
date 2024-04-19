class Base {
    async navigate(url) {
        await this.browser.url(url)
    }
}

module.exports = Base;