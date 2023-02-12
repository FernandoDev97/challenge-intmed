import { ButtonHTMLAttributes, InputHTMLAttributes } from "react"
import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


const Input = ({...props}: InputProps) => {
  return (
    <>
      <input {...props} className={styles.input_globals}/> 
    </>
     
  )
   

}

export default Input