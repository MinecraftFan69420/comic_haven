document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll(".bookfilter");
    const books = document.querySelectorAll(".book");

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            // Get active filters
            const activefilters = Array.from(filters)
                .filter(filter => filter.checked)
                .map(filter => filter.id);
            console.log("Active filters:", activefilters); // Debugging output

            books.forEach(book => {
                // Get the filtercategory attribute
                const bookcategories = book.getAttribute("filtercategory");
                console.log(`Book: ${book.textContent.trim()}, Filtercategory: "${bookcategories}"`); // Debugging output

                // Handle empty or non-empty filtercategory
                const categories = bookcategories && bookcategories !== ''
                    ? bookcategories.split(" ").filter(Boolean)
                    : [];
                console.log(`Categories for "${book.textContent.trim()}":`, categories); // Debugging output

                //Determine whether to show or hide the book
                if (
                    activefilters.length === 0 || 
                    activefilters.some(filter => categories.includes(filter))
                ) {
                    book.style.display = ""; // Show the book
                    console.log(`Showing book: ${book.textContent.trim()}`); // Debugging output
                } else {
                    book.style.display = "none"; // Hide the book
                    console.log(`Hiding book: ${book.textContent.trim()}`); // Debugging output
                }
            });
        });
    });
});