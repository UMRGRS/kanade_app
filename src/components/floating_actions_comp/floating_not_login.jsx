export default function NotLogin(){
    return(
        <div class="w-3/6 sm:w-3/6 md:w-2/6 lg:w-2/6 container fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full border border-gray-500 bg-white">
            <div className="flex justify-evenly p-2">
                <button className="bg-blue-700 text-white rounded-full px-4">
                    Iniciar sesión
                </button>
                <button className="bg-blue-700 text-white rounded-full px-4 py-2">
                   Registrarse
                </button>
            </div>
        </div>
    )
}