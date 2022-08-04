import React from 'react';
import { Contact } from "../../models/ContactClass";
import ContactComponent from '../pure/forms/ContactComponent'

const ContactList = () => {
    const contact = new Contact('Ronald', 'David', 'ronald@david.com', true);
    return (
        <div>
        <ContactComponent contact={ contact }></ContactComponent>
        </div>
    );
}

export default ContactList;
