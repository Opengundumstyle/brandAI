
interface FormProps{
     prompt:string;
     setPrompt:any;
     onSubmit:any;
     isLoading:boolean;
     characterLimit:number;
}


const Form: React.FC<FormProps> = (props) =>{
   
     const isPromptValid = props.prompt.length <  props.characterLimit;
     const updatePromptVal = (txt:string) =>{
           if(txt.length <= props.characterLimit){
            props.setPrompt(txt)
           }
     }
     
    return <>
        <p className="">
            Tell me what your brand is about and I will generate copy and keywords for you.
          </p>
          <input type="text" 
            placeholder="protein powder" 
            value = {props.prompt}
            onChange={(e) => updatePromptVal(e.currentTarget.value)}/>
            <div>{props.prompt.length}/{props.characterLimit}</div>
          <button onClick={props.onSubmit} disabled={props.isLoading ||!isPromptValid}>Submit</button>
       </>
}

export default Form; 