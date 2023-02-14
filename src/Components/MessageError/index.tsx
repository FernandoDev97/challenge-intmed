import syles from './MessageError.module.scss'

type Props = {
    children: string
}

const MessageError = ({children}: Props) => {
  return <span className={syles.messageError}>{children}</span>
}

export default MessageError