import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba getGifs.js', () => {
    test('debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('Avengers');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
})