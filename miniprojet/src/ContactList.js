import MyContacts from './myContacts';
import './contacts.css';

const ContactList = () => {
    const my_contacts = MyContacts.map((item, index) => <tr key={index}><td>{item[0]}</td><td>{item[1]}</td><td>{item[2]}</td></tr>)
    return (
        <table className="styled-table">
            <thead>
                <tr className="active-row">
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {my_contacts}
            </tbody>
        </table>
    )
}

export default ContactList;