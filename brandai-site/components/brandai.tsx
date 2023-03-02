import React from "react";
import Form from "./form";
import Result from "./result";

const BrandAI: React.FC = () =>{
    const ENDPOINT:string =
      "https://h0zhaj68af.execute-api.us-west-1.amazonaws.com/prod/generate_snippet_keyword"
    
    const [prompt,setPrompt] = React.useState("");
    const [snippet,setSnippet] = React.useState("");
    const [keywords,setKeywords] = React.useState([]);
    const [hasResult,sethasResult] = React.useState(false);

    const onSubmit =()=>{
          fetch(`${ENDPOINT}?prompt=${prompt}`).then(res => res.json()).then(onResult)
    }

    const onResult =(data:any) =>{
        setSnippet(data.snippet)
        setKeywords(data.keywords)
        sethasResult(true)
    }
    let displayElement = null;
    if (hasResult){
         displayElement = <Result snippet={snippet} keywords={keywords}/>
    }else{

         displayElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} />
    }
    
     return (
         <>
          <h1>BrandAI</h1>
          {displayElement}
        </>
         
     )
}

export default BrandAI;