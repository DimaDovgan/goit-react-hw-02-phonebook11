import React, { Component } from "react"
import { ContactList  } from "./person-list/person-list"
import { nanoid } from 'nanoid'
import { Filter } from "./filter"
import { Form } from "./Forma"
export class PhoneBook extends Component{
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    }
    
    hendelChangeInputFilter = (event) => {
        this.setState({ filter: event.currentTarget.value });
    }
    formSubmit = ({name,number}) => {
        const arr=[...this.state.contacts]
        let objContact = {
            name: name,
            id: nanoid(),
            number:number
        }
        let foo = this.state.contacts.some(contact =>  contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() );
        if (foo) {
            alert(`${name} is anlready in contacts npm run build`);
            return
        }
        arr.push(objContact);
        this.setState({contacts:arr})
    }
    filterArr = ()=> {
        return this.state.contacts.filter(contact=>contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    }
    deleteContact = (id) => {
        return () => {
            const newArr=this.state.contacts.filter(contact => {
                if (contact.id !== id) {
                    return contact
                }
            })
            this.setState({ contacts: newArr });

        }
    }
    
    render() {
       
        return <div>
            <h1>Phonebook</h1>
            <Form onSubmit={this.formSubmit }/>
            
            <h2>Contacts</h2>
            <Filter value={this.state.filter} func={this.hendelChangeInputFilter} />
            <ContactList  persons={this.filterArr()} deleteContact={ this.deleteContact}/></div>
        
        
        
    }
}


