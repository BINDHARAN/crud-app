import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Addcharacters component 
 export  function AddCharacters({initialList,setInitialList}) {
  const history = useHistory()

  const [characterName, setCharacterName] = useState("");
  const [characterPoster, setCharacterPoster] = useState("");
  const [characterSuperpower, setSuperPower] = useState("");
  const [characterWeapons, setCharacterWeapons] = useState("");

   return (
        <div className="character_form">
          {/*  Textfields (Material UI) */}
         <TextField
          label="Character Poster(url)"
          variant="outlined"
          onChange={(event) => setCharacterPoster(event.target.value)} />
    <TextField
          label="Character Name"
          variant="outlined"
          onChange={(event) => setCharacterName(event.target.value)} />
        <TextField
          label="Character Superpower"
          variant="outlined"
          onChange={(event) => setSuperPower(event.target.value)} />
        <TextField
          label="character Weapons"
          variant="outlined"
          onChange={(event) => setCharacterWeapons(event.target.value)} />
          <Button variant="contained" className="button" onClick={()=>{
           
           // new character
           const newCharacters = {
             name: characterName,
             post: characterPoster,
             Superpowers: characterSuperpower,
             Weapons: characterWeapons,
            
           };
      
           // copy previous characters and add new characters using speard operator
           setInitialList([...initialList, newCharacters]);
      
           //URL change
           history.push("/characters")

        }} 
        >
          Add Character
        </Button>
      </div>
   
   )
}