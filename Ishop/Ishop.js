var Ishop = React.createClass ({

    displayName: 'Ishop', //всегда ставим ,

    propTypes: { //через propTypes задаем типы пропсов
        productsList: React.PropTypes.array.isRequired, //задаем тип пропсов - массив и его нельзя не передать
    },

    render: function (){ // и выглядит компонент вот так
        var productsListCode = [];
        for ( var a=0; a<this.props.productsList.length; a++ ) {//проходим циклом повсем вариантам списка товаров
            var productList=this.props.productsList[a];
            var productListCode=        
              React.DOM.div({key:productList.code,className:'ProductList'},// у каждого элемента массива должен быть свой уникальный кеу
                React.DOM.span({className:'Product'},productList.product),
                React.DOM.span({className:'Price'},productList.price),
                React.DOM.span({className:'Photo'},productList.photo, React.DOM.img({src:productList.photo})),
                React.DOM.span({className:'Balance'},productList.balance),
              );
            productsListCode.push(productListCode);
          }
          return React.DOM.div( {className:'Ishop'}, 
            React.DOM.div( {className:'ProductsListCode'}, productsListCode ),//productsListCode массив описанный выше
          );
    },
})