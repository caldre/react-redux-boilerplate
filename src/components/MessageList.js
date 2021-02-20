import React from "react"

const Messagelist = (props) => { 

    const messages = props.messages.map((message) => {
        return (<div>
        <div>{message}</div>
        <br/>
        </div>)
    
    })

return (
<div>{messages}
</div>
)

}

export default Messagelist 
