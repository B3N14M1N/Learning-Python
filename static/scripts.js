// List of meme embed snippets with full HTML
const memes = [
  // Original memes
  `<div class="tenor-gif-embed" data-postid="7714714" data-share-method="host" data-aspect-ratio="1.315" data-width="100%"><a href="https://tenor.com/view/monkey-calculate-silly-count-gif-7714714">Monkey Calculate GIF</a>from <a href="https://tenor.com/search/monkey-gifs">Monkey GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="6237717" data-share-method="host" data-aspect-ratio="1.52381" data-width="100%"><a href="https://tenor.com/view/math-calculate-confusing-figure-out-gif-6237717">Math Calculate GIF</a>from <a href="https://tenor.com/search/math-gifs">Math GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="16142281" data-share-method="host" data-aspect-ratio="1.47465" data-width="100%"><a href="https://tenor.com/view/osita-osita-iheme-nigerian-nollywood-calculating-gif-16142281">Osita Osita Iheme GIF</a>from <a href="https://tenor.com/search/osita-gifs">Osita GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="4844993792848328791" data-share-method="host" data-aspect-ratio="1.27041" data-width="100%"><a href="https://tenor.com/view/fred-flintstone-abacus-the-flintstones-bookkeeping-calculation-gif-4844993792848328791">Fred Flintstone Abacus GIF</a>from <a href="https://tenor.com/search/fred+flintstone-gifs">Fred Flintstone GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="19737617" data-share-method="host" data-aspect-ratio="1.33891" data-width="100%"><a href="https://tenor.com/view/math-calculating-formulas-confused-little-girl-gif-19737617">Math Calculating GIF</a>from <a href="https://tenor.com/search/math-gifs">Math GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="15298739" data-share-method="host" data-aspect-ratio="1.22605" data-width="100%"><a href="https://tenor.com/view/nollywood-thinking-conclusion-confused-look-gif-15298739">Nollywood Thinking GIF</a>from <a href="https://tenor.com/search/nollywood-gifs">Nollywood GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="26041269" data-share-method="host" data-aspect-ratio="0.7875" data-width="100%"><a href="https://tenor.com/view/calculation-cat-gif-26041269">Calculation Cat GIF</a>from <a href="https://tenor.com/search/calculation+cat-gifs">Calculation Cat GIFs</a></div>`,
  
  // New math calculation memes (with verified working IDs)
  `<div class="tenor-gif-embed" data-postid="5120792" data-share-method="host" data-aspect-ratio="1.33" data-width="100%"><a href="https://tenor.com/view/math-zack-galifianakis-thinking-calculating-gif-5120792">Math Zack Galifianakis GIF</a>from <a href="https://tenor.com/search/math-gifs">Math GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="14678592" data-share-method="host" data-aspect-ratio="1.42" data-width="100%"><a href="https://tenor.com/view/confused-computing-counting-math-problems-gif-14678592">Confused Computing GIF</a>from <a href="https://tenor.com/search/confused-gifs">Confused GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="18870260" data-share-method="host" data-aspect-ratio="1.78" data-width="100%"><a href="https://tenor.com/view/calculista-gif-18870260">Calculista GIF</a>from <a href="https://tenor.com/search/math-gifs">Math GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="13385485103134761656" data-share-method="host" data-aspect-ratio="1.0" data-width="100%"><a href="https://tenor.com/view/cat-cat-math-math-cat-numbers-cat-funny-gif-13385485103134761656">Cat Cat Math GIF</a>from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="14841107" data-share-method="host" data-aspect-ratio="1.77" data-width="100%"><a href="https://tenor.com/view/confused-wtf-math-what-numbers-gif-14841107">Confused WTF GIF</a>from <a href="https://tenor.com/search/confused-gifs">Confused GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="26401692" data-share-method="host" data-aspect-ratio="1.0" data-width="100%"><a href="https://tenor.com/view/confused-confused-math-gif-26401692">Confused Confused Math GIF</a>from <a href="https://tenor.com/search/confused-gifs">Confused GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="16949472" data-share-method="host" data-aspect-ratio="1.0" data-width="100%"><a href="https://tenor.com/view/thinking-gif-hmmm-calculate-gif-16949472">Thinking GIF GIF</a>from <a href="https://tenor.com/search/thinking-gifs">Thinking GIFs</a></div>`,
  `<div class="tenor-gif-embed" data-postid="10615376958285621529" data-share-method="host" data-aspect-ratio="1.0" data-width="100%"><a href="https://tenor.com/view/cat-cat-math-math-cat-numbers-cat-funny-gif-10615376958285621529">Cat Cat Math GIF</a>from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a></div>`
];

// Approximate GIF durations in seconds (based on typical lengths)
const memeDurations = {
  // Original memes
  "7714714": 3.5,  // Monkey Calculate
  "6237717": 2.5,  // Math Calculate
  "16142281": 3,   // Osita
  "4844993792848328791": 4, // Fred Flintstone
  "19737617": 3,   // Math Calculating Formulas
  "15298739": 2.5, // Nollywood Thinking
  "26041269": 3,   // Calculation Cat
  
  // New working memes with verified IDs
  "5120792": 3.5,  // Math Zack Galifianakis
  "14678592": 3,   // Confused Computing
  "18870260": 4,   // Calculista (woman crying at math)
  "13385485103134761656": 3, // Cat Math 1
  "14841107": 3.5,  // Confused WTF Math
  "26401692": 2.5,  // Confused Math Man
  "16949472": 3,    // Thinking Calculate Kid
  "10615376958285621529": 3 // Cat Math 2
};

// Get random meme if toggle is enabled
function getRandomMeme() {
  const toggle = document.getElementById('toggle-memes');
  if (!toggle || !toggle.checked) return '';
  return memes[Math.floor(Math.random() * memes.length)];
}

// Function to manually trigger Tenor embed processing
function processTenorEmbeds() {
  // Use setTimeout to ensure this runs after the current execution context
  setTimeout(() => {
    // Method 1: Try using the global object if available
    if (window.TenorEmbedObject) {
      window.TenorEmbedObject.process();
      return true;
    }
    
    // Method 2: Dispatch a resize event which often triggers embed libraries to reprocess
    window.dispatchEvent(new Event('resize'));
    
    // Method 3: Reload the Tenor script
    const newScript = document.createElement('script');
    newScript.async = true;
    newScript.src = 'https://tenor.com/embed.js';
    document.body.appendChild(newScript);
    
    return true;
  }, 100);
}

// Map operation names to their meme container IDs
function getMemeContainerId(operationName) {
  const memeContainerMap = {
    'pow': 'pow-meme',
    'fibonacci': 'fib-meme', 
    'factorial': 'fac-meme'
  };
  return memeContainerMap[operationName];
}

// Enhanced form submit handler with button disabling and meme display
async function handleFormSubmit(event, url, resultIdPrefix) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();
    
    // Check if memes are enabled
    const memesEnabled = document.getElementById('toggle-memes').checked;
    
    // Disable button
    btn.disabled = true;
    btn.textContent = 'Calculating...';
    
    // Clear previous results and hide the result div
    document.getElementById(`${resultIdPrefix}-result-value`).innerText = "";
    document.getElementById(`${resultIdPrefix}-execution-time`).innerText = "";
    document.getElementById(`${resultIdPrefix}-cached`).innerText = "";
    document.getElementById(`${resultIdPrefix}-result`).style.display = "none";
    
    // Show random meme if enabled
    const memeContainerId = getMemeContainerId(resultIdPrefix);
    const memeContainer = document.getElementById(memeContainerId);
    let memeHtml = '';
    
    if (memesEnabled && memeContainer) {
        memeHtml = getRandomMeme();
        if (memeHtml) {
            // Clear and prepare the container
            memeContainer.style.display = 'block'; 
            memeContainer.style.minHeight = '200px';
            
            // Create a unique ID for this specific embed
            const uniqueId = `tenor-embed-${Date.now()}`;
            memeContainer.setAttribute('data-embed-id', uniqueId);
            
            // Add a visual indicator while loading
            memeContainer.innerHTML = `
                <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                    <p>Loading meme...</p>
                </div>
            `;
            
            // Use a small delay before inserting the actual content
            setTimeout(() => {
                // Insert the embed HTML
                memeContainer.innerHTML = memeHtml;
                
                // Get the post ID for duration info
                let postId = '';
                const postIdMatch = memeHtml.match(/data-postid="([^"]+)"/);
                if (postIdMatch && postIdMatch[1]) {
                    postId = postIdMatch[1];
                }
                
                // Determine display duration (minimum 3.5 seconds, or use predefined duration if available)
                const displayDuration = (memeDurations[postId] || 3.5) * 1000;
                
                // Process the embed with our helper function
                processTenorEmbeds();
                
                // Try again after a longer delay as backup
                setTimeout(processTenorEmbeds, 500);
            }, 50);
        }
    }
    
    try {
        // Start the API request
        const response = await fetch(`${url}?${params}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        // If memes are enabled, wait for the appropriate duration based on the GIF
        if (memesEnabled && memeHtml) {
            // Get the post ID for duration info
            let postId = '';
            const postIdMatch = memeHtml.match(/data-postid="([^"]+)"/);
            if (postIdMatch && postIdMatch[1]) {
                postId = postIdMatch[1];
            }
            
            // Determine display duration (minimum 3.5 seconds, or use predefined duration if available)
            const displayDuration = (memeDurations[postId] || 3.5) * 1000;
            
            await new Promise(resolve => setTimeout(resolve, displayDuration));
        }

        // Clear meme and hide it
        if (memeContainer) {
            memeContainer.innerHTML = '';
            memeContainer.style.display = 'none';
        }
        
        // Update result values and show the result div
        document.getElementById(`${resultIdPrefix}-result-value`).innerText = data.result || "";
        document.getElementById(`${resultIdPrefix}-execution-time`).innerText = data.execution_time || "";
        document.getElementById(`${resultIdPrefix}-cached`).innerText = data.cached !== undefined ? data.cached : "";
        document.getElementById(`${resultIdPrefix}-result`).style.display = "block";
        
    } catch (error) {
        // If memes are enabled, still wait for the appropriate duration before showing error
        if (memesEnabled && memeHtml) {
            // Get the post ID for duration info
            let postId = '';
            const postIdMatch = memeHtml.match(/data-postid="([^"]+)"/);
            if (postIdMatch && postIdMatch[1]) {
                postId = postIdMatch[1];
            }
            
            // Determine display duration
            const displayDuration = (memeDurations[postId] || 3.5) * 1000;
            
            await new Promise(resolve => setTimeout(resolve, displayDuration));
        }
        
        if (memeContainer) {
            memeContainer.innerHTML = '';
            memeContainer.style.display = 'none';
        }
        showErrorNotification(error.message);
    } finally {
        // Re-enable button
        btn.disabled = false;
        btn.textContent = 'Calculate';
    }
}

// Add event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Restore toggle state from localStorage
    const toggle = document.getElementById('toggle-memes');
    const savedState = localStorage.getItem('memes-enabled');
    if (savedState !== null) {
        toggle.checked = savedState === 'true';
    }
    
    // Setup all meme containers to ensure proper styling
    document.querySelectorAll('[id$="-meme"]').forEach(container => {
        container.style.minHeight = '200px';
        container.style.marginTop = '15px';
        container.style.marginBottom = '15px';
    });
    
    // Save toggle state
    localStorage.setItem('memes-enabled', toggle.checked.toString());
    
    // Listen for toggle changes
    if (toggle) {
        toggle.addEventListener('change', function(e) {
            localStorage.setItem('memes-enabled', e.target.checked.toString());
        });
    } else {
        console.error('Toggle element not found!');
    }

    // Main form event listeners
    document.getElementById('pow-form').addEventListener('submit', (event) => handleFormSubmit(event, '/pow', 'pow'));
    document.getElementById('fibonacci-form').addEventListener('submit', (event) => handleFormSubmit(event, '/fibonacci', 'fibonacci'));
    document.getElementById('factorial-form').addEventListener('submit', (event) => handleFormSubmit(event, '/factorial', 'factorial'));
});
