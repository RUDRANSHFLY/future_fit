'use client'
import { useState , useEffect } from 'react'


interface ClientWrapperProps {
    children?: React.ReactNode
}


const ClientWrapper = ({children} :ClientWrapperProps) => {

    const [client, setClient] = useState(false);

    useEffect(() => {
      setClient(true)
    }, [])
    

return (
    <div>
        <h1>
            {client ? children : 'Prerendered'}
        </h1>
    </div>
  )
}

export default ClientWrapper