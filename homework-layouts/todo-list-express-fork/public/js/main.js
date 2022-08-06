const deleteBtn = document.querySelectorAll('.fa-trash') /* UNCHANGEABLE VARIABLE SELECTING CLASS ELEMENTS STORING IT IN THE DELETEBTN */
const item = document.querySelectorAll('.item span') /* UNCHANGEABLE VARIABLE SELECTING CLASS ELEMENTS ASSIGNING THEM TO THE CHILD ITEM SPAN */
const itemCompleted = document.querySelectorAll('.item span.completed') /* UNCHANGEABLE VARIABLE SELECTING CLASS ELEMENTS ASSIGNING THEM TO THE CHILD ITEM CLASS COMPLETED */

Array.from(deleteBtn).forEach((element)=>{ /* ARRAY METHOD CREATED FROM SELECTION AND BEGINING A LOOP */
    element.addEventListener('click', deleteItem) /* EVENT LISTENER CLICK FROM THE ITEM CALLING FUNCTION TO deleteItem */
}) /* ARRAY LOOP CLOSING TAG */

Array.from(item).forEach((element)=>{ /* ARRAY METHOD CREATED FROM SELECTION AND BEGINING A LOOP */
    element.addEventListener('click', markComplete) /* EVENT LISTENER CLICK FROM THE ITEM CALLING FUNCTION TO markComplete */
}) /* ARRAY LOOP CLOSING TAG */

Array.from(itemCompleted).forEach((element)=>{ /* ARRAY METHOD CREATED FROM SELECTION AND BEGINING A LOOP */
    element.addEventListener('click', markUnComplete) /* EVENT LISTENER FOR COMPLETED ITEMS */
}) /* ARRAY LOOP CLOSISNG TAG */

async function deleteItem(){ /* ASYNCHRONOUS FUNCTION DECLARED  */
    const itemText = this.parentNode.childNodes[1].innerText /* LIST ITEM THAT GRABS THE INNER TEXT OF THE LIST SPAN */
    try{ /* TRY BLOCK START */
        const response = await fetch('deleteItem', { /* FETCH VARIABLE TO RETRIEVE DATA AND GIVES A RESPONSE OF deleteItem */
            method: 'delete', /* DELETE AY METHOD  */
            headers: {'Content-Type': 'application/json'}, /* DECLARING THE USE OF JSON AS THE CONTENT TYPE USED */
            body: JSON.stringify({ /* STRINGIFY THE RETURN MESSAGE CONTENT */
              'itemFromJS': itemText /*  CONTENT OF THE BODY TO THE INNER TEXT  */
            }) /*  */
          }) /*  */
        const data = await response.json() /*  */
        console.log(data) /*  */
        location.reload() /*  */

    }catch(err){ /*  */
        console.log(err) /*  */
    } /*  */
} /*  */

async function markComplete(){ /*  */
    const itemText = this.parentNode.childNodes[1].innerText /*  */
    try{ /*  */
        const response = await fetch('markComplete', { /*  */
            method: 'put', /*  */
            headers: {'Content-Type': 'application/json'}, /*  */
            body: JSON.stringify({ /*  */
                'itemFromJS': itemText /*  */
            }) /*  */
          }) /*  */
        const data = await response.json() /*  */
        console.log(data) /*  */
        location.reload() /*  */

    }catch(err){ /*  */
        console.log(err) /*  */
    } /*  */
} /*  */

async function markUnComplete(){ /*  */
    const itemText = this.parentNode.childNodes[1].innerText /*  */
    try{ /*  */
        const response = await fetch('markUnComplete', { /*  */
            method: 'put', /*  */
            headers: {'Content-Type': 'application/json'}, /*  */
            body: JSON.stringify({ /*  */
                'itemFromJS': itemText /*  */
            }) /*  */
          }) /*  */
        const data = await response.json() /*  */
        console.log(data) /*  */
        location.reload() /*  */

    }catch(err){ /*  */
        console.log(err) /*  */
    } /*  */
} /*  */    