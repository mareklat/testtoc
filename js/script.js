// Retrieve the container element
const docsContainer = document.getElementById('docs-container');

// Fetch the documentation files from the GitHub API
fetch('{{ site.baseurl }}/docs/*.md')
    .then(response => response.json())
    .then(data => {
        // Parse the Markdown content and display it in the container
        data.forEach(file => {
            const markdownContent = file.contents;
            const htmlContent = marked(markdownContent);
            const divElement = document.createElement('div');
            divElement.innerHTML = htmlContent;
            docsContainer.appendChild(divElement);
        });
    })
    .catch(error => console.error('Error fetching documentation:', error));
