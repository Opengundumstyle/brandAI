interface ResultProps{
     prompt:string;
     snippet:string;
     keywords:string[];
     onBack:any;
}

const Result: React.FC<ResultProps> = (props) =>{
    const keywordElements = []
    for(let i = 0; i < props.keywords.length;i++){
          const element = <div key={i} className='bg-teal-200 rounded-md p-1 text-teal-700 px-2 text-sm'>#{props.keywords[i]}</div>
          keywordElements.push(element)
    }

    const keywordsElementsHolder = <div className="flex flex-wrap gap-2">{keywordElements}</div>

    const resultSection =(label:string,body:any)=>{
          return( 
                   <div className="bg-slate-200 p-4 rounded-md my-3">
                        <div className="font-bold mb-1 text-sm">{label}</div>
                        {body} 
                   </div>
              )
      }

   return( <>
      <div>
              {resultSection(" Your prompt:", <div className="text-lg font-bold text-slate-800"> {props.prompt}</div>)}
              {resultSection("Branding snippet:",props.snippet)}  
              {resultSection(" Keywords:",keywordsElementsHolder)}
        <button  className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg text-white mt-5"
                 onClick={props. onBack}>Back</button>
   </div>
   </>
   )
}

export default Result;