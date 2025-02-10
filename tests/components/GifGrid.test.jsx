import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas de GifGrid', () => {
    const categoryName = 'Dragon Ball';
    const cargando = 'Cargando...';
    test('debe mostrar el loading inicial', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
        });
        render(<GifGrid category={categoryName} />);
        expect(screen.getByText(categoryName)).toBeTruthy();
        expect(screen.getByText(cargando)).toBeTruthy();
    })
    test('debe mostrar el loading inicial', () => {
        useFetchGifs.mockReturnValue({
            images: [{
                id: 'a1',
                title: 'Categoria 1',
                url: 'http://localhost/uno.gif'
            },{
                id: 'b2',
                title: 'Categoria 2',
                url: 'http://localhost/dos.gif'
            }],
            loading: false,
        });
        render(<GifGrid category={categoryName} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})
