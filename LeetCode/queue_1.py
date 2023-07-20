class MyQueue:
    def __init__(self):
        self._fifo = []

    def push(self, x: int) -> None:
        """
        push is supported natively in Python via .append().
        This appends x to the end of the fifo queue.
        """
        self._fifo.append(x)

    def pop(self) -> int:
        """
        pop removes and returns the first (oldest) item in the fifo queue.
        Exercise requirements state that all calls to pop are valid.
        """
        return self._fifo.pop(0)

    def peek(self) -> int:
        """
        peek returns the first (oldest) element in the fifo queue.
        Exercise requirements state that all calls to peek are valid.
        """
        return self._fifo[0]

    def empty(self) -> bool:
        """
        empty returns True if the fifo queue is empty, False if otherwise.
        """
        return not self._fifo   
        