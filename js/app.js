$(function(){
    let searchBtn = $(`.search`)
    let searchBar = $(`.searchBar`)
    let closeBtn = $(`.close`)
    searchBtn.click(function(){
        searchBar.fadeIn(500)
        $(this).hide()
        closeBtn.css({
            "opacity" : 1,
            "visibility" : "visible" 
        })
    })
    closeBtn.click(function(){
        searchBar.fadeOut(500)
        $(this).css({
            "opacity" : 0,
            "visibility" : "hidden"
            
        })
    })
})