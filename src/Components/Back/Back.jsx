import { useState, useEffect } from 'react';
import axios from 'axios';
import BackContext from './BackContext';
import CatsCrud from './Cats/Crud';
import Nav from './Nav';
import ProductsCrud from './Products/Crud';

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [createCat, setCreateCat] = useState(null);

  // Create
  useEffect(() => {
    if (null === createCat) return;
    axios
      .post('http://localhost:3003/admin/cats', createCat)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      // gaudo .catch errorus
      .catch((error) => {
        showMessage({ text: error.message, type: 'danger' });
      });
  }, [createCat]);

  const showMessage = () => {};

  return (
    <BackContext.Provider
      value={{
        setCreateCat,
      }}
    >
      {show === 'admin' ? (
        <>
          <Nav />
          <h1>BACK</h1>
        </>
      ) : show === 'cats' ? (
        <CatsCrud />
      ) : show === 'products' ? (
        <ProductsCrud />
      ) : null}
    </BackContext.Provider>
  );
}

export default Back;
