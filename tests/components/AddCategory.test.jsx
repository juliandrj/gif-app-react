import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas de AddCategory', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        const txt = 'Spiderman';
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: txt}});
        expect(input.value).toBe(txt);
    })
})