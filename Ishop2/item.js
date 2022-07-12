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


    clicked: function(){ //она знает что на нее кликнули,и должна сказать магазину,что она теперь должна быть выделена    
        this.props.cbSelected(this.props.code); //когда мы по товару щелкнули он,вызывает this.props.cbSelected 
        //фактически функцию selected и сообщает какой товар выделить.
        //чтобы узнать какой товар выделен используем (this.props.code)
        //т.к. каждый товар знает свой props(т.е. мы сообщили магазину выдели меня)
    },


    delete: function(EO){ //своя функция delete вызывает props cbDelete и передает ему this.props.code 
        this.props.cbDelete(this.props.code);
        eo.stopPropagation();     
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



        return React.DOM.div( {className:'Item'}, 
            React.DOM.span({className:'Product'},this.props.product),
            React.DOM.span({className:'Price'},this.props.price),
            React.DOM.span({className:'Photo'},this.props.photo, React.DOM.img({src:this.props.photo})),
            React.DOM.span({className:'Balance'},this.props.balance),
            React.DOM.span({className:'Control'},this.props.control, React.DOM.input({type:button, value:this.props.control})),
          );
    }
});