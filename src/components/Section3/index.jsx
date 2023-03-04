import { Container, SectionHeader, H1, P, Section, Map, H2, P1, H3, Section2, Map2 } from "./style"
import { DiCss3 } from 'react-icons/di'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoNodejs, } from 'react-icons/io'
import { SiPostgresql, SiSequelize, SiDocker, SiReact, SiJavascript } from 'react-icons/si'
import { FiDatabase } from 'react-icons/fi'
function Section3() {
    const Div = [
        {
            title: <H2>Desenvolvimento Web</H2>,
            text: <P1>Um desenvolvimento focado na criação de sites, páginas únicas, E-commerce ou outras aplicações. Promovendo uma boa experiência e uma boa otimização do site.</P1>
        },
        {
            title: <H2>Desenvolvimento Responsivo</H2>,
            text: <P1>Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e acessível. Ou aplicações 100% mobile, como aplicativos.</P1>
        },
        {
            title: <H2>Experiência do usuário</H2>,
            text: <P1>Aplicações voltadas a um conjunto de elementos e fatores de um serviço, produto ou sistema que tem como objetivo promover uma boa experiência para o usuário.</P1>
        }
    ]

    const Tec = [
        {
            icon: <FaHtml5 className="icon" />,
            name: <p>HTML 5</p>,
        },
        {
            icon: <DiCss3 className="icon" />,
            name: <p>CSS 3</p>,
        },
        {
            icon: <DiCss3 className="icon" />,
            name: <p>Styled-Components</p>,
        },
        {
            icon: <SiPostgresql className="icon" />,
            name: <p>PostgreSQL</p>,
        },
        {
            icon: <SiSequelize className="icon" />,
            name: <p>SEQUELIZE</p>,
        },
        {
            icon: <SiDocker className="icon" />,
            name: <p>DOCKER</p>,
        },
        {
            icon: <IoLogoNodejs className="icon" />,
            name: <p>NodeJS</p>,
        },
        {
            icon: <SiReact className="icon" />,
            name: <p>REACT JS</p>,
        },
        {
            icon: <SiJavascript className="icon" />,
            name: <p>JavaScript</p>,
        },
        {
            icon: <FiDatabase className="icon" />,
            name: <p>Database</p>,
        }
    ]
    return (
        <Container>
            <SectionHeader>
                <div data-aos="fade-down" >
                    <H1>Conheça quais são os meus serviços</H1>
                </div>
                <div data-aos="fade-down">
                    <P>Metodologias que eu utilizo nos meus trabalhos.</P>
                </div>
            </SectionHeader>

            <Section>
                {
                    Div.map((item, index) => (
                        <div data-aos="fade-down">
                            <Map>{item.title}{item.text}</Map>
                        </div>
                    ))
                }
            </Section>
            <H3>Conhecimentos</H3>
                <Section2>
                <div data-aos="fade-down">
                    {
                        Tec.map((item, index) => (
                            <Map2>{item.icon}{item.name}</Map2>
                        ))
                    }
                </div>
                </Section2>

        </Container>
    )
}

export default Section3