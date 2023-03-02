
interface FormProps{
     prompt:string;
     setPrompt:any;
     onSubmit:any;
}


const Form: React.FC<FormProps> = (props) =>{
    return <>
        <p>
            Tell me what your brand is about and I will generate copy and keywords for you.
          </p>
          <input type="text" 
            placeholder="protein powder" 
            value = {props.prompt}
            onChange={(e) => props.setPrompt(e.currentTarget.value)}/>
          <button onClick={props.onSubmit}>Submit</button>
       </>
}

export default Form; 