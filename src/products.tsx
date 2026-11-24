import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [contacts, setContacts] = useState<{ name: string; email: string }[]>(
    JSON.parse(localStorage.getItem("contacts") || "[]")
  );

  function addContact() {

    if (name === "" || email === "") return;

    const newContact = {
      name: name,
      email: email
    };

    const updatedContacts = [...contacts, newContact];

    setContacts(updatedContacts);

    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    setName("");
    setEmail("");
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <button onClick={addContact}>Add Contact</button>

      {contacts.map((contact, index) => (
        <div key={index}>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Contact;