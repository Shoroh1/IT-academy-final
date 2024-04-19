const mainPage = require('/pageobject/mainPage')

describe('alloplus.by test', () => {
    it('should close cookies', async () => {
        await mainPage.navigate('https://alloplus.by/')
        await mainPage.cookiesExitButton();
    });
    // it('should close cookies', async () => {
    //     await browser.url('https://alloplus.by/');
    //     const cookiesExitButton = await $('.modal-popup > a').click();
    // });
    //
    //
    // it('should error message to login page ', async () => {
    //     await browser.url('https://alloplus.by/');
    //     const lcButton = await $('.personal_wrap').click();
    //     const loginField = await $('[name="USER_LOGIN"]').setValue('User Name');
    //     const passwordField = await $('[name="USER_PASSWORD"]').setValue('Password');
    //     const loginButton = await $('div.but-r > div.buttons.clearfix > button').click();
    //     const loginError = await $('#ajax_auth > div > div.wrap_md1 > div > div > div > p');
    //     expect(await loginError.getText()).toEqual('Неверный логин или пароль');
    // });
    //
    // it('should search input', async () => {
    //     await browser.url('https://alloplus.by/');
    //     const clickInputField = await $('.search-input#title-search-input_fixed[placeholder="Поиск"]').setValue('iPhone')
    //     const searchButton = await $('.search-button-div [type="submit"]').click();
    //     expect(await browser.getUrl()).toEqual('https://alloplus.by/catalog/?q=iPhone&s=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA');
    //
    // });
    //
    // it('should how basket open', async () => {
    //     await browser.url('https://alloplus.by/');
    //     const basketClick = await $('#basket_line > div > div > div').click();
    //     const emptyBasket = await $('font.errortext');
    //     expect(await emptyBasket.getText()).toEqual('Ваша корзина пуста');
    // });
    //
    // it('should open the catalog, add the product to the cart and check its availability there', async () => {
    //     await browser.url('https://alloplus.by/');
    //     const catalogButton = await $('#header > header > div.menu-row.middle-block.bgcolored > div > div > div > div > nav > div > table > tbody > tr > td.menu-item.dropdown.catalog.wide_menu > div > a').click();
    //     const productButton = await $('#bx_1847241719_236 > table > tbody > tr:nth-child(1) > td.section_info > ul > li.name > a').click();
    //     await browser.scroll(0, 900);
    //     const phoneButton = await $('#bx_3966226736_172287 > div > div.item_info.TYPE_1 > div.item-title > a').click();
    //     const buyButton = await $('#bx_117848907_172287_basket_actions').click();
    //     const basketText = await $('#bx_117848907_172287_basket_actions > a > span')
    //     await browser.pause(3000);
    //     expect(await basketText.getText()).toEqual('В корзине');
    // });
})

