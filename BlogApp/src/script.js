function showBlogPost(post){
    const blogList=document.getElementById('postList')
    const blogPostContainer=document.createElement('div')
    blogPostContainer.classList.add('border-2', 'border-gray-400', 'p-4', 'rounded-xl', 'mb-4','w-80','ml-4')
   
    const postTitle = post.title
    const postDescription = post.description
    const postContent = post.content
    const postImageUrl = post.imageUrl
   
    blogPostContainer.innerHTML=`
    <div class='bg-white px-4 py-2 rounded-xl flex justify-between text-white'>
    <div class='flex flex-col gap-4'>
    <div>
       <img src="${post.imageUrl}" alt="${post.title}" class="w-full h-40 object-cover rounded-xl">
    </div>
    <h1 class="text-black font-bold text-base font-serif ">Blog Title : ${post.title}</h1>
    <p class="text-black text-xs font-serif ">Blog Description : ${post.description}</p>
    
    <button data-post class='w-full py-2 rounded-xl bg-orange-200 text-orange-500'>Read More</button>
    `
    blogList.appendChild(blogPostContainer)

    const readMoreButton = blogPostContainer.querySelector('[data-post]');
    readMoreButton.addEventListener('click', function () {
        window.location.href = `post.html?title=${encodeURIComponent(postTitle)}&description=${encodeURIComponent(postDescription)}&content=${encodeURIComponent(postContent)}&imageUrl=${encodeURIComponent(postImageUrl)}`;

    });

}

document.addEventListener('DOMContentLoaded',()=>{
    const openBoxBtn=document.getElementById('openBox')
    const closeBoxBtn=document.getElementById('closeBox')
    const addBlogBox=document.getElementById('addBlogBox')

    openBoxBtn.addEventListener('click',()=>{
        addBlogBox.classList.remove('hidden');
    
    })

    closeBoxBtn.addEventListener('click',()=>{
        addBlogBox.classList.add('hidden')
    })

    const BlogForm=document.getElementById('form');
    const BlogBtn=document.getElementById('btn');

    BlogForm.addEventListener('submit',(e)=>{
        e.preventDefault()

        const BlogUrl=document.getElementById('imgUrl').value;
        const BlogTitle=document.getElementById('title').value;
        const BlogDescription=document.getElementById('desc').value;
        const BlogContent=document.getElementById('content').value;

        const newBlogPost={
            imageUrl:BlogUrl,
            title:BlogTitle,
            description:BlogDescription,
            content:BlogContent
        }

        const stroingPosts=JSON.parse(localStorage.getItem('posts')) || []

        stroingPosts.push(newBlogPost)

        localStorage.setItem('posts',JSON.stringify(stroingPosts))

        showBlogPost(newBlogPost)

        addBlogBox.classList.add('hidden')
    })
})


document.addEventListener('DOMContentLoaded',()=>{
    const blogList = document.getElementById('postList');
    if (blogList) {
        const stroingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        stroingPosts.forEach(post => {
            showBlogPost(post);
        })
            
    } else {
        console.error("Element with ID 'blogList' not found in the DOM.");
    }
})

