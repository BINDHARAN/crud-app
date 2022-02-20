import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useParams,useHistory} from "react-router-dom";

// edit characters form and logic
 export  function EditCharacters({initialList,setInitialList}) {
    const { id } = useParams();
    const newList = initialList[id];

    const history = useHistory()
  const [characterName, setCharacterName] = useState(newList.name);
  const [characterPoster, setCharacterPoster] = useState(newList.post);
  const [characterSuperpower, setSuperPower] = useState(newList.Superpowers);
  const [characterWeapons, setCharacterWeapons] = useState(newList.Weapons);
  
   return (
        <div className="character_form">
          {/* Textfields (Material UI) */}
         <TextField
          label="Character Poster(url)"
          value={characterPoster}
          variant="outlined"
          onChange={(event) => setCharacterPoster(event.target.value)} />
    <TextField
          label="Character Name"
          value={characterName}
          variant="outlined"
          onChange={(event) => setCharacterName(event.target.value)} />
        <TextField
          label="Character Superpower"
          variant="outlined"
          value={characterSuperpower}
          onChange={(event) => setSuperPower(event.target.value)} />
        <TextField
          label="character Weapons"
          variant="outlined"
          value={characterWeapons}
          onChange={(event) => setCharacterWeapons(event.target.value)} />
        <Button variant="contained" className="button" onClick={()=>{
        
           const updatedCharacters = {
             name: characterName,
             post: characterPoster,
             Superpowers: characterSuperpower,
             Weapons: characterWeapons,
            };
          
            const copyList=[...initialList]
            copyList[id]=updatedCharacters
        
            setInitialList(copyList);
           history.push("/characters")

        }} 
        >
         SAVE
        </Button>
      </div>
   
   )
}