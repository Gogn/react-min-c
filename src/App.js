import React, {Component} from 'react';
import './App.css';
import Cat from './Cat/Cat.js';
import Add from './Cat/Add.js';
import index from "radium/es/plugins";

class App extends Component {

    state = {
        cats: [
            {name: 'Барсик', born: '2018'},
            {name: 'Рыжик', born: '2016'}
        ],
        pageTitle: 'The cats app',
        showCats: false
    };

    toggleCatsHandler=()=>{
        this.setState({
            showCats: !this.state.showCats
        })
    };

    handleInput=(event)=>{
        this.setState({
            pageTitle: event.target.value
        })
    };

    onChangeName(name, index){
        console.log(name, index)
        const cat=this.state.cats[index]
        cat.name=name
        const cats = [...this.state.cats]  //Создание клона массива, так как напрямую его нельзя менять
        cats[index] = cat
        this.setState({cats //cats: cats (Эквивалентная запись)
        })
    }

    deleteHandler(index){
        const cats=this.state.cats.concat() // Копия массива
        cats.splice(index, 1)
        this.setState({cats})
    }

    handleInputAdd=event=> {
        this.setState({
            newcat: event.target.value
        })
        console.log('newcat')
    }

    addHandler=()=>{
        // const prev_cats=[...this.state.cats]
        // this.setState( (prev_cats) => ({
        //         cats: [
        //             ...prev_cats,
        //             {name: 'qwe', born: '123'}
        //             ]
        //     })
        // )

        this.setState( ({cats,newcat}) => ({
                cats: [
                    ...cats,
                    {name: 'qwe', born: '123'}
                ],
                newcat: 'YEAH!'
            })
        )
    }



    render() {
        const divStyle = {
            textAlign: 'center'
        };

        let cats = null
        if (this.state.showCats) {
            cats = this.state.cats.map((cat, index)=>{
                return (
                    <Cat
                        key={index}
                        name={cat.name}
                        born={cat.born}
                        onChangeName={event=>this.onChangeName(event.target.value, index)}
                        // onDelete={this.deleteHandler.bind(this, index)}
                        onDelete={event=>this.deleteHandler(event.target.value, index)}
                    />
                )
            })
        }

        return (
            <div style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                {/*<Add*/}
                {/*    handleInputAdd={event=>this.handleInputAdd(event.target.value, index)}*/}
                {/*/>*/}
                <input
                    type="text"
                    onChange={this.handleInputAdd}
                />
                <button onClick={this.addHandler}>Add</button>
                <br/>

                <input type="text" onChange={this.handleInput} />

                <button onClick={this.toggleCatsHandler}>
                    toggleCats
                </button>

                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: 20,
                }}>
                { cats }
                </div>
            </div>
        );
    };
}

export default App;
