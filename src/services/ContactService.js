import axios from "axios";

export class ContactService {
    static serverURL = 'http://localhost:8080'

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`
        return axios.get(dataURL)
    }

    static getAllContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.get(dataURL)
    }

    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts/`
        return axios.post(dataURL,contact)
    }

    static updateContact(contact,contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.post(dataURL,contact,contactId)
    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.delete(dataURL,contactId)
    }

    static getAllGroups(){
        let dataURL = `${this.serverURL}/groups/`
        return axios.get(dataURL)
    }
}