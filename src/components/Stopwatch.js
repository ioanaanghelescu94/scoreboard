import React, {Component} from 'react';

class Stopwatch  extends Component {

    state = {
        isRunning : false,
        elapsedTime : 0,
        previousTime: 0
    };


    handleStopwatch = () => {
            this.setState( prevState => ({
                isRunning: !prevState.isRunning
                // adica isRunning devine adevarat
            }));

            if (!this.state.isRunning) {
                this.setState({
                    previousTime: Date.now()
                    //The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
                });
            }
        }

     handleReset = () => {
        this.setState( prevState => ({
                elapsedTime: 0
            }))
        }

        
    tick = () => {
        console.log('tick');
        //o metoda care va stabili inervalul de timp
        if (this.state.isRunning) {
            //momentul in care ruleaza cineva timerul, valoaarea lui isRunning se schimba din handleStopwatch, at incepe functia
            const now = Date.now();
            this.setState( prevState => ({
                previousTime : now,
                elapsedTime : prevState.elapsedTime + (now - this.state.previousTime)
            }));

            // this.setState( function(prevstate) {
            //     return {
            //         elapsedTime:333
            //     };
            // })

            // this.setState ({
            //     elapsedTime:333
            // })
            // se poate pasa obiectul direct, fara intermedil unei functii, insa NU e recomandat
        }
    }

    //prevState se refera la tot obiectul state- cel de dinainte de momentul interactiunii. setState,cu toate atributele/metodele

    //nu se poate apela in clasa

    componentDidMount() {
        console.log('did mount');
        this.intervalID = setInterval(this.tick, 1000);
        //structura prin care se poate apela functia asta, se agata de acest this, intervalId ai exista si in compDidMout
        //functia si intervalul
    }

    componentWillUnmount() {
        //distrucem intervalId, care se va regenera de fiecare data, ca sa nu ocupe din memorie
        this.clearInterval(this.intervalId)
    }

    //componentDidMount e o metoda de CLASA - apelarea functiilor din niste metode predefinite 
    //e o componenta inserata direct in Dom
    //e prima metoda care se apeleaza
    //componentWillUnmount()
    

        render() {
            console.log('render');

            const seconds = Math.floor(this.state.elapsedTime/1000);

            return (
                <div className="stopwatch">
                    <h2>Stopwatch</h2>
                    
                    <span className = "stopwatch-time">{ seconds }</span>

                    <button onClick = {this.handleStopwatch}>
                        { this.state.isRunning ? 'Stop' : 'Start'}
                    </button>
        
                    <button onClick = {this.handleReset}>Reset</button>
                </div>
            )
        }    

    }

       
export default Stopwatch;