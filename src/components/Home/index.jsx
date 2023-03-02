import { Container, Main, H2, H1, P, Button, Container2, Link } from "./style"
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
function Home() {
    const Social = [
        {
            icons: <BsInstagram />,
            href: 'https://www.instagram.com/daniel.s.s.camposs/',
        },
        {
            icons: <BsLinkedin />,
            href: 'https://www.linkedin.com/in/daniel-dos-santos-campos-722155256/',
        },
        {
            icons: <BsWhatsapp />,
            href: 'http://wa.me/+5548996395694',
        }
    ]
    return (
        <Container>
            <Main>
                <H2 data-aos='fade-left'>Olá, eu sou <h2 style={{ marginLeft: 3 }}>Daniel</h2></H2>
                <H1>Full-Stack developer</H1>
                <P>Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo <br/> e que eu possa te ajudar de alguma forma.</P>

                <Button href="#section1">Conhecer Mais</Button>
            </Main>

            <Container2>
                {Social.map((item, index) => (
                    <Link href={item.href} target='_blank'  >{item.icons}</Link>
                ))}
            </Container2>
        </Container>
    )
}

export default Home