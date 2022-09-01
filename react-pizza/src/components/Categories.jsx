import React from 'react';

function Categories({ value, onChangeCategory }) { //в value хранится активный индекс
  // const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  // const onClickCategory = (index) => { //можно не создавать ф-ю onClickCategory,если у нас только одно действие (вызов ф-и setActiveIndex), можно просто ниже сразу вызвать setActiveIndex,вместо onClickCategory 
  //   setActiveIndex(index);
  // };

    return(
      <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li 
            key={i} 
            onClick={() => onChangeCategory(i)} //передаем анонимную функцию, чтобы она вызвала функцию onClickCategory, чтобы избежать ошибки to many render
            className = {value === i ? 'active' : ''}> 
            {categoryName}
          </li>
        ))}    
      </ul>
    </div>
    );
  }

  export default Categories;