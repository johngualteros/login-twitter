import styled from 'styled-components';
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function Home(){
    const Container=styled.div`
        width: 100%;
        height: 110vh;
        display: grid;
        grid-template-columns: auto 53%;
    `;
    const ContainerImage=styled.div`
        position: relative;
        display: inline-block;
        display:grid;
        place-items: center;
    `;
    const Image=styled.img`
        width: 100%;
        height: 100%;
        z-index:-2;
    `;
    const Icon=styled.div`
        position:absolute;
        font-size: 350px;
        z-index:2;
    `;
    const ContainerForm=styled.div`
        padding:5% 5%;
    `;
    const Form=styled.section`
        width: 73%;
        height: 100%;
    `;
    const IconForm=styled.div`
        font-size:40px;
        color:#F0F0F0;
    `;
    const ContainerTitle=styled.section`
        width: 100%;
        height: 30%;
        margin-top:12%;
    `;
    const Title=styled.h1`
        font-size:4.5rem;
        color:#F0F0F0;
        font-weight:bold;
    `;
    const SubTitle=styled.h2`
        font-size:2.2rem;
        color:#F0F0F0;
        font-weight:bold;
    `;
    const SubTitle3=styled.h3`
    margin-top:55px;
    font-size:1rem;
    color:#F0F0F0;
    font-weight:bold;
`;
    const ContainerButtons=styled.div`
        width:55%;
        height: auto;
        margin-top:45px;
        // Button Google

        .buttonGoogle{
            padding:12px 1px;
            width:100%;
            background-color:#F0F0F0;
            font-size:.7rem;
            border:none;
            border-radius:15px;
            margin:10px 0px;
            &:hover{
                background-color:#DFDFDF;
                cursor:pointer;
            }
        }
        // buttonApple
        button{
            padding:8px 15px;
            width:100%;
            background-color:#F0F0F0;
            font-weight:bold;
            font-size:1rem;
            border:none;
            border-radius:15px;
            &:hover{
                background-color:#DFDFDF;
                cursor:pointer;
            }
        }
        //buttonLogin
        .buttonLogin{
            padding:8px 1px;
            width:100%;
            background-color:#2A86FF;
            font-size:.9rem;
            border:none;
            border-radius:15px;
            margin:10px 0px;
            color:#fff;
            &:hover{
                background-color:#2475DE;
                cursor:pointer;
            }
        }
        // conditions
        .conditions{
            font-size:.6rem;
            color:#DFDFDF;
            font-weight:bold;
            a{
                color:#2A86FF;
                text-decoration:none;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
        .Login{
            padding:10px 8px;
            width:100%;
            background-color:transparent;
            font-size:.9rem;
            border:1px solid #CEF5FF;
            border-radius:15px;
            margin-top:20px;
            color:#1CC4FC;
            &:hover{
                background-color:rgba(101, 216, 254,.1);
                cursor:pointer;
            }
        }
    `;
    const Line=styled.div`
        width:100%;
        height:auto;
        display:flex;
        justify-content:center;
        align-items:center;
        div{
            width:95%;
            height:2px;
            background-color:#DFDFDF;
        }
    `;
    return(
    <Container>
        <ContainerImage>
            <Image src="https://abs.twimg.com/sticky/illustrations/lohp_850x623.png"/>
            <Icon>
            <FaTwitter/>   
            </Icon>
        </ContainerImage>
        <ContainerForm>
        {/* Comntainer form */}
            <Form>
                {/* Icon */}
                <IconForm>
                    <FaTwitter/>
                </IconForm>
                {/* Title */}
                <ContainerTitle>
                    <Title>Lo que está</Title>
                    <Title>pasando ahora</Title><br/><br/>
                    <SubTitle>Únete a Twitter hoy mismo.</SubTitle>
                </ContainerTitle>
                {/* Container buttons */}
                <ContainerButtons>
                    <a href="/"><button className="buttonGoogle">Inicia sesion como John Gualteros<FcGoogle/></button></a>
                    <a href="/"><button><FaApple/>Registrarse con apple</button></a>
                    <Line>
                        <div/>
                        <p>  O  </p>
                        <div/>
                    </Line>
                    <a href="/"><button className="buttonLogin">Regístrarse con el número de teléfo..</button></a>

                    <p className="conditions">Al registrarte, aceptas los <a href='/'>Términos de servicio</a> y la <a href='/'>Política de privacidad</a>, incluida la política de <a href='/'>Uso de Cookies</a>.</p>

                    <SubTitle3>¿Ya tienes una cuenta?</SubTitle3>
                    <a href="/"><button className="Login">Iniciar Sesión</button></a>
                </ContainerButtons>
            </Form>
        </ContainerForm>
    </Container>
    );
}