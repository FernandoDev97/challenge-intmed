import styles from './DefaultLayout.module.scss'

type Props = {
  children: JSX.Element
}

const DefaultLayout = ({children}: Props) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default DefaultLayout