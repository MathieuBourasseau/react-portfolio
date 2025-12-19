import React, { useState } from 'react'
import { motion } from "framer-motion"
import { IoMdSend, IoMdMail } from "react-icons/io"; 
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

type Inputs = {
    firstname: string;
    lastname:string;
    email: string;
    message: string;
}

export default function Contact() {

    const fieldStyle = `
        w-full 
        bg-black/20                 
        text-white 
        rounded-xl 
        p-4 
        border border-white/10      
        outline-none                
        placeholder:text-primary-grey
        transition-all              
        duration-300                
        ease-in-out
        focus:bg-black/40           
        focus:border-primary-grey
        focus:ring-4                
        focus:ring-primary-grey/20 
    `;


    // Create an empty object with some functions inside it
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);

        try {
            await emailjs.send('service_3919mtf', 'template_39pq7mn', data, 'bPRtugxDWegGjr0Kt');
            toast.success("Message envoyé !");
            reset();
        } catch (error) {
            toast.error("Erreur lors de l'envoi.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="relative z-20 text-center flex flex-col gap-6 py-[5%] lg:py-8 px-4 lg:px-10 xl:px-[10%]">

            <Toaster position="top-center" richColors />
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl text-white font-bold lg:text-3xl mb-4"
            >
                Contact
            </motion.h1>
        
            {/* FORM CONTAINER */}
            <form 
                className="gap-6 py-8 p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border shadow-[0_0_15px_rgba(44,62,80,0.6)] border-[#2C3E50] flex flex-col justify-center items-center w-full max-w-2xl mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* ICONE EN HAUT */}
                <div className="bg-gradient-to-br from-primary-orange/20 to-transparent p-4 rounded-full border border-white/5">
                    <IoMdMail className="text-3xl text-primary-orange" />
                </div>

                {/* FIELDSET */}
                <fieldset className="flex flex-col gap-6 w-[90%] text-left">
                    
                    {/* NAME AND FIRST NAME */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-2 items-start w-full">
                            <label htmlFor="firstname" className="text-white ml-1 font-medium text-sm">Prénom</label>
                            <input 
                                type="text" 
                                className={`${fieldStyle} ${errors.firstname ? 'border-red-500' : ''}`}
                                placeholder="Pierre"
                                {...register("firstname", { required: "Ce champs est requis."})}
                            />
                            {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname.message}</span>}
                        </div>
                        <div className="flex flex-col gap-2 items-start w-full">
                            <label htmlFor="lastname" className="text-white ml-1 font-medium text-sm">Nom</label>
                            <input 
                                type="text" 
                                className={`${fieldStyle} ${errors.lastname? 'border-red-500' : ''}`}
                                placeholder="Dupont" 
                                {...register("lastname", { required: "Ce champs est requis."})}
                            />
                            {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname.message}</span>}
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-2 items-start">
                        <label htmlFor="mail" className="text-white ml-1 font-medium text-sm">Email</label>
                        <input 
                            type="email" 
                            className={`${fieldStyle} ${errors.email? 'border-red-500' : ''}`} 
                            placeholder="contact@email.com" 
                            {...register("email", { required: "Ce champs est requis."})}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* MESSAGE */}
                    <div className="flex flex-col gap-2 items-start">
                          <label htmlFor="message" className="text-white ml-1 font-medium text-sm">Votre message</label>
                          <textarea 
                            className={`${fieldStyle} min-h-[150px] ${errors.message? 'border-red-500' : ''}`}
                            placeholder="Votre portfolio m'a tapé dans l'oeil... "
                            {...register("message", { required: "Ce champs est requis."})}
                        />
                        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                    </div>

                    {/* BUTTON */}
                    <div className="mt-2">
                        <button 
                            type="submit" 
                            disabled={isLoading} 
                            className="cursor-pointer w-full md:w-auto text-white bg-primary-orange py-4 px-8 rounded-lg hover:brightness-110 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="flex items-center justify-center gap-4 font-bold">
                                <p>{isLoading ? "Envoi..." : "Envoyer"}</p>
                                {!isLoading && <IoMdSend />}
                            </div>
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}