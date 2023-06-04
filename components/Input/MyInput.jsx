import React from 'react';
import s from './MyInput.module.scss'
import { motion } from 'framer-motion'

// import profile from '../../../assets/header/Profile.png'


const MyInput = ({ style, ...props }) => {
	return (
		<motion.input
			initial="hidden"
			transition={{ duration: 0.7 }}
			whileInView="visible"
			variants={{
				hidden: { scale: 0 },
				visible: { scale: 1 },
			}}
			style={props.style}
			className={s.MyInput} {...props} placeholder={props.placeholder} type={props.type} />
	);
};

export default MyInput;