import styles from './ClinicAppointments.module.scss'
import { Plus, X } from 'phosphor-react'
import { ReactNode, useEffect, useState } from 'react'
import { Api } from '../../../../services/api'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

interface AppointmentsProps {
    specialty: string;
    professional: string;
    data: string;
    time: string
    id: number
    map: (appointment: any) => ReactNode
}

const ClinicAppointments = () => {

    const [appointments, setAppointments] = useState<AppointmentsProps | null>()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAppointments() {
            try {
                const { data } = await Api.get('consultas/')
                setAppointments(data)
            } catch (error) {
                return error
            }    
        }   
        getAppointments()
    }, [])

    async function deleteAppointments() {
        try {
            await Api.delete(`consultas/${appointments?.id}`)
        } catch (error) {
            return error
        }
        navigate(0)
    }

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
                {appointments?.map((appointment: any, index: any) => (
                    <div key={`${appointment.id}` + `${index}`} className={styles.appointments}>
                    <div className={styles.list}>
                        <span>{appointment.medico.especialidade.nome}</span>
                        <span>{appointment.medico.nome}</span>
                        <span>{dayjs(`${appointment.dia}`).format('DD/MM/YYYY')}</span>
                        <span>{appointment.horario}</span>
                    </div>
                    <button onClick={deleteAppointments} type='button'>
                        <X size={12} weight='bold' />
                        Desmarcar
                    </button>
                </div>
                ))}
            
            </div>
        </div>
    )
}

export default ClinicAppointments