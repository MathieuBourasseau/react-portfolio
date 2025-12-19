import React from 'react'
import { motion } from "framer-motion"
import { IoMdSend } from "react-icons/io";

export default function Contact() {
    return (
        <section className=" relative z-20 text-center flex flex-col gap-6 py-[5%] lg:py-8 px-4 lg:px-10 xl:px-[10%]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl text-white font-bold lg:text-3xl mb-4"
            >
                Contact
            </motion.h1>
        
            {/* FORM */}
            <form 
                action="" 
                className=" gap-6 py-8 p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border shadow-[0_0_15px_rgba(44,62,80,0.6)] border-[#2C3E50] flex flex-col justify-center items-center">
                <div>
                    <p className="text-white">image</p>
                </div>

                {/* FIELDSET */}

                <fieldset className="flex flex-col gap-6 w-[90%]">
                   
                   {/* NAME AND FIRST NAME */}
                   <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 items-start">
                            <label htmlFor="" className="text-white">Prénom :</label>
                            <input type="text" className="w-full bg-primary-grey rounded-lg py-2 px-2" placeholder="prénom" />
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <label htmlFor="" className="text-white">Nom :</label>
                            <input type="text" className="w-full bg-primary-grey rounded-lg py-2 px-2" placeholder="prénom" />
                        </div>
                   </div>

                   {/* EMAIL */}
                   <div className="flex flex-col gap-2 items-start">
                        <label htmlFor="" className="text-white">Email :</label>
                        <input type="email" className="w-full bg-primary-grey rounded-lg py-2 px-2" placeholder="jaimelecode@mail.com" />
                   </div>

                   {/* MESSAGE */}
                   <div className="flex flex-col gap-2 items-start">
                         <label htmlFor="" className="text-white">Votre message : </label>
                         <textarea 
                            name="" 
                            id="" 
                            className="w-full min-h-[130px] bg-primary-grey rounded-lg py-2 px-2"></textarea>
                   </div>

                   {/* BUTTON */}
                   <div>
                        <button 
                            className="text-white bg-primary-orange py-2 px-4 rounded-lg">
                            <div className="flex items-center gap-4 font-bold">
                                <p>Envoyer</p>
                                <IoMdSend />
                            </div>
                        </button>
                   </div>
                </fieldset>
            </form>
        </section>
    )
}
