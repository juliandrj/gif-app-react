import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGifs(category).then(newImages => {
            setImages(newImages);
            setLoading(false);
        });
    }, []);
    return {
        images,
        loading
    };
}
