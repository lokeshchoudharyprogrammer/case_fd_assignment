import React, { createContext, useState } from 'react'


export const mycontext = createContext()

const MyContext = ({ children }) => {
    const [data, SetData] = useState([])

    return (
        <mycontext.Provider value={{ data, SetData }}>
            {children}
        </mycontext.Provider>
    )
}

export default MyContext
