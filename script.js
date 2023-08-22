//your code here!

const list = document.getElementById('infi-list');

// Function to add a list item to the list
function addListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  addListItem(`List Item ${i}`);
}

// Function to handle scroll event
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = list;

  // If the user reaches the end of the list
  if (scrollTop + clientHeight >= scrollHeight) {
    // Add 2 more list items
    for (let i = 0; i < 2; i++) {
      const nextIndex = list.children.length + 1;
      addListItem(`List Item ${nextIndex}`);
    }
  }
}

// Add a scroll event listener to the list
list.addEventListener('scroll', handleScroll);
