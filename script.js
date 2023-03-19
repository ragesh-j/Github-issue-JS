let pageNo=1
let orderedList=document.getElementById("ordered-list")
let heading=document.getElementById("pageNo")

async function pageView (page){
    
    let url=`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5 `

    try{
        const response=await fetch(url)
        const data=await response.json()
        orderedList.innerHTML=""
        data.forEach(issue => {
            let listItem=document.createElement("li")
            listItem.innerHTML=issue.title
            orderedList.append(listItem)
            heading.innerHTML=`Page Number ${page}`
        });
    }
    catch (e){
        console.error(e)
    }
}
pageView(pageNo)

  
function toNextPage(){
    pageNo++
    pageView(pageNo)
}

function toPrevPage(){
    if(pageNo>1){
        pageNo--
        pageView(pageNo)
    }
}