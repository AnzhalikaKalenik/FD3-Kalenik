var Filter = React.createClass ({

    displayName: 'Filter',

    propTypes: { //через propTypes задаем типы пропсов
        listWords: React.PropTypes.array.isRequired, //задаем тип пропсов - массив и его нельзя не передать
        // listWords: React.PropTypes.arrayOff( //задаем тип пропсов - массив и его нельзя не передать
        //     React.PropTypes.shape({
        //         code: React.PropTypes.number.isRequired,
        //         word: React.PropTypes.string.isRequired,
        //         //freeanswer: React.PropTypes.bool,
        //     })
        // ) 
    },

    getInitialState: function() {
        return { 
          sort: false,
          filter:'',
          currentWords:this.props.fullWords,
        };
    },

    sortChanged: function(eo){
        this.setState({sort:eo.target.checked},this.processWords);
    },

    filterChanged: function(eo){
        this.setState({filter:eo.target.value},this.processWords);
    },

    clearAll: function(eo){
        this.setState({sort:false,filter:""},this.processWords);
    },

    processWords: function(){
        let words=this.props.fullWords.slice();
        if(this.state.filter)
            words=words.filter(
                // функция фильтрации  
              function filterArrayOfWords(queru){
                return arrayOfWords.filter(function(el){
                    return el.toLowerCase().indexOf(queru.toLowerCase())>-1;
                })
              }
            )
            if (this.state.sort)
            words.sort();

        this.state({currentWords:words});
    },

    render(){
        this.state.currentWords;

        var listWordsCode=[];
        for ( var a=0; a<this.props.listWords.length; a++ ) {//проходим циклом повсем вариантам списка товаров
            var listWord=this.props.listWords[a];
            var listWordCode=
              React.DOM.div({key:listWord.code,className:'listWord'},// у каждого элемента массива должен быть свой уникальный кеу
                React.DOM.input({type:'checkbox',checked:this.state.sort, onClick:this.sortChanged}),
                React.DOM.input({type:'text',value:this.state.filter, onChange:this.filterChanged}),
                React.DOM.input({type:'button',value:'сброс', onChange:this.clearAll}),
                React.DOM.span({className:'Word'},this.props.word),
                //React.DOM.span({className:'Code'},this.props.code),
            );
            listWordsCode.push(listWordCode);
        


        return React.DOM.div({className: 'Filter'},
            React.DOM.div({className:'listWordsCode'}, listWordsCode),
        );
      }
    }
})