import { useEffect, useState } from 'react'
import logoMedicar from '../../../../assets/Logo.svg'
import ButtonVariation from "../../../../Components/ButtonVariation"
import Input from "../../../../Components/Input"
import styles from './LoginForms.module.scss'
import { Eye, EyeSlash } from 'phosphor-react'
import MessageError from '../../../../Components/MessageError'
import { NavLink, useNavigate } from 'react-router-dom'
import { getUserLocalStorage } from '../../../../context/AuthProvider/utils'
import { useAuth } from '../../../../context/AuthProvider/useAuth'

const LoginForms = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const auth = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [navigate])

  async function submitSignin(event: any) {
    event.preventDefault()
    // ver como pegar um elemnto por vez do localStorage 
    try {
      if (!email || !password) {
        setError('Por favor, preencha todos os campos')
      } else {
        await auth.authenticate(email, password)
        console.log(auth.email, auth.password, auth.token)
        setError('')
        navigate('/')
      }
    } catch (error) {
      setError('Desculpe, tente novamente mais tarde')
    }


  }

  return (
    <div className={styles.container}>
      <img src={logoMedicar} alt="Logo Medicar" className={styles.logo} />
      <div>
        <form className={styles.form}>
          {email && <label className={styles.email} htmlFor='email'>Email ou Login</label>}
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='email'
            placeholder='Email ou Login'
          />
          {password && <label className={styles.password} htmlFor='password'>Senha</label>}
          <div className={styles.showPassword}>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              name='password' id='password'
              placeholder='Senha'
            />
            <button disabled={!password && true} type='button' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={22} weight='fill' /> : <EyeSlash size={22} weight='fill' />}
            </button>
          </div>
          <div className={styles.containerCheck}>
            <input type="checkbox" className={styles.rememberPassword} id="checkbox" />
            <label htmlFor="checkbox">
              <span className={styles.checkbox}>
              </span>
            </label>
            <span className={styles.label}>Lembrar minha senha</span>
          </div>

          <MessageError>{error}</MessageError>
          <div className={styles.buttons}>
            <NavLink to='/signup'>
              <ButtonVariation label="Criar conta" />
            </NavLink>
            <ButtonVariation type='submit' onClick={submitSignin} variation="primaryButton" label="Acessar" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForms