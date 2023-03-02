import { Container, MyImage, Main, H2, P, Section, Link} from "./style"
import Image from '../../assets/daniel.png'
import Arrow from '../../assets/arrow.svg'
import ImgMais from '../../assets/mais.svg'
function Section1() {
    const expo  = [
        {
            title: <h1><img src={ImgMais}/> 06</h1>,
            text: <p>Meses de experiência como desenvolvedor</p>,
        },
        {
            title: <h1><img src={ImgMais}/> 08</h1> ,
            text: <p>Projetos educativos</p>,
        },
        {
            title:  <h1><img src={ImgMais}/> 02</h1>,
            text: <p>Projetos como Freelancer</p>,
        },
        {
            title: <h1><img src={ImgMais}/> 01</h1> ,
            text: <p>Cursos na área da programação</p>,
        }
        ]
    return (
    <Container>
    <Main >
        <MyImage src={Image} id="section1" />
             <div>
                <P><img style={{ width: 20 }} src={Arrow} />DESENVOLVEDOR FRONT-END</P>
                <H2>Desenvolvedor Front-end com experiências em React, React-native, Node e JavaScript puro.</H2>
                <P>Meu nome é Daniel, tenho 23 anos e atuo na área de desenvolvimento a mais de 6 meses. Com o conhecimento adquirido,
                     estou preparado para atuar em diversas áreas do mercado de tecnologia da informação
                     e me sinto confiante para enfrentar os desafios do mundo da programação web.</P>
            </div>

    </Main>

        <div data-aos="fade-down">
        <Section>
        {expo.map((item, index) => (
                    <Link>{item.title}{item.text}</Link>
                ))}
        </Section>

        </div>

        </Container>
    )
}

export default Section1