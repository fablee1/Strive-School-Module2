/*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to change the color of the main title
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to remove all the links under "Elsewhere"
        EX15) Write a function to change the column size for post headings
        EX16) Write a function to remove the "Search" magnifying glass icon
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
*/

// EX11
const navAddLink = function(name, link) {
    const nav = document.getElementsByClassName('nav')[0]

    let newLink = document.createElement('a')
    newLink.classList.add('p-2', 'text-muted')
    newLink.href = link
    newLink.innerText = name

    nav.appendChild(newLink)
}


// EX12
const changeTitleColor = function() {
    const hexColor = '#'+(Math.floor(Math.random()*16777216)).toString(16)

    const title = document.getElementsByTagName('h1')[0]
    title.style.color = hexColor
}


// EX13
const changeJumbotronBg = function() {
    const hexColor = '#'+(Math.floor(Math.random()*16777216)).toString(16)
    const jumbotron = document.getElementsByClassName('jumbotron')[0]
    jumbotron.classList.remove('bg-dark')
    jumbotron.style.backgroundColor = hexColor
}


// EX14
const removeElsewhereLinks = function() {
    const elsewhere = document.querySelectorAll('aside div:nth-child(3) li')
    
    for(link of elsewhere) {
        link.remove()
    }
}


// EX15



// EX16
const removeGlass = function() {
    const glass = document.querySelector('svg')
    glass.remove()
}


// EX17
const trimParagraphChars = function() {
    const firstParagraphs = document.querySelectorAll('.blog-post-meta + p')

    for(paragraph of firstParagraphs) {
        paragraph.innerText = (paragraph.innerText).slice(50)
    }
}


// EX18
const newer = function(e, title, text) {
    if(!title) {
        title = 'Test Title'
    }
    if(!text) {
        text = 'Test Text'
    }

    const postContainer = document.querySelector('.blog-main')

    const firstPost = document.querySelector('.blog-post')

    const newPost = document.createElement('div')
    newPost.classList.add('blog-post')
    newPost.innerHTML = `<h2 class="blog-post-title">${title}</h2>
                         <p>
                            ${text}
                         </p>`

    postContainer.insertBefore(newPost, firstPost)
}


// EX19
const older = function(e) {
    const posts = document.querySelectorAll('.blog-post')
    posts[posts.length-1].remove()
}


window.onload = function() {
    const button = document.querySelectorAll('.blog-pagination > a')[1]
    button.classList.remove('disabled')

    button.addEventListener('click', newer)

    const buttonOlder = document.querySelectorAll('.blog-pagination > a')[0]
    buttonOlder.addEventListener('click', older)

    // EX20
    const authors = document.querySelectorAll('.blog-post-meta > a')
    console.log(authors)
    for(author of authors) {
        author.addEventListener('mouseover', function(e) {
            alert(e.currentTarget.innerText)
        })
    }
}