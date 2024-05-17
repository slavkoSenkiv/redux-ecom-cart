import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: '1st book',
    descripton: 'the first book I wrote'
  },
  {
    id: 'p2',
    price: 1,
    title: '2d book',
    descripton: 'the second book I wrote'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.descripton}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
