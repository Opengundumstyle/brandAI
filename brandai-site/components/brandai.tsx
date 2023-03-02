import React from "react";

const BrandAI: React.FC = () =>{
    const ENDPOINT:string =
      "https://h0zhaj68af.execute-api.us-west-1.amazonaws.com/prod/generate_snippet"
    
    const [prompt,setPrompt] = React.useState("");

    const onSubmit =()=>{
          fetch(`${ENDPOINT}?prompt=${prompt}`)
    }
    
     return (
         <>
          <h1>BrandAI</h1>
          <p>
            Tell me what your brand is about and I will generate copy and keywords for you.
          </p>
          <input type="text" 
            placeholder="protein powder" 
            value = {prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}/>
          <button onClick={onSubmit}>Submit</button>
        </>
     )
}

export default BrandAI;