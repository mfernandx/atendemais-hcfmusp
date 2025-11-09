import perfilicon from "/perfil-icon.png";

export default function Navegador(){
    return(
        <>


        <nav className="flex justify-center items-center text-xl p-6">
            <ul className="flex justify-center flex-1 list-none ml-40">
            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#0077C8]" href="/home"> Início </a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#0077C8]" href="/funcionalidades"> Funcionalidades </a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#0077C8]"href="/prototipo"> Protótipo </a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#0077C8]" href="/faq"> FAQ </a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#0077C8]" href="/sobrenos"> Sobre nós </a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#0077C8]" href="/contato"> Contato </a></li>
            </ul>

            <a href="/usuario" className="  bg-[#0077C8] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#005fa3] flex items-center"><img src={perfilicon}/>MEU PERFIL</a>
        </nav>

        


        
        </>
    )
}