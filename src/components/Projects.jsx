
export default function Projects(){
   
    return(
        <article id="projects" className="workText">
        <h1 className="mainHeaderWork">Projekter</h1>
        <p>Her er et lille udrag af nogle de projekter jeg har arbejdet på
        </p>
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
            <img src="./moviemagnet.png" className="projectImg" alt="Billede af Onlinemagasin projekt"/>
            <br/>
            <br/>
            <a href="https://moviemagnet-esbenlund.vercel.app/">Se siden her</a>
            </section>
        </div>
        <div className="workBox">
            <h1>Jensen Cykler</h1>
            <p className="yearP">1. Semester Projekt</p>
            <section>
            <p>I det første projekt på studiet, fik vi til opgave at lave et online magasin. Det indhold vi skulle skrive om var frit,
                og jeg valgte at skrive om motion. Denne side er meget simpel, da det var vores første projekt. Den er derfor kun
                lavet med HTML og CSS.
            </p>
            <img src="./onlinem.png" className="projectImg" alt="Billede af Onlinemagasin projekt"/>
            <br/>
            <br/>
            <a href="https://lundp97.dk/onlinemagasin/">Se siden her</a>
            </section>
        </div>
        <div className="workBox">
            <h1>Jensen Cykler</h1>
            <p className="yearP">1. Semester Eksamen</p>
            <section>
            <p>Her lavede jeg en hjemmeside som skulle oplyse om et produkt fra Jensen Cykler.
                Hensigten med denne opgave var at øge opmærksomheden på Jensen Cykler. Det gjorde jeg ved at en fiktiv konkurrence, 
                hvor man kunne vinde den perfekte cykel til studerende.
            </p>
            <img src="./jensen.png" className="projectImg" alt="Billede af Jensen Cykler eksamensprojekt"/>
            <br/>
            <br/>
            <a href="https://lundp97.dk/jensencykler/">Se siden her</a>
            </section>
        </div>
        <div className="workBox">
            <h1>Nippon Måltidskasser</h1>
            <p className="yearP">2. Semester Gruppe Projekt</p>
            <section>
            <p>I dette projekt skulle vi lave en hjemmeside, til en fiktiv virksomhed som sælger måltidskasser.
                Hjemmesiden er beregnet til Ipad/tablet. Der er ikke så meget kode i dette projekt.
                Formålet var at vise brugerens vej fra startside til betaling af ordren.
            </p>
            <img src="./nippon.png" className="projectImg" alt="Billede der viser forsiden af projektet Nippon"/>
            <br/>
            <br/>
            <a href="https://lundp97.dk/nippon/">Se siden her</a>
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