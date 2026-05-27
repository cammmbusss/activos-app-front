import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAsset() {
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const navigate = useNavigate()
    async function handleCreateAsset() {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch("http://localhost:8080/activos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ categoria, descripcion }),
            });
            if(!response.ok){
                throw new Error("Error al crear el activo")
            }
            const data = await response.json();
            console.log("Activo creado:", data);
            navigate("/dashboard");
        }catch (error) {
            console.error("Error al crear el activo:", error);
        }    
    }

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h1 className="text-2xl font-semibold text-zinc-900 mb-6">
                Nuevo Activo
            </h1>
            <div className="mb-4">
                <label className="block mb-2 text-sm text-zinc-700">
                    Categoría
                </label>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="
                        w-full
                        border
                        border-zinc-300
                        rounded-md
                        px-3
                        py-2
                        bg-white
                        "
                >
                    <option value="">
                        Seleccionar categoría
                    </option>

                    <option value="PROPIEDAD">
                        Propiedad
                    </option>

                    <option value="VEHICULO">
                        Vehículo
                    </option>
                </select>
            </div>

            <div className="mb-6">
                <label className="block mb-2 text-sm text-zinc-700">
                    Descripción
                </label>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="w-full border border-zinc-300 rounded-md px-3 py-2"
                />  
            </div>
            <button
                onClick={handleCreateAsset}
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-2 rounded-md transition-colors"
            >
                Crear Activo
            </button>

        </div>
    </div>
  );
}

export default CreateAsset