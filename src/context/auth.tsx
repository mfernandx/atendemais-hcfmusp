import {createContext, useEffect, useState} from "react"

type User = { nomePaciente: string, cpf: string, dtNascimento: Date, email: string, senhaAcesso: string, telefone: number }

type AuthContextType = {
    user: User | null,
    signed: boolean,
    login: (email: string, senhaAcesso: string) => Promise <string | void>,
    cadastro: (nomePaciente: string, cpf: string, dtNascimento: Date, email: string, senhaAcesso: string, telefone: number) => Promise<string | void>; 
    logout: ()=> void,
}

type AuthProviderProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({children}:AuthProviderProps)=>{

    const [user, setUser] = useState<User | null>(null)

    useEffect(()=>{
        const userToken = localStorage.getItem('user_token')
        const userStorage = localStorage.getItem('users_db') //pode ser substituido por uma API

        if(userToken && userStorage){
            const users: User[] = JSON.parse(userStorage)
            const tokenData = JSON.parse(userToken)
            const hasUser = users.find((u)=> u.email === tokenData.email)
            if(hasUser) setUser(hasUser) 
        }
    },[])

    const cadastro = async (
        nomePaciente: string, 
        cpf: string, 
        dtNascimento: Date, 
        email:string, 
        senhaAcesso:string, 
        telefone: number): Promise < string | void> =>{

            try {
                const response = await fetch("http://localhost:8080/pacientes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                    nomePaciente,
                    cpf,
                    dtNascimento: dtNascimento.toISOString().split("T")[0],
                    email,
                    senhaAcesso,
                    telefone,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.mensagem);
                }else{
                    alert(data.erro || "Erro ao criar conta.");
                }
            } catch (error) {
            console.error(error);
            return "Erro de comunicação com o servidor.";
            }

    }

    const login = async (email:string, senhaAcesso:string): Promise <string | void> =>{

        try{
            const response = await fetch("http://localhost:8080/pacientes");
            const users: User[] = await response.json();

            const hasUser = users.find((user)=> user.email === email)

            if(hasUser){
                if(hasUser.senhaAcesso === senhaAcesso){
                    setUser(hasUser)
                    return
                }else{
                    return 'E-mail ou senha incorretos.'
                }
            }else{
                return 'Usuário não cadastrado.'
            }
        }catch(error){
            console.error(error);
            return "Erro de comunicação com o servidor.";
        }
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem('user_token')
    }

    return(
        <AuthContext.Provider value={{user, signed: !!user, login, cadastro, logout}}>
            {children}
        </AuthContext.Provider>
    )
}