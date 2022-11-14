class ToDoItem {
    constructor(id, title, deadline, isRepeated, repetition_id, tags, participants, memo, status) {
        this.id = id;
        this.title = title || "No title";
        this.deadline = deadline || new Date();
        this.isRepeated = isRepeated;
        this.repetition_id = repetition_id;
        this.tags = tags;
        // this.participants = participants,
        this.memo = memo || "Empty";
        this.status = status || "IN_PROGRESS";
    }
}
export default ToDoItem;