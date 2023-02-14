import styles from './Header.module.scss'
import logoMedicar from '../../../../assets/Logo.svg'
import { useEffect, useState } from 'react'
import { getUserSessionLocalStorage } from '../../../../context/AuthProvider/utils'
import { useAuth } from '../../../../context/AuthProvider/useAuth'
import { useNavigate } from 'react-router-dom'

function Header() {
    const [userName, setUserName] = useState('')
    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const name = getUserSessionLocalStorage()
        setUserName(name)
    }, [])

    function logoutSession () {
        logout()
        navigate(0)
    }
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <img src={logoMedicar} alt="Logo Medicar" className={styles.logo} />
            <div className={styles.infoProfile}>
                <span>{userName}</span>
                <button type='button' onClick={logoutSession} className={styles.buttonLogout}>Desconectar</button>
            </div>
        </header>
    </div>
  )
}

export default Header