import actions from '../src/Actions/actions';
import actionTypes from '../src/Actions/actionTypes';
import chai from 'chai';

describe("Action creators ",function()
{
    var expect;
    var testTodo = {id:1, title: "Title"};
    beforeEach(function()
    {
        expect = chai.expect;
    });
    it("should provide create todo action",function()
    {
        let action = actions.CreateTodo(testTodo);

        expect(action.type).to.be.equal(actionTypes.CREATE_TODO);
        expect(action.payload).to.be.equal(testTodo);
    });
    it("should provide delete selected todos action",function()
    {
        let action = actions.DeleteSelectedTodos();

        expect(action.type).to.be.equal(actionTypes.DELETE_SELECTED_TODOS);
        expect(action.payload).to.be.equal(undefined);
    });
    it("should provide delete action",function()
    {
        let action = actions.DeleteTodo(testTodo.id);

        expect(action.type).to.be.equal(actionTypes.DELETE_TODO);
        expect(action.payload.id).to.be.equal(testTodo.id);
    });
    it("should provide toggle selection all action",function()
    {
        let action = actions.ToggleSelectionAll(true);

        expect(action.type).to.be.equal(actionTypes.TOGGLE_SELECTION_ALL);
        expect(action.payload.selection).to.be.equal(true);
    });

    it("should provide update selected todos action",function()
    {
        let action = actions.UpdateSelectedTodos(true);

        expect(action.type).to.be.equal(actionTypes.UPDATE_SELECTED_TODOS);
        expect(action.payload.isCompleted).to.be.equal(true);
    });
    it("should provide update todo action",function()
    {
        let action = actions.UpdateTodo(testTodo);

        expect(action.type).to.be.equal(actionTypes.UPDATE_TODO);

        expect(action.payload.todo.id).to.be.equal(testTodo.id);
        expect(action.payload.todo.title).to.be.equal(testTodo.title);
        expect(action.payload.todo.isSelected).to.be.equal(false);
        expect(action.payload.todo.isEdited).to.be.equal(false);
        expect(action.payload.todo.isCompleted).to.be.equal(false);
    });
});
