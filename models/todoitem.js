class ToDoItem {
  constructor(id, title, deadline, isRepeated, repetitionId, tags, memo, status) {
    this.id = id;
    this.title = title || 'No title';
    this.deadline = deadline || new Date();
    this.isRepeated = isRepeated;
    this.repetition_id = repetitionId;
    this.tags = tags;
    this.memo = memo || 'Empty';
    this.status = status || 'IN_PROGRESS';
  }
}
export default ToDoItem;
