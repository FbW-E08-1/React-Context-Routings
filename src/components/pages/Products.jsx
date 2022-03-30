import { useContext, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import MyContext from '../../context/MyContext';

const Products = () => {
  const { auth, results, loading, error } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    !auth && navigate('/');
  }, [auth, navigate]);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  const list = results.map((item) => (
    <li key={item.id}>
      <Link to='/product-detail' state={item}>
        <p>{item.title}</p>
      </Link>
    </li>
  ));

  return <section>{list}</section>;
};

export default Products;
