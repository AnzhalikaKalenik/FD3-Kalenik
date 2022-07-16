var Filter = React.createClass ({

    displayName: 'Filter',

    propTypes: { 
        listWords: React.PropTypes.arrayOf( 
            React.PropTypes.shape({
                word: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        ) 
    },

    getInitialState: function() {
        return { 
          sort: false,
          filter:'',
          currentWords:this.props.listWords,
        };
    },

    sortChanged: function(EO){
        this.setState({sort:EO.target.checked},this.processWords);
    },

    filterChanged: function(EO){
        this.setState({filter:EO.target.value},this.processWords);
    },

    clearAll: function(EO){
        this.setState({sort:EO.false,filter:""},this.processWords);
    },

    processWords: function(){
        
        let words=this.props.listWords.slice(); //slice-поверхностная копия

        if (this.state.filter)
            words=words.filter(
                // функция фильтрации  
                function filterArrayListWords (say){
                return words.filter(function(el){
                    return el.toString().toLowerCase().indexOf(say.toString().toLowerCase())>-1;
                })
              }
            )
        

        if (this.state.sort){
            words.sort();
        }

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
            );
            listWordsCode.push(listWordCode);
        


        return React.DOM.div({className: 'Filter'},
            React.DOM.div({className:'listWordsCode'}, listWordsCode),
        );
      }
    }
})