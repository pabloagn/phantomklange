// Function to add anchor links to headings
function addAnchorLinks() {
    // Target all heading elements in the article content
    const article = document.querySelector('.book-content');
    if (!article) return;
  
    const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(heading => {
      // Create an ID if it doesn't exist
      if (!heading.id) {
        // Create a slug from the heading text
        const slug = heading.textContent
          .toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special chars
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/-+/g, '-'); // Remove consecutive hyphens
        
        heading.id = slug;
      }
      
      // Create the anchor element
      const anchor = document.createElement('a');
      anchor.href = `#${heading.id}`;
      anchor.className = 'heading-anchor';
      anchor.setAttribute('aria-hidden', 'true');
      
      // Wrap the heading content in a span to position the anchor properly
      const wrapper = document.createElement('span');
      wrapper.className = 'heading-wrapper';
      
      // Move the heading's content into the wrapper
      const headingContent = heading.innerHTML;
      heading.innerHTML = '';
      wrapper.innerHTML = headingContent;
      
      // Add the wrapper and anchor to the heading
      heading.appendChild(wrapper);
      heading.appendChild(anchor);
    });
  }
  
  // Run when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', addAnchorLinks);