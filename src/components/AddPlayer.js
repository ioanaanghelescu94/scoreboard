import React, {Component} from 'react';

class AddPlayer extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         value:props.ceva
    //     }
    // }
    //nu mai trb sa scriem this.props.ceva ca apeam deja props la parametru
    //un alt mod de a scrie un state - prin constructor
    
    state = {
        value:''
    }

    handleValueChange = (e) => {
        console.log(e);
        console.log(e.target);

        this.setState( {
                value: e.target.value
                // target e inputul
                //parametrul trebuie pus
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        //e de la event
        //prevent defaut ca sa nu trimita catre server cand dam add player
        //si sa faca ce vrem noi
       this.props.addPlayer(this.state.value)
       // addPlayer(handeAddPlayer) e accesata prin props
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmitForm }>
                    <input type="text"
                            value={ this.state.value }
                            onChange={ this.handleValueChange }
                            placeholder="Enter your name"/>
                    {/* nu merge sa scriu peste value, trb sa scriem onChange, o functie 
                    pe care o facem local, in Componenta */}
                    
                    <input type="submit"
                            value="Add Player"/>
                </form>
            </div>
        )
    }
}

export default AddPlayer;