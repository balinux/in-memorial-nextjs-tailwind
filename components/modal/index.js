import React from 'react'
import { motion } from "framer-motion";
import Backdrop from '../backdrop';
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                duration: 0.5
            },
            y: {
                repeat: Infinity,
                duration: 0.25
            }
        }
    }
}
function Modal({ handleClose, text }) {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className=" bg-white m-auto px-1 rounded-md flex flex-col items-center w-1/3 h-1/5 justify-center"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <motion.div variants={loaderVariants} animate="animationOne" className=' w-5 h-5 bg-[#587462] rounded-full'></motion.div>
                <p className=' text-gray-500 mt-10'>Loading...</p>
                {/* <button onClick={handleClose}> Close</button> */}

            </motion.div>
        </Backdrop>
    )
}

export default Modal