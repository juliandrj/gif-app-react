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
    test('debe llamar onNewCategory si el input tiene un valor de almenos dos caracteres', () => {
        const inputText = 'Spiderman';
        const onNewCategoryMock = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryMock} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('formulario');
        fireEvent.input(input, {target: {value: inputText}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategoryMock).toHaveBeenCalled();
        expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMock).toHaveBeenCalledWith(inputText);
    })
    test('no debe llamar onNewCategory si el input tiene un valor de menos de dos caracteres', () => {
        const inputText = 'S';
        const onNewCategoryMock = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryMock} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('formulario');
        fireEvent.input(input, {target: {value: inputText}});
        fireEvent.submit(form);
        expect(onNewCategoryMock).not.toHaveBeenCalled();
    })
})