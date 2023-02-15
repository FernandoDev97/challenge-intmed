import dayjs from 'dayjs'
import { Horse } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import ButtonVariation from '../../../../Components/ButtonVariation'
import MessageError from '../../../../Components/MessageError'
import { Api } from '../../../../services/api'
import styles from './ModalAppointments.module.scss'

interface ModalProps {
    onClose: () => void
}


const ModalAppointments = ({ onClose }: ModalProps) => {
    const [specialties, setSpecialties] = useState([])
    const [valueSpecialties, setValueSpecialties] = useState('')
    const [doctors, setDoctors] = useState([])
    const [valueDoctors, setValueDoctors] = useState('')
    const [schedules, setSchedules] = useState([])
    const [valuesData, setValuesData] = useState('')
    const [hours, setHours] = useState([])
    const [valuesHours, setValueHours] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        async function getValuesAppointmentBooking() {
            try {
                const responseSpecialties = await Api.get('especialidades/')
                const dataSpecialties = responseSpecialties.data 
                setSpecialties(dataSpecialties)
                const responseDoctors = await Api.get('medicos/')
                const dataDoctors = responseDoctors.data
                setDoctors(dataDoctors)
                const responseSchedules = await Api.get('agendas/')
                const dataSchedules = responseSchedules.data
                setSchedules(dataSchedules)
            } catch (error) {
                return error
            }
        }
        getValuesAppointmentBooking()
    }, [hours])
    
    const doctorsFilter = doctors?.filter((doctor: any) => 
        doctor.especialidade.nome === valueSpecialties)

    const schedulesFilter = schedules?.filter((schedule: any) => 
        schedule.medico.nome === valueDoctors && schedule.medico.especialidade.nome === valueSpecialties)
    
    useEffect(() => {
        if (valuesData) {
            const schedulesMap = schedulesFilter?.map((hour: any) => hour.horarios)
            schedulesMap?.map((hour: any) => {
                setHours(hour)
            })
        }
    }, [valuesData])

    async function handleSubmit(e:any) {
        e.preventDefault()
        try {
            if (!valueSpecialties || !valueDoctors || !valuesData || !valuesHours) {
                setError("Por favor, selecione todos os campos")
                return
            } else {
                await Api.post('consultas/', {agenda_id: 1, horario: valuesHours})
                setError('')
                toast.success("Consulta agendada com sucesso", {
                    style: {
                      background: "#34d399",
                      color: "#ffffff",
                      fontWeight: 500,
                      textAlign: "center",
                      fontSize: "15px",
                      padding: "7px",
                    },
                  });
            }
        } catch (error) {
            return error
        } finally {
            setLoading(false)
            setValueSpecialties('')
            setValueDoctors('')
            setValuesData('')
            setValueHours('')
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <h2>
                        Nova Consulta
                    </h2>
                    <form onSubmit={handleSubmit} className={styles.formSelect}>
                        <select value={valueSpecialties} name="specialties" id="specialties" onChange={(e) => setValueSpecialties(e.target.value)}>
                            <option value='' disabled hidden>Especialidades</option>
                            {specialties.map((specialtie: any) => (
                                <option key={specialtie.id} value={specialtie.nome}>{specialtie.nome}</option>
                            ))}
                        </select>
                        <select value={valueDoctors} onChange={(e) => setValueDoctors(e.target.value)} disabled={!valueSpecialties && true} name="doctors" id="doctors">
                            <option value='' disabled hidden>Médico</option>
                            {!doctorsFilter.length && (
                                <option value="" disabled>Sem médicos disponíveis nessa especialidade</option>
                            )}
                            {doctorsFilter.map((doctor: any) => (
                                <option key={doctor.id} value={doctor.nome}>{doctor.nome}</option>
                            ))}
                        </select>
                        <select value={valuesData} onChange={(e) => setValuesData(e.target.value)} disabled={!valueDoctors && true} name="data" id="data">
                            <option value='' disabled hidden>Data</option>
                            {!schedulesFilter.length && (
                                <option value="" disabled>Este médico não possui agenda disponível no momento</option>
                            )}
                            {schedulesFilter.map((data: any) => (
                                <option key={data.id} value={data.dia}>{dayjs(`${data.dia}`).format('DD/MM/YYYY')}</option>
                            ))}
                        </select>
                        <select value={valuesHours} onChange={(e) => setValueHours(e.target.value)} disabled={!valuesData && true} name="" id="">
                            <option value=''>Hora</option>
                            {hours?.map((hour: any) => (
                                <option key={hour} value={hour}>{hour}</option>
                            ))}
                        </select>
                        <MessageError>{error}</MessageError>
                        <div className={styles.buttons}>
                            <ButtonVariation label='Cancelar' onClick={onClose} />
                            <ButtonVariation disabled={loading && true} type='submit' label='Confirmar' variation='primaryButton' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalAppointments