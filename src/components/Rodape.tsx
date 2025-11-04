import fiaplogo from '/fiaplogo.svg'
import hclogo from '/logohcsemfundo.png'
import iconmais from '/iconmais.png'

export default function Rodape(){
    return(
        <>
        <footer className=" h-[70px] flex justify-center text-xl bg-[#e9eded] ">
            <img className='h-[40px] justify-self-center mr-[20px] mt-[10px]' src={fiaplogo}/>
            <img className='h-[40px] mt-[15px]' src={iconmais}/>
            <img className='h-[60px] ml-[20px] mt-[10px]' src={hclogo}/>
        </footer>
        </>
    )
}