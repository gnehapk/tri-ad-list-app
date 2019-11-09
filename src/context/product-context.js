import React from 'react';

const ProductContext = React.createContext({
    votes: 0,
    increamentVotes: () => {},
    avatar: ''
});

export default ProductContext;