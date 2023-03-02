interface ResultProps{
     snippet:string;
     keywords:string[];
}

const Result: React.FC<ResultProps> = (props) =>{
   return( <>
   <div>
        Here are your result:
        <div>Snippet:{props.snippet}</div>
        <div>Keywords:{props.keywords.join(", ")}</div>
   </div>
   </>
   )
}

export default Result;