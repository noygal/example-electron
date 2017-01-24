class ContactsModel {

    constructor() {
        let contactsFromLocal = localStorage.getItem('slim-contacts')
        if (contactsFromLocal) contactsFromLocal = JSON.parse(contactsFromLocal)
        this.contacts = contactsFromLocal || []
    }

    create(first, last) {
        let newContact = new Contact(first, last)
        this.contacts.push( newContact )
        this.sort()
        this.save()
        return newContact
    }

    save() {
        localStorage.setItem('slim-contacts', JSON.stringify(this.contacts))
    }

    sort() {
        this.contacts = this.contacts.sort( (a,b) => {
            if (a.last > b.last) return 1
            if (b.last > a.last) return -1
            if (a.first > b.first) return 1
            if (b.first > a.first) return -1
            return 0
        })
    }

    remove(contact) {
        let i = this.contacts.indexOf(contact)
        this.contacts.splice(i, 1)
        this.save()
    }

}

class Contact {
    constructor (first = "Moshe", last = "Vilner") {
        this.first = first
        this.last = last
        this.email = 'moshe@vilner.com'
        this.rating = 2
        this.phones = []
    }

    addPhone(phone) {
        this.phones.push(number)
    }

    removePhone(phone) {
        let i = this.phones.indexOf(phone)
        this.phones.splice(i)
    }
}

class Phone {
    constructor(type = 'Mobile', number = '555-1234-567') {
        this.type = type
        this.number = number
    }
}

window.Phone = Phone
window.Contact = Contact
window.ContactsModel = new ContactsModel()



/**
 * Classic web component implementation
 */
var SlimHeaderProto = Object.create(HTMLElement.prototype);

SlimHeaderProto.createdCallback = function() {
    this.innerHTML = '<h1>Slim is awesome</h1>'
    this.style.width = '100%'
    this.style.display = 'block'
    this.style.textAlign = 'center'
}

document.registerElement('slim-header', {
    prototype: SlimHeaderProto
})









/**
 * Slim web component example
 */
Slim.tag('slim-app', class extends Slim {


    get template() {
        return `<div class="container"><slim-header></slim-header><slim-contacts /></div>`
    }

})


require('./slim-contacts')