document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll(".bookfilter")
    const books = document.querySelectorAll(".book")

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const activefilters = Array.from(filters).filter(filter => filter.checked)
            books.forEach(book => {
                const bookcategories = book.getAttribute("filtercategory").split(" ")
                if (activefilters.length === 0 || activefilters.some(filter => bookcategories.includes(filter))) {
                    book.style.display = ''
                } else book.style.display = 'none'
            })
        })
    })
})