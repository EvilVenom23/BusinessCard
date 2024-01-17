import { useState } from "react";

export default function CreateCard (){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [src, setSrc] = useState("");
    const [interest, setInterest] = useState([]);
    const [linkt, setLinkt] = useState("");
    const [linkb, setLinkb] = useState("");
    


    return <div>
        <input  style={{padding : 10,
                        margin : 10}}  type = "text" placeholder="name"
                        onClick={(e) => {
                            const value = e.target.value;
                            setName(value);
                        }}></input> <br></br>

        <input style={{padding : 10,
                 margin : 10}}  type = "text" placeholder="discription"
                 onClick={(e) => {
                        const value = e.target.value;
                        setDescription(value);
                 }}></input><br></br>
                 <input style={{padding : 10,
                 margin : 10}}  type = "text" placeholder="src"
                 onClick={(e) => {
                        const value = e.target.value;
                        setSrc(value);
                 }}></input><br></br>
            <div>
            <div>Interests</div>
            <input style={{padding : 7,
                 margin : 7}}  type = "text" placeholder="Interest 1"
                 onClick={(e) => {
                        const value = e.target.value;
                        setInterest((prevInterest) => {
                        const newInterest = [...prevInterest];
                        newInterest[0] = value;
                        return newInterest;
                                   });
                 }}></input><br></br>
                 <input style={{padding : 7,
                 margin : 7}}  type = "text" placeholder="Interest 2"
                 onClick={(e) => {
                        const value = e.target.value;
                        setInterest((prevInterest) => {
                        const newInterest = [...prevInterest];
                        newInterest[1] = value;
                        return newInterest;
                                   });
                 }}></input><br></br>
            </div>
            <input style={{padding : 10,
                 margin : 10}}  type = "text" placeholder="tinder"
                 onClick={(e) => {
                        const value = e.target.value;
                        setLinkt(value);
                 }}></input><br></br>
                 <input style={{padding : 10,
                 margin : 10}}  type = "text" placeholder="bumble"
                 onClick={(e) => {
                        const value = e.target.value;
                        setLinkb(value);
                 }}></input><br></br>

                 
        

        <button style={{padding : 10,
                 margin : 10}} 
                 onClick={ () => {
                    fetch("http://localhost:3000/add", {
                        method : "Post",
                        body : JSON.stringify({
                            name,
                            description,
                            src,
                            interest,
                            linkt,
                            linkb
                        }),
                        headers : {
                            "content-Type" : "application/json"
                        }
                    })
                    .then( async(res) => {
                        const json = await res.json();
                        alert("Card Added");
                    })
                 }} >Add  Card  </button>
    </div>
}