import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const {images, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && (<h2>Cargando...</h2>)}
            <div className="card-grid">
                {images.map(img => (
                    <GifItem key={img.id} {...img}/>
                ))}
            </div>
        </>
    )
}
