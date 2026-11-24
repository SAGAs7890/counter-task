import contact from "./contact.json"
import { useState } from "react";
function Contact (){
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user") || "null")
);
const [names,setnames]=useState("");
const [email,setemails]=useState("");
const [ID,setID]=useState("")
const handleSubmit = () => {
  const newContact = {
    ID: ID,
    contact: names,
    email: email
  };

  localStorage.setItem("user",JSON.stringify(newContact));

    setUser(newContact);
};
return (


<div>
  
    <div>

<input
type="text"
placeholder="enter name bro"
value={names}
onChange={(e)=>setnames(e.target.value)}
/>


<div>
<input
type="text"
placeholder="enter email"
value={email}
onChange={(e)=>setemails(e.target.value)}
/>
<div>
<input
type="text"
placeholder="enter num"
value={ID}
onChange={(e)=>setID(e.target.value)}
/></div>
</div>

    </div>
   
<button onClick={handleSubmit}>Submit</button>  
     <h1>Contacts</h1>
   
   


{user && (
  <div>
    <h4>ID: {user.ID}</h4>
    <h4>Name: {user.contact}</h4>
    <h4>Email: {user.email}</h4>
  </div>
)}
    {/* <h2>{email}</h2> */}
{/* {contact.map((sg, index) => (
                <div key={index}>
        <h4>ID: {sg.ID}</h4>
        <h6>Contact: {sg.contact}</h6>
        <h6>email: {sg.email}</h6>
                </div>
            ))}  */}
        </div>

)

}
export default Contact