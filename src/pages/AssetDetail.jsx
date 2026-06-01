import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

function AssetDetail(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [asset, setAsset] = useState(null)

    useEffect(() => {
        async function fetchAssetDetail() {
            const token = localStorage.getItem("token")
            try {
                const response = await fetch(`http://localhost:8080/activos/${id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })

                if (!response.ok) {
                    throw new Error("Error al obtener el detalle del activo")
                }
                const data = await response.json()
                setAsset(data)
            }catch (error) {
                console.error("Error al obtener el detalle del activo:", error)
            }
        } 
        fetchAssetDetail()
    }, [id])

    function getIcon(categoria) {
        if (categoria === "PROPIEDAD") return "🏠"
        if (categoria === "VEHICULO") return "🚗"
        return "📦"
    }

    if (!asset) {
        return (
            <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
                <p className="text-zinc-600">Cargando detalle del activo...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-zinc-100">
            <main className="p-8 max-w-3xl mx-auto">
                <button
                    onClick={() => navigate("/assets")}
                    className="mb-6 text-sm text-zinc-600 hover:text-zinc-900"
                >
                    Volver a Mis Activos
                </button>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <span className="text-xs font-semibold text-zinc-500 uppercase">
                                {asset.categoria}
                            </span>
                            <h1 className="text-3xl font-semibold text-zinc-900 mt-3">
                                {asset.descripcion}
                            </h1>
                        </div>
                        <div className="w-24 h-24 rounded-xl bg-zinc-100 flex items-center justify-center text-5xl">
                            {getIcon(asset.categoria)}
                        </div>
                    </div>

                    <div className="border-t border-zinc-200 pt-6">
                        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
                            Información Detallada
                        </h2>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-zinc-500">Categoría</p>
                                <p className="text-zinc-900">{asset.categoria}</p>
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500">Descripción</p>
                                <p className="text-zinc-900">{asset.descripcion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-zinc-200 pt-6 mt-6">
                        <h2 className="text-lg font-semibold text-zinc-900 mb-2">
                            Gastos Asociados
                        </h2>
                        <p className="text-zinc-600">
                            No hay gastos registrados para este activo.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default AssetDetail