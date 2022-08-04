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
        
        if (this.state.filter){
            words=words.filter( //аргументом методу filter передаю функцию
                // функция фильтрации  
                filterArrayListWords = (word) =>{ //она получает слово и возвращает true если в данном слове есть подстрока из this.state.filter
                    return (word.word.toLowerCase().indexOf((this.state.filter)) !== -1);
                }
            )
        }    

        if (this.state.sort){
            return words.sort();
        }       

        this.setState({currentWords:words});
    
    },

    render(){
      
        var currentWordsCode=this.state.currentWords.map( v =>
            React.DOM.div({key:v.code, className:'Word'},v.word),
          );

        return React.DOM.div({className:'Filter'},

            React.DOM.input({type:'checkbox',checked:this.state.sort, onClick:this.sortChanged}),
            React.DOM.input({type:'text',value:this.state.filter, onChange:this.filterChanged}),
            React.DOM.input({type:'button',value:'сброс', onChange:this.clearAll}),
        
            React.DOM.div({className:'CurrentWord'}, currentWordsCode),
        );
      
    }
})