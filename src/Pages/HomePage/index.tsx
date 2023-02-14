import ClinicAppointments from "./components/ClinicAppointments"
import Header from "./components/Header"
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ClinicAppointments />
    </div>
  )
}

export default HomePage