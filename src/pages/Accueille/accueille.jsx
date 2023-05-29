// import Footer from "../../composant/Footer/footer"
import Header from "../../composant/Header/header"
import Search from "../../composant/Search/search"
import FormaAccueille from "../../composant/formaAccueille/formacueille"
import style from "./accueille.module.scss"

const Accueille =()=>{
    return(
        <div className={style.container}> 
            <Header/>
            <main>
                <Search/>
                <FormaAccueille/>
            </main>
            {/* <Footer/> */}

        </div>
    )
}

export default Accueille