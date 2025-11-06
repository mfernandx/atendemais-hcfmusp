import {createContext, useEffect, useState} from "react"

type User = { nome: string, cpf: string, dtNascimento: Date, email: string, senha: string, telefone: number }

type AuthContextType = {
    user: User | null,
    signed: boolean,
    login: (email: string, senha: string) => string | void,
    cadastro: (nome: string, cpf: string, dtNascimento: Date, email: string, senha: string, telefone: number) => string | void,
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

    const cadastro = (nome: string, cpf: string, dtNascimento: Date, email:string, senha:string, telefone: number): string | void =>{

        const usersStorage = JSON.parse(localStorage.getItem('users_db') || '[]') as User[]

        const hasUser = usersStorage.find((user)=> user.email === email)

        if(hasUser){
            return 'Já existe uma conta com esse email.'
        }

        const newUser = [...usersStorage, {nome, cpf, dtNascimento, email, senha, telefone}]
        localStorage.setItem('users_db', JSON.stringify(newUser))
    }

    const login = (email:string, senha:string): string | void =>{
        const usersStorage = JSON.parse(localStorage.getItem('users_db') || '[]') as User[]
        const hasUser = usersStorage.find((user)=> user.email === email)

        if(hasUser){
            if(hasUser.senha === senha){
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem('user_token', JSON.stringify({email, token}))
                setUser(hasUser)
                return
            }else{
                return 'E-mail ou senha incorretos.'
            }
        }else{
            return 'Usuário não cadastrado.'
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