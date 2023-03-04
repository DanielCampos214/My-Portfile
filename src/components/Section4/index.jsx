import { Container, Movie, Title, Section, Map2} from "./style"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import Mobile from '../../assets/mobile.png'
import Mobile1 from '../../assets/mobile1.png'
import Mobile3 from '../../assets/mobile6.png'
import Mobile4 from '../../assets/mobile4.png'
import Mobile5 from '../../assets/mobile5.png'
import Mobile6 from '../../assets/mobile8.png'

function Section4(){
    
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
          items: 4
        },
        tablet: {
          breakpoint: { max: 1124, min: 464 },
          items: 3
        },
        tablet2: {
          breakpoint: { max: 950, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
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