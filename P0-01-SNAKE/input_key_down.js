let input_derection={x:0,y:0};
 let lastderect={x:0,y:0};

window.addEventListener('keydown',e =>  { 
    switch (e.key) {
        case "ArrowUp":{
            if(lastderect.y !== 0) break;
            input_derection={x:0,y:-1};
            break;
        }
           
        case "ArrowDown":{
            if(lastderect.y !== 0) break; 
            input_derection={x:0,y:1};
            break;
        }
           
        case "ArrowRight":{
            if(lastderect.x !== 0) break; 
            input_derection={x:1,y:0};
            break;
        }
           
        case "ArrowLeft":{ 
            if(lastderect.x !== 0) break;  
            input_derection={x:-1,y:0};
            break;
        }
            
        default:
            input_derection;
            break;
    }
})
 

export function getInputDerection(){
    lastderect=input_derection;
    return input_derection;
}