import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './style.js';
const products = [
    {id:1, price:'$10', name:'100-річчя створення Українського військово-морського флоту', image: 'https://ireland.apollo.olxcdn.com/v1/files/qfwwrxi28hpu2-UA/image;s=1000x700', description: 'Присвячена 100-річчю створення Українського військово-морського флоту`. Центральною Радою на початку 1918 року було прийнято ряд важливих військово-морських законів, які на той час мали декларативний характер, у тому числі один із найголовніших - `Тимчасовий закон про флот`.'},
    {id:2, price:'$10', name:'День пам`яті полеглих захисників України', image:'https://ireland.apollo.olxcdn.com/v1/files/w31c6o5y3m2d2-UA/image;s=1000x700', description:'Присвячена увічненню героїзму і вшануванню пам’яті військовослужбовців та учасників добровольчих формувань, які віддали життя в боротьбі за незалежність, суверенітет і територіальну цілісність України.У новітню історію нашої держави та українського війська вкарбовані подвиги воїнів, які самовіддано обороняли нашу землю.' },
];

const Products = () => {
    const classes = useStyles();
    return(
         <main className={classes.content}>
            <div className={classes.toolbar} /> 
            <Grid container justify ="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key = {product.id} xs={12} sm={6} md={4} ld={3}>
                        <Product product={product}/>
                        </Grid>
                ))}
            </Grid>
        </main>
        
    )
    
}

export default Products;