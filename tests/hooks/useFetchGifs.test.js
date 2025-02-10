import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas de Hook useFetchGifs', () => {
    const category = 'Hulk';
    test('debe regresar el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs(category));
        const {images, loading} = result.current;
        expect(images.length).toBe(0);
        expect(loading).toBeTruthy();
    })
    test('debe regresar un arreglo de imagenes y loading en falso', async() => {
        const {result} = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
            , {
                timeout: 5000
            }
        );
        const {images, loading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
    })
})