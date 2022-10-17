import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'



const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/catalog/:slug" component={Product} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}

export default Routes