import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductDetails from './product-details';
import VotesContainer from '../votes-container/votes-container';
import Avatar from '../avatar/avatar';

configure({adapter : new Adapter()});

describe('<ProductDetails />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProductDetails title="product 1" description="product desc"/>);
    });

    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render one <VotesContainer />', () => {
        expect(wrapper.find(VotesContainer)).toHaveLength(1);
    });

    it('should render one <Avatar />', () => {
        expect(wrapper.find(Avatar)).toHaveLength(1);
    });

    it('should render two <p />', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });
});