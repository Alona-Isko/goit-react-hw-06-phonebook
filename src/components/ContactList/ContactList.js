import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={s.ContactList__container}>
            {contacts.map(({ id, name, number }) => (
                <li
                    className={s.ContactList__item}
                    key={id}>
                    <p className={s.ContactList__text}>{name}: {number}</p>
                    <button
                        className={s.ContactList__button}
                        onClick={() => onDeleteContact(id)}>
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
};

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ),
//     onDeleteContact: PropTypes.func.isRequired,
// }

const getVisibleContacts = (allContacts, filter) => {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
    contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);