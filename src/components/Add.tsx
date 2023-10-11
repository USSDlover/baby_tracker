export function Add() {
    const handleAdd = () => {
        console.log('Add new track');
    }

    return <button
        className={'fixed bottom-3 right-3 bg-green-600 text-white rounded px-5 py-3'}
        onClick={handleAdd}
    >Add</button>
}