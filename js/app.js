import {Click} from "./module/Click.js"


const menu = new Click({
    target: '.menu__icon',
    parent: '.menu',
    class: 'menu-open',
    lock: true
})

menu.listenEvent()