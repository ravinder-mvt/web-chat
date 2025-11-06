// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import Dashboard from './Dashboard/Dashboard'
import AppLayout from './layouts/AppLayout'
import IsAuthenticate from './protectedRoute/IsAuthenticate'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />

        {/* Protected App Routes with AppLayout */}
        <Route element={<IsAuthenticate />}>

          <Route
            path="/dashboard"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
