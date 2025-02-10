import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas de GifExpertApp', () => {
    const inputText1 = 'One Punch';
    const inputText2 = 'Dragon Ball';
    test('debe agregar categorias', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByLabelText("formulario");
        fireEvent.input(input, {target: {value: inputText1}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: inputText2}});
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);
    })
    test('no debe agregar categorias repetidas', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByLabelText("formulario");
        fireEvent.input(input, {target: {value: inputText1}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: inputText1}});
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
    })
})