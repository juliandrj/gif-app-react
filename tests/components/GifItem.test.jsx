import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components"

const title = 'Título';
const url = 'http://127.0.0.1/img.jpg';

describe('Tests del componente GifItem', () => {
    test('debe coincidir con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    test('la imagen debe tener el src y el alt determinado', () => {
        render(<GifItem title={title} url={url} />);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('el parrafo debe tener el texto determinado', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});