import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos( elementIDs.TodoList, todos );
    }

    //Cuando la función App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html; // {{ name }}
        document.querySelector(elementId).append( app );
        displayTodos();
    })();


    // Referencias HTML
    const newDescriptionInput = document.querySelector( elementIDs.NewTodoInput );


    // Listeners
    newDescriptionInput.addEventListener('keyup', ( event ) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().leng === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

}