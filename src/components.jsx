import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase/config'
import { useAuth } from './context/AuthContext'
export function Loading({text='Cargando...'}){return <div className="loading"><i />{text}</div>}
export function Protected({children}){const{user,loading}=useAuth(),location=useLocation();return loading?<Loading/>:user?children:<Navigate to="/login" state={{from:location}} replace/>}
export function Navbar(){const{user}=useAuth(),nav=useNavigate();return <header><Link className="brand" to="/">ITLA <b>Crush</b></Link><nav><NavLink to="/">Inicio</NavLink><NavLink to="/confessions">Confesiones</NavLink>{user?<><NavLink to="/confessions/new">Nueva confesión</NavLink><NavLink to="/profile">Perfil</NavLink><button onClick={async()=>{await signOut(auth);nav('/')}}>Cerrar sesión</button></>:<><NavLink to="/login">Login</NavLink><NavLink className="cta" to="/register">Registro</NavLink></>}</nav></header>}
export function Card({item}){const date=item.createdAt?.toDate?new Intl.DateTimeFormat('es-DO',{dateStyle:'long',timeStyle:'short'}).format(item.createdAt.toDate()):'Recién publicada';return <article className="card"><div><strong>Para: {item.recipientName}</strong><em className={item.isPublic?'public':'private'}>{item.isPublic?'Pública':'Privada'}</em></div><p>“{item.body}”</p><footer><span>{item.anonymous?'🕊️ Anónimo':`Por ${item.authorName||item.authorUsername}`}</span><time>{date}</time></footer></article>}
export function Empty(){return <div className="empty"><span>💌</span><h3>Aún no hay confesiones</h3><p>Sé la primera persona en dejar un mensaje especial.</p></div>}
