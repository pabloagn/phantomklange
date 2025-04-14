/**
 * Book Archive filtering and search functionality
 * Phantomklänge
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const booksContainer = document.getElementById('books-container');
    if (!booksContainer) return; // Only run on book archive pages
    
    const bookCards = Array.from(booksContainer.querySelectorAll('.book-card'));
    const searchInput = document.getElementById('book-search');
    const periodFilter = document.getElementById('period-filter');
    const genreFilter = document.getElementById('genre-filter');
    const sortBySelect = document.getElementById('sort-by');
    const resultsCount = document.getElementById('count');
    const noResults = document.getElementById('no-results');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const activeFiltersContainer = document.getElementById('active-filters');
    
    // Initialize count
    if (resultsCount) {
        resultsCount.textContent = bookCards.length;
    }
    
    /**
     * Filter books based on current criteria
     */
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedPeriod = periodFilter ? periodFilter.value.toLowerCase() : '';
        const selectedGenre = genreFilter ? genreFilter.value.toLowerCase() : '';
        
        let visibleCount = 0;
        
        bookCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const author = card.getAttribute('data-author').toLowerCase();
            const period = card.getAttribute('data-period').toLowerCase();
            const genre = card.getAttribute('data-genre').toLowerCase();
            
            const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
            const matchesPeriod = !selectedPeriod || period.includes(selectedPeriod);
            const matchesGenre = !selectedGenre || genre.includes(selectedGenre);
            
            const isVisible = matchesSearch && matchesPeriod && matchesGenre;
            
            card.style.display = isVisible ? '' : 'none';
            
            if (isVisible) {
                visibleCount++;
            }
        });
        
        // Update count and toggle empty state
        if (resultsCount) {
            resultsCount.textContent = visibleCount;
        }
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
        
        // Update active filters display
        updateActiveFilters();
    }
    
    /**
     * Sort books in the grid
     */
    function sortBooks() {
        if (!sortBySelect) return;
        
        const sortValue = sortBySelect.value;
        
        const sortedCards = bookCards.slice().sort((a, b) => {
            switch(sortValue) {
                case 'title-asc':
                    return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
                case 'title-desc':
                    return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));
                case 'author-asc':
                    return a.getAttribute('data-author').localeCompare(b.getAttribute('data-author'));
                case 'author-desc':
                    return b.getAttribute('data-author').localeCompare(a.getAttribute('data-author'));
                case 'date-desc':
                    return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date'));
                case 'date-asc':
                    return a.getAttribute('data-date').localeCompare(b.getAttribute('data-date'));
                case 'rating-desc':
                    return parseFloat(b.getAttribute('data-rating') || 0) - parseFloat(a.getAttribute('data-rating') || 0);
                default:
                    return 0;
            }
        });
        
        // Reorder DOM elements
        sortedCards.forEach(card => {
            booksContainer.appendChild(card);
        });
    }
    
    /**
     * Update active filters UI
     */
    function updateActiveFilters() {
        if (!activeFiltersContainer) return;
        
        activeFiltersContainer.innerHTML = '';
        
        // Search term
        if (searchInput && searchInput.value) {
            addActiveFilter(`Search: ${searchInput.value}`, () => {
                searchInput.value = '';
                filterBooks();
            });
        }
        
        // Period filter
        if (periodFilter && periodFilter.value) {
            const periodText = periodFilter.options[periodFilter.selectedIndex].text;
            addActiveFilter(`Period: ${periodText.split(' ')[0]}`, () => {
                periodFilter.value = '';
                filterBooks();
            });
        }
        
        // Genre filter
        if (genreFilter && genreFilter.value) {
            const genreText = genreFilter.options[genreFilter.selectedIndex].text;
            addActiveFilter(`Genre: ${genreText}`, () => {
                genreFilter.value = '';
                filterBooks();
            });
        }
    }
    
    /**
     * Add active filter tag to the UI
     */
    function addActiveFilter(text, clearFn) {
        const filterTag = document.createElement('span');
        filterTag.className = 'active-filter';
        filterTag.innerHTML = `${text} <button aria-label="Remove filter">×</button>`;
        
        filterTag.querySelector('button').addEventListener('click', clearFn);
        activeFiltersContainer.appendChild(filterTag);
    }
    
    // Set up event listeners
    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }
    
    if (periodFilter) {
        periodFilter.addEventListener('change', filterBooks);
    }
    
    if (genreFilter) {
        genreFilter.addEventListener('change', filterBooks);
    }
    
    if (sortBySelect) {
        sortBySelect.addEventListener('change', sortBooks);
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (periodFilter) periodFilter.value = '';
            if (genreFilter) genreFilter.value = '';
            if (sortBySelect) sortBySelect.value = 'title-asc';
            filterBooks();
            sortBooks();
        });
    }
    
    // Initialize with default sort
    sortBooks();
    
    // Add loading transitions for book covers
    bookCards.forEach(card => {
        const coverImg = card.querySelector('.book-cover img');
        if (coverImg) {
            coverImg.addEventListener('load', () => {
                coverImg.parentElement.classList.add('loaded');
            });
        }
    });
});