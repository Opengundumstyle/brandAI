interface ResultProps{
     snippet:string;
     keywords:string[];
     onBack:any;
}

const Result: React.FC<ResultProps> = (props) =>{
   return( <>
   <div>
        Here are your result:
        <div>Snippet:{props.snippet}</div>
        <div>Keywords:{props.keywords.join(", ")}</div>
        <button onClick={props. onBack}>Back</button>
   </div>
   </>
   )
}

export default Result;