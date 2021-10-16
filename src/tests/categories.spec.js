import { render, fireEvent } from '@testing-library/svelte'
import Categories from '../components/Categories/Categories.svelte'

it('it works', async () => {
    const { getByText, getByTestId } = render(Categories)

    const increment = getByText('increment')
    const decrement = getByText('decrement')
    const counter = getByTestId('counter-value')

    await fireEvent.click(increment)
    await fireEvent.click(increment)
    await fireEvent.click(increment)
    await fireEvent.click(decrement)

    expect(counter.textContent).toBe('12')

    // with jest-dom
    expect(counter).toHaveTextContent('12')
})


// import { render } from "@testing-library/svelte";
// import categories,{ selectCategory } from '../stores/category'
// import localCategory from "../../localCategory";
//
//
// const mockFn = () => ({
//     selectCategory: jest.fn(() => selectCategory("Все")),
// });
//
// describe('categories',() => {
//     let category;
//     beforeEach(() => {
//         category = mockFn;
//     })
//     //
//     console.log(category)
//     it('select category', () => {
//         // const { getByText, getByTestId } = render(Counter)
//         // expect(selectCategory).toContain({select: true})
//         // categories.selectCategory.toHaveBeenCalledTimes(1)
//         // categories.selectCategory.toHaveBeenCalledWith("Все")
//         // expect(category.selectCategory).toHaveBeenCalledTimes(1)
//         // expect(category.selectCategory).toHaveBeenCalledWith("Все")
//         const rr = category.selectCategory("Все")
//         expect(rr).toEqual(localCategory);
//     })
// })
//
//
// // describe("cat", () => {
// //     test("should render component correctly", () => {
// //         const { container } = render(Index);
// //
// //         expect(container).toContainHTML("<div></div>");
// //     });
// // })