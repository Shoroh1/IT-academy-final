describe ('alloplus test', () => {
    it('should error message to login page ', async () => {
        await browser.url('https://alloplus.by/');
        const lcButton = await $('.personal_wrap').click();
        const loginField = await  $('[name="USER_LOGIN"]').setValue('User Name');
        const passwordField = await $('[name="USER_PASSWORD"]').setValue('Password');
        const loginButton = await $('div.but-r > div.buttons.clearfix > button').click();
        const loginError = await $('#ajax_auth > div > div.wrap_md1 > div > div > div > p');
        expect(await loginError.getText()).toEqual('Неверный логин или пароль');
    });

    it
})

