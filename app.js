// Progression 1: create a function and fetch the api using axios

function getData(){
    const getBlog = document.getElementById('blog')

    axios
        .get
        ('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=d32e1b97f6c8d308c39530b0c4a1af1b'
        )
        .then((res)=>{
            console.log(res)
            const newsData  = res.data.articles;
            console.log(newsData)
            let getBlog = document.getElementById("blog")
            newsData.forEach((element)=>{
                
                const createTheBox = document.createElement('div');
                createTheBox.setAttribute('class', 'article')

                const title = document.createElement('h3');
                const content = document.createElement('p');
                const img = document.createElement('img');
                
                title.innerText = element.title;
                content.innerText = element.content;
                img.src=element.image;

               
                createTheBox.append(title,img,content)
                

                getBlog.appendChild(createTheBox)
            })



        })
        
        .catch((error)=>{
            console.log("The API is not working", error)
        })

}
getData();
