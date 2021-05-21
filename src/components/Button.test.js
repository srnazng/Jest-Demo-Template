import React from "react";
import { shallow, mount } from "enzyme";
import Button from './Button';
import Counter from './Counter';

// TEST SUITE FOR BUTTONS
describe("Tests for Buttons", () => {
    const mockClickFunc = jest.fn();    // mock function
    const mockText = "button text";
    const mockLabel = "button label";

    // implementing mock function
    it("button renders correctly", () => {
        const wrapper = shallow(<Button label={mockLabel} text={mockText} clickFunc={mockClickFunc} />)
        expect(wrapper.contains(<button onClick={mockClickFunc}>{mockText}</button>)).toBe(true);
    })

    // .find
    it("includes two buttons", () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.find("Button").length).toEqual(2);
    });

    // .text
    it("label renders correctly", () => {
        const wrapper = shallow(<Button label={mockLabel} text={mockText} clickFunc={mockClickFunc} />)
        const value = wrapper.find("p").text();
        expect(value).toEqual(mockLabel);
    })

    // simulate events
    it("onClick function called", () => {
        const wrapper = shallow(<Button label={mockLabel} text={mockText} clickFunc={mockClickFunc} />)
        wrapper.find("button").simulate("click");
        expect(mockClickFunc.mock.calls.length).toEqual(1);
    })
})