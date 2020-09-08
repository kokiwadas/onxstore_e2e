export default class BasePage {
    static pause(ms) {
        cy.wait(ms)
    }

    static logInfo(message) {
        cy.log(message)
    }

    // resolution 375x812
    static setIphoneXViewport() {
        cy.viewport('iphone-x')
    }

    // resolution 768x1024
    static setTabletViewport() {
        cy.viewport('ipad-2')
    }

    // resolution 1920x1080 - FullHD
    static setFullHdViewport() {
        cy.viewport(1920, 1080)
    }

    // resolution 1366x768 - HD
    static setFullHdViewport() {
        cy.viewport(1366, 768)
    }
    // resolution 360x640 - e.g. Samsung Galaxy S7
    // resolution 375x667 - e.g. iPhone 8
    // resolution 414x896 - e.g. iPhone 11

}