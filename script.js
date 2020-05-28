// console.log("hello brow how are u i");

let  ulTasks=$('#ulTasks')

let  btnAdd=$('#btnAdd');

let  btnReset=$('#btnReset');

let btnSort=$('#btnSort');

let btnCleanup=$('#btnCleanup');

let  inpNewTask=$('#inpNewTask');



function toggleResetBtn(enabled)
{
    if(enabled) btnReset.prop('disabled',false)
    else
    btnReset.prop('disabled',true);
}
inpNewTask.on('input',()=>
{
    console.log(inpNewTask.val());
    
   toggleResetBtn(inpNewTask.val() !="")
})


function addItem()
{
    let listItem=$('<li>',
    {
        'class':'list-group-item',
        text:inpNewTask.val()
    })

    listItem.click(()=>
    {
        $(listItem).toggleClass('done')
    })

     ulTasks.append(listItem)


    inpNewTask.val('')
}

inpNewTask.keypress((e)=>{

    if(e.which==13)
    {
      addItem();
    }
})

btnAdd.click(addItem);


btnReset.click(()=>
{
    inpNewTask.val('')
})


function CleanDone()
{
  $('#ulTasks .done').remove();
}
btnCleanup.click(CleanDone);

function sortTasks()
{
    $('#ulTasks .done').appendTo(ulTasks);
}

btnSort.click(()=>
{
    $('#ulTasks .done').appendTo(ulTasks);
});
