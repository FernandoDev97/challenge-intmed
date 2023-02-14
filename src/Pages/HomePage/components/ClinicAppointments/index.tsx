import styles from './ClinicAppointments.module.scss'
import { Plus, X } from 'phosphor-react'
const ClinicAppointments = () => {
    return (
        <div className={styles.container}>
            <div className={styles.newAppointments}>
                <h1>
                    Consulta clínica
                </h1>
                <button type='button'>
                    <Plus size={14} weight='bold' />
                    Nova consulta
                </button>
            </div>
            <div className={styles.menu}>
                <span>Epecialidade</span>
                <span>Profissional</span>
                <span>Data</span>
                <span>Hora</span>
                <span>&nbsp;</span>
            </div>
            <div className={styles.containerAppointments}>
                <div className={styles.appointments}>
                    <div className={styles.list}>
                        <span>Cardiologia</span>
                        <span>Dr. Cleber de Souza</span>
                        <span>01/01/23</span>
                        <span>13:00</span>
                    </div>
                    <button type='button'>
                        <X size={14} weight='bold' />
                        Desmarcar
                    </button>
                </div>
                <div className={styles.appointments}>
                    <div className={styles.list}>
                        <span>Cardiologia</span>
                        <span>Dr. Cleber de Souza</span>
                        <span>01/01/23</span>
                        <span>13:00</span>
                    </div>
                    <button type='button'>
                        <X size={14} weight='bold' />
                        Desmarcar
                    </button>
                </div>
                <div className={styles.appointments}>
                    <div className={styles.list}>
                        <span>Cardiologia</span>
                        <span>Dr. Cleber de Souza</span>
                        <span>01/01/23</span>
                        <span>13:00</span>
                    </div>
                    <button type='button'>
                        <X size={14} weight='bold' />
                        Desmarcar
                    </button>
                </div>
                <div className={styles.appointments}>
                    <div className={styles.list}>
                        <span>Cardiologia</span>
                        <span>Dr. Cleber de Souza</span>
                        <span>01/01/23</span>
                        <span>13:00</span>
                    </div>
                    <button type='button'>
                        <X size={14} weight='bold' />
                        Desmarcar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClinicAppointments