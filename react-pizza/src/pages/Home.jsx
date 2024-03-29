import React from 'react';
// import axios from 'axios';
import { useSelector, useDispatch  } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const dispatch = useDispatch();
  //console.log(dispatch)
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  //const {categoryId, sort} = useSelector((state) => state.filter);

  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };
  
  React.useEffect(() => {
    setIsLoading(true); //чтобы отображался скелетон не только при первом рендере,но и при дальнейшем выборе категорий пицц
    //1
    // const sortBy = sortType.sortProperty.replace('-', ''); 
    // const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    // const category = categoryId > 0 ? `category=${categoryId}` : '';
    // const search = searchValue ? `search=${searchValue}` : '';
    // fetch(`https://6304dbc894b8c58fd726c315.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${search}`)

    //2
    fetch(`https://6304dbc894b8c58fd726c315.mockapi.io/items?page=${currentPage}&limit=4&${ 
      categoryId > 0 ? `category=${categoryId}` : '' //если категория >0 то передаем category, если =0 то передаем ''
    }&sortBy=${sortType.sortProperty}&order=desc 
    &search=${searchValue ? `search=${searchValue}` : ''}`
    //когда передаем все пиццы чтобы не передавалась категория указано выше &search
    )

    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });

    // axios
    //   .get(`https://6304dbc894b8c58fd726c315.mockapi.io/items?page=${currentPage}&limit=4&
    //     ${categoryId > 0 ? `category=${categoryId}` : ''}
    //     &sortBy=${sortType.sortProperty}&order=desc 
    //     &search=${searchValue ? `search=${searchValue}` : ''}`
    //   )

    //   .then((res) => {
    //     setItems(res.data);
    //     setIsLoading(false);
    //   });  

    window.scrollTo(0, 0); //чтобы scrol подымался на самый верх при возврате назад
  }, [categoryId, sortType, searchValue, currentPage]); //useEffect следи за переменными categoryId и sortType,и если они поменяются делай запрос на backend,и тогда backend ввернет новые пиццы
  
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>);
  
    // .filter(obj => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })

  const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? sceletons : pizzas} 
      </div> 
      {/*если идет загрузка создай массив из undefined и замени его на скелетоны (чтобы не дергались скелетоны при загрузке) иначе отобрази PizzaBlock */}
      
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}

export default Home;