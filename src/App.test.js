import App from './App';
import Counter from './components/Counter';
import React from "react";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});
