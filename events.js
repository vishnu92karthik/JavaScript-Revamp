function clicked(){
    console.log('button clicked')
    }
    window.onload = function(){
    console.log('page loaded')
    }
    
    first_container.addEventListener('click', function(){
    console.log('clicked vishnu')
    })
    first_container.addEventListener('mouseover', function(){
    console.log('mouse on container')
    })
    first_container.addEventListener('mouseout', function(){
    console.log('mouse out container')
    })
    first_container.addEventListener('mouseup', function(){
    console.log('mouseup on container')
    })
    first_container.addEventListener('mousedown', function(){
    console.log('mousedown on container')
    })