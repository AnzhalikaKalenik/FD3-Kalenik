var Ishop2 = React.createClass ({

    displayName : 'Ishop2',

    propTypes : {
        //startItemsList:[...] //начальное значение массив 
        startItemsList:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              product: React.PropTypes.string.isRequired,
              code: React.PropTypes.number.isRequired,
              price: React.PropTypes.number.isRequired,
              photo: React.PropTypes.string.isRequired,
              balance: React.PropTypes.number.isRequired,
              control: React.PropTypes.string.isRequired,
            })
        )
    },

    getInitialState: function (){  //магазин должен знать какой товар выделен
      return{
        selectedItemCode: null,
        itemsList:this.props.startItemsList//текущий itemsList,где начальное значение startItemsList
      };
    },

    selected: function (newSelectedItemCode){//у магазина есть ф-я которая получает код товара
        //и именно эта функция в качестве props cbSelected попадает в товар
        //и когда мы по товару щелкаем он вызываает 
        this.setState({selectedItemCode:newSelectedItemCode})
        //мы хотим чтобы в state в ключе selectedItemCode лежало значение newSelectedItemCode
    },  //после все перерендерилось и уже товар получил собственный код и отрендерился оранжевым 

    deleteItem:function (itemCode){//чтобы научить удалять,начинаем с обратного направления
        let newItemsList=this.state.itemsList.filter(//прописываем условие-оставить те товары у которых код не равен itemCode )
        //теперь в newItemsList новый список,и мы его легко можем установить в setState ниже
        this.setState({itemsList:newItemsList})//гворим что текущий список товара itemsLis должен быть равен новому newItemsLis
        //далее все перерендерится
        )
    },

    render: function (){ 
      var startItemsListCode=this.props.startItemsList.map( v =>
        React.createElement(Item, {key:v.code, 
          product:v.product, price:v.price, photo:v.photo, balance:v.balance, control:v.control,
          cbSelected:this.state.selected,
          cbDelete:this.deleteItem}),
       );

          // var startItemsListCode = [];
          // for ( var a=0; a<this.props.startItemsList.length; a++ ) {//проходим циклом повсем вариантам списка товаров
          //     var startItemList=this.props.startItemsList[a];

              // var startItemListCode=        
              //   React.DOM.div({key:startItemList.code,className:'StartItemList'},// у каждого элемента массива должен быть свой уникальный кеу
              //     React.DOM.span({className:'Product'},startItemList.product),
              //     React.DOM.span({className:'Price'},startItemList.price),
              //     React.DOM.span({className:'Photo'},startItemList.photo, React.DOM.img({src:productList.photo})),
              //     React.DOM.span({className:'Balance'},startItemList.balance),
              //     React.DOM.span({className:'Control'},startItemList.control, React.DOM.input({type:button, value:productList.control})),
              //   );
              // startItemsListCode.push(startItemListCode)
      

          return React.DOM.div( {className:'Ishop2'}, 
            React.DOM.div( {className:'startItemsList'}, startItemsListCode),//startItemsListCode массив описанный выше
          )
      
    }
})
    
