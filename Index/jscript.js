var index = 0;
showImages();

function showImages()
{
    var i ;
    var images = document.getElementsByClassName("img1");
    var topics = document.getElementsByClassName("topic1");
    for(i=0;i<images.length;i++)
    {
        images[i].style.display = "none";
        topics[i].style.display = "none";
    }
    index++;
    if(index>images.length){index = 1}
    images[index-1].style.display = "block";
    topics[index-1].style.display = "block";
    setTimeout(showImages, 3000);
}