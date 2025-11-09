
import {createContext, useEffect, useState} from "react"
//import { useNavigate } from "react-router-dom";

type User = { nomePaciente: string, cpf: string, dtNascimento: Date, email: string, senhaAcesso: string, telefone: number }

type AuthContextType = {
    user: User | null,
    signed: boolean,
    login: (email: string, senhaAcesso: string) => Promise <string | void>,
    cadastro: (nomePaciente: string, cpf: string, dtNascimento: Date, email: string, senhaAcesso: string, telefone: number) => Promise<string | void>; 
    logout: (email:string, senhaAcesso: string)=> Promise <string | void>,
}

type AuthProviderProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({children}:AuthProviderProps)=>{

    const [user, setUser] = useState<User | null>(null)
    //const navigate = useNavigate();

    useEffect(()=>{

        const storedUser = localStorage.getItem("user_data");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        
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

    

    const login = async (email: string, senhaAcesso: string): Promise<string | void> => {

    try {

        const response = await fetch(`http://localhost:8080/pacientes/login/${encodeURIComponent(email)}/${encodeURIComponent(senhaAcesso)}`);

        if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            localStorage.setItem("user_data", JSON.stringify(userData));
            return;

        } else if (response.status === 401 || response.status === 422) {
            const erroData = await response.json().catch(() => null);
            return erroData?.erro || "E-mail ou senha incorretos.";

        } else {
            return "Erro ao efetuar login.";
        }
        
    } catch (error) {
        console.error(error);
        return "Erro de comunicação com o servidor.";
    }
};


    const logout = async (email:string, senhaAcesso:string): Promise <string | void> =>{
        try {
            const response = await fetch(
      `http://localhost:8080/pacientes/excluir/${encodeURIComponent(email)}/${encodeURIComponent(senhaAcesso)}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
        localStorage.removeItem('user_data');
        setUser(null);
        return "Conta excluída com sucesso.";
        
    }else if (response.status === 422 || response.status === 401) {
        const text = await response.text();
        return text || "E-mail ou senha incorretos.";

    } else {
        return "Erro ao excluir conta.";
    }
        } catch (error) {
            console.error(error);
            return "Erro de comunicação com o servidor.";
        }
    }

    return(
        <AuthContext.Provider value={{user, signed: !!user, login, cadastro, logout}}>
            {children}
        </AuthContext.Provider>
    )
}