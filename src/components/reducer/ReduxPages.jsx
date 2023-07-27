import React from 'react';
import { connect } from 'react-redux';

const App = ({ counter, texte, increment, decrement, resetText, changeText }) => {
    return (
        <div>
            <h1>Counter&nbsp;: {counter}</h1>
            <button onClick={increment}>Increment</button>&nbsp;
            <button onClick={decrement}>Decrement</button>
            <h1>Change couleur&nbsp;: {texte}</h1>
            <button onClick={changeText}>Change texte</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        texte: state.texte,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        changeText: () => dispatch({ type: 'CHANGETEXT' }),
    };
};

// Fonction connect pour lier ensemble les constantes mapStateToProps et mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);