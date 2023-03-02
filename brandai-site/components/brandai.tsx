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
    const [isLoading,setIsLoading] = React.useState(false);

    const onSubmit =()=>{
          setIsLoading(true)
          fetch(`${ENDPOINT}?prompt=${prompt}`).then(res => res.json()).then(onResult)
    }

    const onResult =(data:any) =>{
        setSnippet(data.snippet)
        setKeywords(data.keywords)
        sethasResult(true)
        setIsLoading(false)
    }
    
    const onReset =() =>{
      setPrompt("")
      sethasResult(false)
      setIsLoading(false)
  }
    
    let displayElement = null;
    if (hasResult){
         displayElement = <Result snippet={snippet} keywords={keywords} onBack={onReset} prompt={prompt}/>
    }else{

         displayElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={32} />
    }
    
     return (
         <>
          <h1>BrandAI</h1>
          {displayElement}
        </>
         
     )
}

export default BrandAI;