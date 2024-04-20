const Base = require('../base')

class NavBar extends Base {
    constructor() {
        super();
        this.catalogMenu = async() => $('.wrap > .dropdown-toggle[href="/catalog/"]');
        this.dropDownMenuSelector = async() => $('.menu-item >a[href="/catalog/smartfony/"]')
    }
}