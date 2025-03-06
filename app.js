var arr = [{
    dp:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
dp:"IMG-20231230-WA0019.jpg",
story:"IMG-20241129-WA0012.jpg"
},
{
    dp:"https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1554180842-41b1dd69d588?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

},

{ dp:"https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1551024739-78e9d60c45ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1528916451049-e5d097b61db2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

},{
dp:"https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{ dp:"https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

];
var storiyan = document.querySelector("#storiyan")
var clutter =""
arr.forEach(function(elem,idx){

    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    <img src="${elem.story}" alt="">
</div>`
})
storiyan.innerHTML = clutter

document.querySelector("#storiyan").addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
}
,2000)



    // var idx = dets.target.id
    // var dp = arr[idx].dp
    // var story = arr[idx].story
    // document.querySelector("#dp").src = dp
    // document.querySelector("#story").src = story
});
