const Base = require('../pageobjects/base');

class GadgetsPage extends Base {

    get FilterApplication() {
        return $('#smartfilter > div:nth-child(7) > div.bx_filter_block.limited_block > div.bx_filter_parameters_box_container > label:nth-child(2) > span > span')
    }

    //not clickable button(reconstruction)
    // get applyFilterButton() {
    //     return $('#set_filter')
    // }

    get itemWrap() {
        return $('#bx_3966226736_171985 > div > div.item_info.TYPE_1 > div.item-title > a')
    }
    get buyButton() {
        return $('#bx_117848907_171985_basket_actions > span')
    }

    get openBasket() {
        return $('.basket_count.small.clicked')
    }

    async choseBoxInFilter() {
        await this.FilterApplication.waitForDisplayed;
        await this.FilterApplication.click();
        // await this.applyFilterButton.waitForDisplayed();
        // await this.applyFilterButton.click();
        await this.itemWrap.waitForDisplayed();
        await this.itemWrap.click();
        await this.buyButton.waitForDisplayed();
        await this.buyButton.click();
        await browser.pause(2000);
        await this.openBasket.click();

    }
}

module.exports = new GadgetsPage();