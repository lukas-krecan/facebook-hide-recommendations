// Configuration variables
const targetText = "Návrhy pro vás";
const divDepth = 6;

const hideRelevantDivs = () => {
    const elementsWithDirectText = Array.from(document.querySelectorAll('span')).filter(el => {
        return Array.from(el.childNodes).some(child => 
            child.nodeType === Node.TEXT_NODE && child.nodeValue.includes(targetText)
        );
    });

    // To hide the element based on the specified depth:
    elementsWithDirectText.forEach(el => {
        let currentElement = el;
        for(let i = 0; i < divDepth; i++) {
            currentElement = currentElement.parentNode;
            if(!currentElement) {
                break;
            }
        }
        if(currentElement) {
            currentElement.style.display = 'none';
        }
    });
}

// Execute once when the script is first run
hideRelevantDivs();

// Create an observer to watch for DOM changes
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if(mutation.type === 'childList') {
            hideRelevantDivs();
        }
    }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

