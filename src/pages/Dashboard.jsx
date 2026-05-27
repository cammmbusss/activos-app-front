import { useNavigate } from "react-router-dom"

function Dashboard() {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-zinc-100"> 
            <header className="bg-white border-b border-zinc-200 px-8 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-zinc-900">
                    Gestion de Activos
                </h1>
                <button
                    onClick={handleLogout}
                    className="text-sm bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-md transition-colors"
                >
                    Cerrar Sesión
                </button>
            </header>

            <main className="p-8">
                <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
                    Dashboard
                </h2>

                <p className="text-zinc-600 mb-6">
                    Bienvenido al panel principal del sistema
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div onClick={() => navigate("/assets/new")} 
                        className="
                        bg-white
                        p-5
                        rounded-xl
                        shadow-sm
                        border
                        border-zinc-200
                        cursor-pointer
                        hover:bg-zinc-50
                        transition-colors
                    ">
                        <h3 className="font-semibold text-zinc-900">
                            Activos
                        </h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Gestionar activos registrados.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
                        <h3 className="font-semibold text-zinc-900">
                            Reportes
                        </h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Generar reportes de activos.
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
                        <h3 className="font-semibold text-zinc-900">Configuración</h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Ajustes generales del sistema.
                        </p>
                    </div>

                </div>
            </main>

        </div>
    )
}
export default Dashboard;