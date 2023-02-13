import { Eye, EyeSlash } from 'phosphor-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logoMedicar from '../../../../assets/Logo.svg'
import ButtonVariation from '../../../../Components/ButtonVariation'
import Input from '../../../../Components/Input'
import MessageError from '../../../../Components/MessageError'
import { setUserLocalStorage } from '../../../../context/AuthProvider/utils'
import styles from './SignupForms.module.scss'

const SignupForms = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  function submitSignup(event: any) {
    event.preventDefault()
    const user ={
      name: name,
      email: email,
      password: password
    }
    if (!name || !email || !password || !passwordConfirm) {
      setError('Por favor, preencha todos os campos')
    } else if (password !== passwordConfirm) {
      setError("As senhas devem ser idênticas")
    } else {
      setUserLocalStorage(user)
      console.log("deu certo caba vei")
      setError('')
      //navigate('/signin')
    }

  }

  return (
    <div className={styles.container}>
      <img src={logoMedicar} alt="Logo Medicar" className={styles.logo} />
      <form className={styles.form}>
        {name && <label className={styles.name} htmlFor='name'>Nome</label>}
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='name'
          name='name'
          placeholder='Nome' />
        {email && <label className={styles.email} htmlFor='email'>Email</label>}
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          name='email'
          placeholder='Email'
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
        {passwordConfirm && <label className={styles.passwordConfim} htmlFor='passwordConfirm'>Confirme sua Senha</label>}
        <div className={styles.showPassword}>
          <Input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={showPasswordConfirm ? 'text' : 'password'}
            name='passwordConfirm' id='paspasswordConfirmsword'
            placeholder='Confirme sua senha'
          />
          <button disabled={!passwordConfirm && true} type='button' onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
            {showPasswordConfirm ? <Eye size={22} weight='fill' /> : <EyeSlash size={22} weight='fill' />}
          </button>
        </div>
        <MessageError>{error}</MessageError>
        <div className={styles.buttons}>
            <NavLink to='/signin'>
              <ButtonVariation label="Cancelar" />
            </NavLink>
            <ButtonVariation type='submit' onClick={submitSignup} variation="primaryButton" label="Confirmar" />
          </div>
      </form>
    </div>
  )
}

export default SignupForms