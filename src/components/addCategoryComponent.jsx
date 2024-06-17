import { useState } from "react"

export const AddCategoryComponent = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState("")

    const onChangeInput= ({target}) => {
        setinputValue(target.value)
    }
    
    const onSubmitEvent = (event) => {
        event.preventDefault()
        const finalInputValue = inputValue.trim()
        
        if (finalInputValue.length <= 1) return;
        
        onAddCategory(finalInputValue)
        setinputValue("")
    }
    
    return (
      <form onSubmit={event => onSubmitEvent(event)}> 
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChangeInput} 
            />

        </form> 
  )
}
