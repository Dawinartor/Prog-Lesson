import React, {useState} from 'react';

const HookWithManyStates = () => {
    // Mehrere States in einer funktionellen Komponente
    const [age, setAge] = useState(42);
    const [fruite, setFruite] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);

    // Mehrere Funktionen fuer die Manipulation der States
    const changeAge = (newAge) => {
        age = newAge;
    }

    const changeFruite = (newFruite) => {
        fruite = newFruite;
    }

    //TODO: Fuege Textfeld hinzu um das Alter und die Frucht nachträglich zu manipulieren

return (
    <div>
        <p>Values are:</p>
        <ul>
            <li> Age: {age} </li>
            <li> Fruits: {fruite} </li>
            <li> Todos: {todos} </li>
        </ul>
    </div>
    );

}

export default HookWithManyStates;