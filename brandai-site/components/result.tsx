interface ResultProps{
     prompt:string;
     snippet:string;
     keywords:string[];
     onBack:any;
}

const Result: React.FC<ResultProps> = (props) =>{
    const keywordElements = []
    for(let i = 0; i < props.keywords.length;i++){
          const element = <div key={i}>#{props.keywords[i]}</div>
          keywordElements.push(element)
    }
   return( <>
   <div>
        <div>
              <div>
               <b>Prompt:</b> 
              </div> 
             {props.prompt}
          </div>
        <div>
              <div>
               <b>Snippet:</b> 
              </div> 
             {props.snippet}
          </div>
          <div>
              <div>
               <b>Keywords:</b> 
              </div> 
             {keywordElements}
          </div>
        <button onClick={props. onBack}>Back</button>
   </div>
   </>
   )
}

export default Result;