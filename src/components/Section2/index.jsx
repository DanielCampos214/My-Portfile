import { Container, ContainerQualificações, LiLeft, LiRight, Title, Title1, SubTitle, Text, Ul, Button, Button1} from "./style"
import Logo from '../../assets/study.svg'
function Section2() {

    return (
    <Container>
        <Title>Minhas qualificações e experiências</Title>
        <div className="div"> 
        <div data-aos="fade-right">       
        <Button>Qualificações</Button>
        </div>
        <div data-aos="fade-left">
        <Button1>Trabalhos</Button1>
        </div>        
        </div>
 
        <ContainerQualificações>
            <Ul>
                <div data-aos="fade-right">
                <LiLeft>
            <img src={Logo}/>
                <Title1>Dev Club</Title1>
                <SubTitle>Desenvolvedor Full-Stack</SubTitle>
                <Text>O DevClub é uma formação Full Stack completa do zero ao avançado. 
                    Dentro dessa formação obtive conhecimento em tecnologias tais como: HTML, CSS, JavaScript, React , React Native, Node, Bancos de dados Relacionais e 
                    não relacionais e Docker.</Text>
            </LiLeft>
                </div>

            <div data-aos="fade-left">
            <LiRight><img src={Logo}/>
            <Title1>IFSC</Title1>
                <SubTitle>Tecnologia da Informação</SubTitle>
                <Text>Fiz o curso de tecnologia da informação voltada para JavaScript, 
                    HTML e CSS e aprendi muito sobre como criar e desenvolver sites, aplicativos e 
                    interfaces de usuário interativas e dinâmicas. Durante o curso,
                     aprendi a utilizar as três linguagens de programação de forma integrada e eficiente,
                      tornando-me capaz de desenvolver projetos responsivos e compatíveis com diferentes dispositivos.</Text>
            </LiRight>
            </div>

            </Ul>

            </ContainerQualificações>
        </Container>
    )
}

export default Section2