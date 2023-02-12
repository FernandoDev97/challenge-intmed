import styles from './DefaultLayout.module.scss'

type Props = {
  children: JSX.Element
}

const DefaultLayout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default DefaultLayout