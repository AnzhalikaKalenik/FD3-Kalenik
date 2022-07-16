var Item = React.createClass ({

    displayName : 'Item',

    PropTypes : {
   
        product: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        prise: React.PropTypes.number.isRequired,
        photo: React.PropTypes.string.isRequired,
        balance: React.PropTypes.number.isRequired,
        control: React.PropTypes.string.isRequired,
        selectedItemCode: React.PropTypes.string.isRequired, //передает какой товар выделен.Cам товар зная свой код и зная выделен он или не выделен,выбирает фон строки(оранжевый или белый)
        cbSelected: React.PropTypes.func.isRequired, //вот тут нужно от магазина получить cb (функцию selected)
        cbDelete: React.PropTypes.func.isRequired, //передаем функцию deleteItem как cb каждому товару и каждый товар
    },


    clicked: function(EO){ //она знает что на нее кликнули,и должна сказать магазину,что она теперь должна быть выделена    
        this.props.cbSelected(this.props.code); //когда мы по товару щелкнули он,вызывает this.props.cbSelected 
        //фактически функцию selected и сообщает какой товар выделить.
        //чтобы узнать какой товар выделен используем (this.props.code)
        //т.к. каждый товар знает свой props(т.е. мы сообщили магазину выдели меня)
    },


    delete: function(EO){ //своя функция delete вызывает props cbDelete и передает ему this.props.code 
        this.props.cbDelete(this.props.code); //(this.props.code);
        EO.stopPropagation();     
    } ,
    //т.е. когда на товаре щелкаем удалить(button),вызывается функция delete
    //она вызывает cbDelete и передает ему код товара this.props.code
    //а cbDelete эта фукция у магазина deleteItem, она получает код товара,
    //который нужно удалить(itemCode),удаляет его и все перерендревает

    
    // //как сделать чтоб товар выделялся?
    // <tr onClick = this.clicked> //когда отрендерим сторку,рано или поздно в строке будет onClick
    //     <td> //каждый товар внутри строки будет иметь в ячейке input 
    //         <input type=button onClick =this.delete> //вызываем свою функцию delete
    //     </td>
    // </tr> 

    render: function(){

        if (this.props.selectedItemCode=this.props.code){
            return React.DOM.div( null,
                React.DOM.label({className:'blockItem'},

                    React.DOM.input({type:'button', 
                        value:this.props.code, 
                        name:'buttonItem',
                        onClick:this.clicked,
                    }),

                    React.DOM.span({
                        style:{color:(this.props.selectedItemCode==this.props.code)?'orange':'black'}
                    }, this.props.product),

                    React.DOM.span({
                        style:{color:(this.props.selectedItemCode==this.props.code)?'orange':'black'}
                    }, this.props.price),

                    React.DOM.span({
                        style:{color:(this.props.selectedItemCode==this.props.code)?'orange':'black'}
                    },this.props.photo),

                    React.DOM.span({
                        style:{color:(this.props.selectedItemCode==this.props.code)?'orange':'black'}
                    },this.props.balance),

                    React.DOM.span({
                        style:{color:(this.props.selectedItemCode==this.props.code)?'orange':'black'}
                    },this.props.control),
        
                )
            )
        }

        else{
           return React.DOM.div( {className:'Item'}, 
            React.DOM.span({className:'Product'},this.props.product),
            React.DOM.span({className:'Price'},this.props.price),
            React.DOM.span({className:'Photo'},this.props.photo, React.DOM.img({src:this.props.photo})),
            React.DOM.span({className:'Balance'},this.props.balance),
            React.DOM.span({className:'Control'},this.props.control, React.DOM.input({type:'button', value:this.props.control})),
          );
        }  
    }
});
// 0. Есть Массив с товарами "startItemsListArr", одно из свойств товара - уникальный code.
// 1. Есть компонент со списком товаров "ishop2". Получает props с массивом товаров. Рендерит для каждого товара компонент
//    "item".В state у "ishop2" есть selectedProductCode - код выбранного (подсвеченного) сейчас товара, изначально - null.
// 2. Компонент "item".Получает props с товаром(не надо отдельными реквизитами, сразу весь товар)и props с признаком, выделена ли строка.
//    Рендерит строку товара со светлым фоном (не выделена) или с тёмным (выделена).
// 3. По клику на строку товара надо его выделить. А то есть,"ishop2" передаёт всем "item" ещё один пропс - коллбек cbSelectProduct. 
//    Когда мы щёлкаем по строке с товаром,"item" знает что он щёлкнут и он вызывает этот коллбек, сообщая "ishop2", что теперь выделен 
//    именно он. "ishop2" меняет свой стейт selectedProductCode на переданный коллбеку, и т.к. стейт изменился, вся таблица товаров 
//    перерисовывается уже с новым выделенным товаром.