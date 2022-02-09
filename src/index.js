import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'


timer('31 january 2022 23:16:00')
menu()
modal()
tabs()
slider()
calc(100)
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})