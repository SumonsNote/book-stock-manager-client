import { useEffect, useState } from "react"

const useBooks = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://dry-beyond-11415.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setItem(data))
},[])

return [item, setItem]
}

export default useBooks;