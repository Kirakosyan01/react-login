import { Route, Routes, useLocation } from 'react-router-dom'
import { LoginForm } from '../pages/LoginForm/LoginForm.jsx';
import { RegistrationForm } from '../pages/RegistrationForm/RegistrationForm.jsx';
import { Profile } from '../pages/Profile/Profile.jsx';

export function AppRouter() {
    const location = useLocation();
    return (
        <Routes>
            <Route path='/' element={<LoginForm />}/>
            <Route path='/registration' element={<RegistrationForm />}/>
            <Route path='/Profile' element={<Profile/>} />
        </Routes>
    )
}