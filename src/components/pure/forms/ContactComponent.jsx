import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/ContactClass.js';

const ContactComponent = ({ contact }) => {
  return (
    <div>
        <h2>Names: { contact.firstName } { contact.lastName }</h2>
        <h3>Email: { contact.email }</h3>
        <h3>Connect: { contact.connect ? 'Contacto en Línea' : 'Contacto No Disponible' } </h3>
    </div>
  );
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
}

export default ContactComponent;


