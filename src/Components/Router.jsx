import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationForm from './RegistrationForm.tsx'
import Thanks from './Thanks'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route path="/thanks" element={<Thanks />} />
            </Routes>
        </div>
    )
}

export default Router
