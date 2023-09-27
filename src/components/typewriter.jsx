import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
    return(
        <h1>
            <Typewriter
                options={{
                    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                    strings: ["Mojn!"],
                    autoStart: true,
                    delay: 150,
                    loop: true,
                }}
            />  
        </h1>
    )
}