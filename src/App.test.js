import App from './App';
import Counter from './components/Counter';
import React from "react";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders correctly", () => {
  const wrapper = shallow(<App />);
  // const wrapper = mount(<App />); // also works but less efficient
  expect(wrapper.contains(<Counter />)).toBe(true);
});

// shallow vs. mount
it("contains header", () => {
  // const wrapper = shallow(<App />); // does NOT work because does not render child components
  const wrapper = mount(<App />);
  expect(wrapper.contains(<h4>Counter</h4>)).toBe(true);
});