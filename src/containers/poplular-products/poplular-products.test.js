import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PopularProducts from './poplular-products';
import Product from '../../components/product/product';

configure({adapter : new Adapter()});

describe('<PopularProducts />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PopularProducts />);
    });

    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render <Product /> when receiving products', () => {
        expect(wrapper.find(Product).exists()).toBe(true);
    });

    it('should render four <Product /> when receiving products', () => {
        expect(wrapper.find(Product)).toHaveLength(4);
    });

    it('should set the productList', () => {
        expect(wrapper.state().productList).toHaveLength(4);
    });

    it('should call incrementVotes method on clicking arrow btn', () => {
        const FakeFun = jest.spyOn(wrapper.instance(), 'incrementVotes');
        wrapper.instance().incrementVotes();
        expect(FakeFun).toHaveBeenCalled();
    });

    it('should call setState to update state after incrementing votes', () => {
        const FakeStateFun = jest.spyOn(wrapper.instance(), 'setState');
        wrapper.instance().incrementVotes();
        expect(FakeStateFun).toHaveBeenCalled();
    });

    it('should call setState to update state after sorting list', () => {
        const FakeStateFun = jest.spyOn(wrapper.instance(), 'setState');
        wrapper.instance().sortProductList();
        expect(FakeStateFun).toHaveBeenCalled();
    });

});