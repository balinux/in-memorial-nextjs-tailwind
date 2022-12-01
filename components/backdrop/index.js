import React from 'react'
import { motion } from "framer-motion";
function Backdrop({ children, onClick }) {
    return (
        <motion.div
            className='fixed top-0 left-0 h-screen w-screen bg-black/50 flex flex-row items-center justify-center'
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* <p className=' text-white'>tes</p> */}

            {children}
        </motion.div>
    )
}

export default Backdrop