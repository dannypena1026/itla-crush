import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Navbar,Protected } from './components'
import { Home,Login,Register,Confessions,NewConfession,Profile } from './pages'
import './index.css'
export default function App(){return <BrowserRouter><AuthProvider><Navbar/><main className="shell"><Routes><Route path="/" element={<Home/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/confessions" element={<Confessions/>}/><Route path="/confessions/new" element={<Protected><NewConfession/></Protected>}/><Route path="/profile" element={<Protected><Profile/></Protected>}/><Route path="*" element={<Home/>}/></Routes></main></AuthProvider></BrowserRouter>}
