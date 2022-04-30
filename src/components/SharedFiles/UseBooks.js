import { useEffect, useState } from "react"

const useBooks = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setItem(data))
},[])

return [item, setItem]
}

export default useBooks;