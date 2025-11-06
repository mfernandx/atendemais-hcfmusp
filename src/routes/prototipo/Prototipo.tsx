import Navegador from '../../components/Navegador'
import Rodape from '../../components/Rodape'
import personagemchatbot from '/personagemchatbot.png'
import prototipo from '/prototipo.png'
import prototipoaudio from '/prototipoaudio.png'

export default function Prototipo(){
    return(
        <>

        <Navegador/>
        
        <header className="h-35 bg-linear-to-r from-[#049fce] via-[#39b7dd] to-[#95e4f8] flex justify-center text-7xl p-6">
            <h1 className="font-bold"> PROTÓTIPO </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Veja a funcionalidade da<br></br> nossa plataforma no <br></br>atendimento ao cliente.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-5">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Explore nosso protótipo e descubra como ele pode melhorar a experiência do paciente com uma 
                        interface intuitiva e prática de utilizar, fornecendo respostas rápidas e precisas, apoio ao usuário e acessibilidade tudo em um só lugar. </h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>

        </section>

        <section className='h-5 bg-[#0077C8]'></section>

        <section className='flex justify-between p-10'>

            <section className='flex'>
                <section className=''>
                    <img className='w-[400px]'src={prototipo}  />
                </section>
                <section className='w-[400px] mt-[100px]'>
                    <h3 className='text-2xl font-bold'> Utilizando o ChatBot por mensagem de texto:</h3>
                    <p className='text-[18px] mt-2.5 font-extralight text-justify'> - Abra o ChatBot pela sua plataforma de preferência, o exemplo ao lado utiliza a plataforma WhatsApp.</p>
                    <p className='text-[18px] mt-2.5 font-extralight text-justify'> - Envie uma mensagem ao ChatBot, ele irá responder perguntando sua preferência de acessibilidade, e após isso pode solicitar o que deseja normalmente.</p>
                </section>
            </section>

            <section className='flex' >
                <section className=''>
                    <img className='w-[400px]' src={prototipoaudio} />
                </section>
                <section className='w-[400px] mt-[100px]'>
                    <h3 className='text-2xl font-bold'> Utilizando o ChatBot por mensagem de voz:</h3>
                    <p className='text-[18px] mt-2.5 font-extralight text-justify'> - Abra o ChatBot da mesma forma.</p>
                    <p className='text-[18px] mt-2.5 font-extralight text-justify'> - Se preferir, pode já iniciar o atendimento com uma mensagem de voz, assim, o ChatBot irá assumir essa como sua preferência.</p>
                    <p className='text-[18px] mt-2.5 font-extralight text-justify'> - Lembre-se de falar os comandos objetivamente para que o entendimento do ChatBot seja eficiente, procure um ambiente silencioso e sem ruídos.</p>
                </section>
            </section>

        </section>

        <section className='h-5 bg-[#0077C8]'></section>

        <Rodape/>
        
        </>
    )
}