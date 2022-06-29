import CatsCrud from './Cats/Crud';
import ProductsCrud from './Products/Crud';

function Back({ show }) {
  if (show === 'admin') {
    return <h1>BACK</h1>;
  }

  if (show === 'cats') {
    return <CatsCrud />;
  }

  if (show === 'products') {
    return <ProductsCrud />;
  }
}

export default Back;
