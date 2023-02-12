import SignupForms from './components/SignupForms'
import styles from './Signup.module.scss'

const Signup = () => {
  return (
    <div className={styles.container}>
      <SignupForms/>
   </div>
  )
}

export default Signup