import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from '../src/Reducers/App';
import thunk from 'redux-thunk';
import actions from '../src/Actions/actions';
import chai from 'chai';

describe("Store ", function()
{
    var store;
    var expect;
    var testTodo = {id:1, title:"Title"};
    beforeEach(function()
    {
        store = createStore(reducers);
        chai.should();
        expect = chai.expect;
    });
    it("should have default set of todos",function(){
        store.dispatch({type:"dummyAction"});

        let state = store.getState().todos;

        state.length.should.be.equal(2);
        state[0].title.should.be.equal("Test todo 1");
        state[1].title.should.be.equal("Test todo 2");
    });


    it("should create todo",function()
    {
        store.dispatch(actions.CreateTodo(testTodo));

        let state = store.getState().todos;

        state.length.should.be.equal(3);
        state[2].title.should.be.equal(testTodo.title);
    });

    it("should update todo",function()
    {
        store.dispatch(actions.CreateTodo(testTodo));
        store.dispatch(actions.UpdateTodo({id:1, title:"Updated Title"}));

        let state = store.getState().todos;

        state[2].title.should.be.equal("Updated Title");
    });

    it("should delete todo",function()
    {
        store.dispatch(actions.CreateTodo(testTodo));
        store.dispatch(actions.DeleteTodo(testTodo.id));

        let state = store.getState().todos;

        expect(state).to.not.include(testTodo);
    });

    it("should toggle selection for all todos", function(){
        store.dispatch(actions.ToggleSelectionAll(true));

        let state = store.getState().todos;

        state.map((item)=>{
            expect(item.isSelected).to.equal(true);
        });
    });

    it("should update todos if selected",function()
    {
        store.dispatch(actions.ToggleSelectionAll(true));
        store.dispatch(actions.UpdateSelectedTodos(true));

        let state = store.getState().todos;

        state.map((item)=>{
            expect(!!item.isCompleted).to.equal(true);
        });
    });

    it("shouldn't update todos if none selected",function()
    {
        store.dispatch(actions.UpdateSelectedTodos(true));

        let state = store.getState().todos;

        state.map((item)=>{
            expect(!!item.isCompleted).to.equal(false);
        });
    });

    it("should delete todos if selected", function()
    {
        store.dispatch(actions.ToggleSelectionAll(true));
        store.dispatch(actions.DeleteSelectedTodos());

        let state = store.getState().todos;

        state.length.should.equal(0);
    });

    it("shouldn't delete todos if none selected",function()
    {
        store.dispatch(actions.DeleteSelectedTodos());

        let state = store.getState().todos;

        state.length.should.equal(2);
    });
});