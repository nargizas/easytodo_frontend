class ToDoItem {
    constructor(id, title, deadline, isRepeated, repetition_id, tags, memo, item_status) {
        this.id = id;
        this.title = title || "No title";
        this.deadline = deadline || new Date();
        this.isRepeated = isRepeated;
        this.repetition_id = repetition_id;
        this.tags = tags;
        this.memo = memo || "Empty";
        this.item_status = item_status || "IN_PROGRESS";
    }
}
export default ToDoItem;