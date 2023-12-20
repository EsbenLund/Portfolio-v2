
export default function Projects(){
   
    return(
        <article id="projects" className="workText">
        <h1 className="mainHeaderWork">Projekter</h1>
        <p>Her er et lille udrag af nogle de projekter jeg har arbejdet på
        </p>
        <div className="workBox">
            <h1>Online Booking - Hvidsten Kro</h1>
            <p className="yearP">3. Semester Gruppe Eksamens Projekt </p>
            <section>
            <p> I dette projekt har udviklet et online booking system til Hvidsten Kro. I dette projekt vi ikke haft stort fokus på design,
                men derimod funktionalitet. I dette projekt har vi bl.a. brugt React.js, JavaScript, Firebase og Tailwind.css.
            </p>
            <img src="./hvidsten.png" className="projectImg" alt="Billede af hvidstenkro"/>
            <br/>
            <br/>
            <a href="https://hvidsten-kro-booking.vercel.app/">Se siden her</a>
            </section>
        </div>
        <div className="workBox">
            <h1>Movie Magnet</h1>
            <p className="yearP">3. Semester Gruppe Eksamens Projekt </p>
            <section>
            <p> I dette projekt har vi udviklet en Web-App som vi kalder Movie Magnet. Formålet med denne app er at brugeren nemt kan 
                finde film. I vores research fandt vi ud af at mange brugere bruger lang tid på at finde en film. Derfor har vi lavet en Web-App
                hvor brugeren kan få anbefalet. Derudover har man også mulighed for at gemme film, og dermed have sit eget filmbibliotek i lommen. 
                Denne Web-App er udviklet i React.jsx og bruger TMDB's API til fetche film. Derudover har vi brugt Firebase og Firestore til at gemme brugerens data.
                Denne Web-App er udviklet som en mobil applikation, og er derfor ikke beregnet til desktop.
            </p>
            <img src="./moviemagnet.png" className="projectImg" alt="Billede af hvidstenkro"/>
            <br/>
            <br/>
            <a href="https://moviemagnet-esbenlund.vercel.app/">Se siden her</a>
            </section>
        </div>
        <div className="workBox">
            <h1>Teaterkatten</h1>
            <p className="yearP">2. Semester Eksamen</p>
            <section>
            <p>En hjemmeside lavet til Teaterkatten, en bar/cafe centralt placeret i Aarhus. Vores hensigt med denne hjemmeside var, 
                at give dem en større online tilstedeværelse, hvor det var muligt at booke bord, se deres menukort og holde sig opdateret
                på deres kommende events. Alt sammen kunne gøre fra forsiden, da det skulle være nemt og ligetil.
            </p>
            <img src="./tk.png" className="projectImg" alt="Billede der viser et tidligere projekt"/>
            <br/>
            <br/>
            <a href="https://lundp97.dk/teaterkatten/">Se siden her</a>
            </section>
        </div>
       
    </article>
    )

};