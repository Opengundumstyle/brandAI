import React from "react";
import Form from "./form";
import Result from "./result";
import Image from "next/image";
import logo from "../public/brandAIogo.svg"
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

    const gradientTextStyle =
    "text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto";
    
     return (
      <div className="h-screen flex">
      <div className="max-w-md m-auto p-2">
        <div className="bg-white p-6 rounded-md relative">
          <div className="flex flex-col items-center pb-6">
            <div className="flex justify-center mt-2 ">
              <Image src={logo} alt={"brandai-logo"} width={100} height={100}/>
            </div>
            <h2 className={gradientTextStyle + " font-light mt-0"}>BrandAI</h2>
            <div>Your AI branding assistant</div>
          </div>
          {displayElement}
        </div>
      </div>
    </div>
         
     )
}

export default BrandAI;