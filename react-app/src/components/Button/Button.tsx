import React from 'react'
import styles from './Button.module.css';

interface Props {
	children: string;
	color?: 'primary' | 'secoundry' | 'danger';
	onClick: () => void;
}

const Button = ({ children, onClick, color="danger" }: Props) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{ children }</button>
  )
}

export default Button