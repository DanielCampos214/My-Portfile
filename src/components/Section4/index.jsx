import { Container, Movie, Title, Section, Map2} from "./style"
// import { useState, useRef } from "react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import Mobile from '../../assets/mobile.png'
import Mobile1 from '../../assets/mobile1.png'
import Mobile3 from '../../assets/mobile3.png'
import Mobile4 from '../../assets/mobile4.png'
import Mobile5 from '../../assets/mobile5.png'
import Mobile6 from '../../assets/mobile6.png'

function Section4(){
    // const linkMapButton = useRef()



    // const [button, SetButton] = useState([])

    // function linkImage(){
    //     console.log(linkMapButton)
    // }

    
    const Projects = [
        {
            image: <Movie src={Mobile}/>,
            link: "https://danielcampos214.github.io/ProjectQuizGospel/" ,
        },
        {
            image: <Movie src={Mobile1}/>,
            link: "https://danielcampos214.github.io/projeto-completo/",
        },
        {
            image: <Movie src={Mobile5}/>,
            link: "https://danielcampos214.github.io/Jogo-da-Memoria/",
        },
        {
            image: <Movie src={Mobile3}/>,
            link: "https://danielcampos214.github.io/mpdz/",
        },
        {
            image: <Movie src={Mobile4}/>,
            link: "https://danielcampos214.github.io/calculadora/",
        },
        {
            image: <Movie src={Mobile6}/>,
            link: "https://cl-vidros.vercel.app/",
        },
    ]
    const responsive = {
               desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
    }


    return(
        <Section>
            <Container>
            <Title>Projetos</Title>
        <Carousel responsive={responsive}>
            {Projects.map((item, index)=>(
                <Map2 href={item.link} target="_blank">{item.image}</Map2>
            ))}
        </Carousel>
        </Container>
        </Section>

    )
}

export default Section4