import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Assets() {

    const [assets, setAssets] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchAssets(){
            const token = localStorage.getItem("token")

            try{
                const response = await fetch("http://localhost:8080/activos", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })

                if(!response.ok){
                    throw new Error("Error al obtener los activos")
                }
                const data = await response.json()
                setAssets(data)
            
            }catch (error) {
                console.error("Error al obtener los activos:", error)
            }
        }
        fetchAssets()
    }, [])

    function getIcon(categoria) {
        if (categoria === "PROPIEDAD") return "🏠"
        if (categoria === "VEHICULO") return "🚗"
        return "📦"
    }

    return (
        <div className="min-h-screen bg-zinc-100">
            <main className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-zinc-900">
                            Mis Activos
                        </h1>
                        <p className="text-zinc-600 mt-1">
                            Listado de activos registrados.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assets.map((asset) => (
                        <div 
                            key={asset.id}
                            className="bg-white rounded-xl shadow-sm border border-zinc-200 p-5 flex justify-between items-center hover:bg-zinc-50 transition-colors cursor-pointer"
                            onClick={() => navigate(`/assets/${asset.id}`)}
                        >
                            <div>
                                <span className="text-xs font-semibold text-zinc-500 uppercase">
                                    {asset.categoria}
                                </span>
                                <p className="text-lg font-medium text-zinc-900 mt-2">
                                    {asset.descripcion}
                                </p>
                            </div>
                            <div className="w-20 h-20 bg-zinc-100 flex items-center justify-center text-4xl">
                                {getIcon(asset.categoria)}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Assets