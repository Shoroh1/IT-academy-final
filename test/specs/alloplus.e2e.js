describe ('alloplus.by test', () => {

    it('should close cookies', async() => {
        await browser.url('https://alloplus.by/');
        const closeCookies = await $('.modal-popup > a').click();
    });


    it('should error message to login page ', async () => {
        await browser.url('https://alloplus.by/');
        const lcButton = await $('.personal_wrap').click();
        const loginField = await  $('[name="USER_LOGIN"]').setValue('User Name');
        const passwordField = await $('[name="USER_PASSWORD"]').setValue('Password');
        const loginButton = await $('div.but-r > div.buttons.clearfix > button').click();
        const loginError = await $('#ajax_auth > div > div.wrap_md1 > div > div > div > p');
        expect(await loginError.getText()).toEqual('Неверный логин или пароль');
    });

    it('should search input', async () => {
        await browser.url('https://alloplus.by/');
        const clickInputField = await $('.search-input#title-search-input_fixed[placeholder="Поиск"]').setValue('iPhone')
        const searchButton = await $('.search-button-div [type="submit"]').click();
        await browser.scroll(0, 600);
        expect(await browser.getUrl()).toEqual('https://alloplus.by/catalog/?q=iPhone&s=%D0%9F%D0%BE%D0%B8%D1%81%D0%BA');
        await browser.pause(5000);
    });


})

