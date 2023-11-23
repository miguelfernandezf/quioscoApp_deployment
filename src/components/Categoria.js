import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"

const Categoria = ({categoria}) => {

    const {id,nombre,icono} = categoria
    const {categoriaActual, handleClickCategoria} = useQuiosco()


  return (
    <div className={`${
            categoriaActual?.id === id ? "bg-amber-400": ""
            } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
        <Image
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen Icono"
            width={100}
            height={100}
            className="mr-5"
        />
        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
            onClick={()=>handleClickCategoria(id)}
        >
            {nombre}
        </button>
        {/* {nombre} */}
    </div>
  )
}

export default Categoria