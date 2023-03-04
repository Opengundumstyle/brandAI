
interface FormProps{
     prompt:string;
     setPrompt:any;
     onSubmit:any;
     isLoading:boolean;
     characterLimit:number;
}


const Form: React.FC<FormProps> = (props) =>{
     
     let submit = 'Submit'
     const isPromptValid = props.prompt.length <  props.characterLimit;

     const updatePromptVal = (txt:string) =>{
           if(txt.length <= props.characterLimit){
            props.setPrompt(txt)
           }
     }

     const displayLoading = (loading:boolean) =>{
            if(loading) submit = 'Loading ...'
            return submit
     }
    

     let statusColor= "text-slate-500"
     let statusText = null
     if(!isPromptValid){
        statusColor = "text-red-300"
        statusText =`Input must be less than ${props.characterLimit} characters.`
     }
    return <>
          <div className="mb-6 " >
            <p className="font-medium text-slate-600">
              Tell me what your brand is about and I will generate copy and keywords for you.
            </p>
          </div>
          <input 
            className="p-2 w-full rounded-md outline outline-offset-2 outline-slate-400 focus:outline-cyan-400/100 focus:outline text-slate-700"
            type="text" 
            placeholder="cup of proteins nutrition" 
            value = {props.prompt}
            onChange={(e) => updatePromptVal(e.currentTarget.value)}/>
            <div className={"flex justify-between my-2 text-sm " + statusColor}>
              <div>{statusText}</div>
               <div>{props.prompt.length}/{props.characterLimit}</div>
            </div>
          <button 
          className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg text-white mt-5"
          onClick={props.onSubmit} disabled={props.isLoading ||!isPromptValid}>{displayLoading(props.isLoading)}</button>
       </>
}

export default Form; 