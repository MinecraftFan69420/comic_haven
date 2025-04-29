document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll(".bookfilter")
    const books = document.querySelectorAll(".book")

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const activefilters = Array.from(filters).filter(filter => filter.checked).map(filter => filter.id)
            books.forEach(book => {
                const categories = book.getAttribute("filtercategory") != ""
                    ? book.getAttribute("filtercategory").split(" ").filter(Boolean)
                    : []; 
                if (activefilters.length === 0 || activefilters.some(filter => categories.includes(filter))) {
                    book.style.display = ''
                } else book.style.display = 'none'
            })
        })
    })
})