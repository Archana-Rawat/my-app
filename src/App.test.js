import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import {shallow} from 'enzyme'
describe("App", () => {
  it("should render my component successfully", () => {
    const wrapper = shallow(<App />);
  });
});
