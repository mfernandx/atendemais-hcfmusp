import Navegador from '../../components/Navegador'
import Rodape from '../../components/Rodape'
import fotobeatriz from '/fotobeatriz.png'
import fotofernanda from '/fotofernanda.png'
import fotogiovana from '/fotogiovana.png'
import icongithub from '/icongithub.png'
import iconlinkedin from '/iconlinkedin.png'

export default function Sobre(){
    return(
        <>
        <Navegador/>

        <header className="h-35 bg-linear-to-r from-[#049fce] via-[#39b7dd] to-[#95e4f8] flex justify-center text-7xl p-6">
            <h1 className='font-bold'> SOBRE NÓS</h1>
        </header>

    <section className='flex justify-between p-16'>

            <section className="block bg-[#e9eded] rounded-2xl p-2">

                <img className="h-85 hover:drop-shadow-[0_0_2em_#646cffaa]"src={fotobeatriz} />
                <h3 className='justify-self-center text-2xl font-bold p-2'> Beatriz de Sousa Franco</h3>
                <h3 className='justify-self-center text-2xl font-extralight'> 1TDSPI - RM: 563686</h3>

            <section className='flex justify-center p-4'>

                <section className='flex p-2'>
                    <img className='w-10'src={icongithub}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-10 hover:border-[#0077C8]' href='https://github.com/biazxz'>GITHUB</a>
                </section>
            
                <section className='flex p-2'>
                    <img className='w-10'src={iconlinkedin}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-10 hover:border-[#0077C8]' href='https://www.linkedin.com/in/beatriz-franco-52970824a'>LINKEDIN</a>
                </section>

            </section>
            

        </section>



        <section className="block bg-[#e9eded] rounded-2xl p-2">

            <img className="h-85 hover:drop-shadow-[0_0_2em_#646cffaa]" src={fotogiovana}/>
            <h3 className='justify-self-center text-2xl font-bold p-2'> Giovana Souza Vieira </h3>
            <h3 className='justify-self-center text-2xl font-extralight'> 1TDSPI - RM: 564430</h3>

            <section className='flex justify-center p-4'>

                <section className='flex p-2'>
                    <img className='w-10'src={icongithub}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-10 hover:border-[#0077C8]' href='https://github.com/medusah25'>GITHUB</a>
                </section>
            
                <section className='flex p-2'>
                    <img className='w-10'src={iconlinkedin}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-10 hover:border-[#0077C8]' href='https://www.linkedin.com/in/giovana-souza-js '>LINKEDIN</a>
                </section>

            </section>

        </section>



        <section className="block bg-[#e9eded] rounded-2xl p-2">

            <img className="h-85 hover:drop-shadow-[0_0_2em_#646cffaa]" src={fotofernanda}/>
            <p className='justify-self-center text-2xl font-bold p-2'> Maria Fernanda Santos </p>
            <h3 className='justify-self-center text-2xl font-extralight'> 1TDSPI - RM: 565277 </h3>

            <section className='flex justify-center p-4'>

                <section className='flex p-2'>
                    <img className='w-10'src={icongithub}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-10 hover:border-[#0077C8]' href='https://github.com/mfernandx'>GITHUB</a>
                </section>
            
                <section className='flex p-2'>
                    <img className='w-10'src={iconlinkedin}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-10 hover:border-[#0077C8]' href='https://www.linkedin.com/in/maria-fernanda-santos-mendes-39b151219/ '>LINKEDIN</a>
                </section>

            </section>

            

        </section>
</section>


        <section className='h-5 bg-[#0077C8]'></section>

        <Rodape/>
        
        </>
    )
}