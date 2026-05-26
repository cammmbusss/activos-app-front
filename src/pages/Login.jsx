import { useState } from "react"



function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        try{
            const response = await fetch("http://localhost:8080/auth/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
            })

            if(!response.ok){
                throw new Error("Email o contraseña incorrectos");
            }

            const data = await response.json();

            console.log("Respuesta:",data);

            localStorage.setItem("token", data.token);

        }catch(error){
            console.error("Error al iniciar sesión:", error);
        }
    }
    return(
        <div className="h-screen bg-zinc-100 flex items-center justify-center">
           <div className="bg-white p-8 rounded-lg shadow-md w-96">

                <h1 className="text-2xl font-semibold text-center mb-6 text-zinc-900">
                    Iniciar Sesión
                </h1>

                <div className="mb-4">
                    <label className= "block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded px-3 py-2 "
                    />
                </div>

                <div className="mb-6">
                    <label className= "block mb-2">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded px-3 py-2 "
                    />
                </div>

                <button
                    className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-2 rounded-md transition-colors"
                    onClick={handleLogin}
                >
                    Ingresar
                </button>

            </div>
        </div>
    )
}

export default Login