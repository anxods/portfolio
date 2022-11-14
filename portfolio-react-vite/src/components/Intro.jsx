import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center py-20">
            <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">anxods</h1>
            <p className="text-base md:text-xl mb-3 md:mb-5 font-medium">Desarrollador BI</p>
            <p className="text-sm md:text-base mb-3 md:mb-5 font-medium px-10">
                ¡Hola! Mi nombre es Anxo. Recientemente he terminado la carrera de 
                Ingeniería Informática y actualmente trabajo en Altia. Durante la carrera, 
                decidí estudiar la rama de Sistemas de Información, donde empecé a descubrir con 
                mayor amplitud el mundo de los datos y las grandes posibilidades que ofrecen.
                <br />
                Me considero una persona curiosa, con ganas de aprender y saber más acerca de cualquier cosa que me interese.</p>
        </div>
    )
}

export default Intro;