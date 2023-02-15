import { ChangeEvent, FormEvent, MouseEvent } from 'react';
import styles from './ButtonVariation.module.scss'

interface Props {
    variation?: 'primaryButton';
    label: string;
    disabled?: boolean;
    type?: 'submit' | 'button' | 'reset';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
   
}

const ButtonVariation = ({ variation, label, disabled, type, onClick}: Props) => {
    return (
        <>
            {variation == 'primaryButton' ?
                <button onClick={onClick} disabled={disabled} type={type}  className={styles.primaryButton}>
                    <span>
                        {label}
                    </span>
                </button>
                :
                <button onClick={onClick} className={styles.secundaryButton}>
                    <span>
                        {label}
                    </span>
                </button>}
        </>
    )
}

export default ButtonVariation