import styles from './Signin.module.scss'
import LoginForms from './components/LoginForms'

const Signin = () => {
  return (
   <div className={styles.container}>
      <LoginForms/>
   </div>
  )
}

export default Signin