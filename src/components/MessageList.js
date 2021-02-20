<<<<<<< HEAD
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
=======
import React from 'react'

const MessageList = () => {
  return (
    <div>
      MESSAGE
      MESSAGE
      MESSAGE
    </div>
  )
}

export default MessageList
>>>>>>> 9fabcc3d30285f24caa055426186c57e18063146
