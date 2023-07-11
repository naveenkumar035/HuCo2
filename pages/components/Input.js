import { useState } from "react";
import PlusCircleIcon from "@heroicons/react/outline";

function Input(){
  
    const[input, setInput] = useState("");
    const[selectedFile, setSelectedFile] = useState("");

    const addImageToPage = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
    
        reader.onload = (readerEvent) => {
        
            setSelectedFile((readerEvent).target.resut);
        } ;
    }

    return(
        
       <div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="text"/>


        {selectedFile && (
            <div>
            <img
              src={selectedFile}
              alt=""
              />
           </div>
        )}
        <div>
            <PlusCircleIcon onClick = {() => filePickerRef.current.click()} onChange={addImageToPage}/>
            <input
              type="file"
              ref={filePickerRef}
              />
              
            
        </div>
        
        

        
           
       </div>
    )
}

export default Input;