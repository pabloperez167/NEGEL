

/*
function commentBox(){
    var name=document.getElementById('name').value;
    var comment=document.getElementById('comment').value;

    if(name =="" || comment ==""){
        alert("Porfavor introduce la informacion requerida!");
    }else{
        var parent=document.createElement('div');
        var el_name=document.createElement('h5');
        var el_message=document.createElement('p');
        var el_line=document.createElement('hr');
        var txt_name=document.createTextNode(name);
        var txt_message=document.createTextNode(comment);
        el_name.appendChild(txt_name);
        el_message.appendChild(txt_message);
        el_line.style.border='1px solid #000';
        parent.appendChild(el_name);
        parent.appendChild(el_line);
        parent.appendChild(el_message);
        parent.setAttribute('class', 'pane');
        document.getElementById('result').appendChild(parent);

        document.getElementById('name').value="";
        document.getElementById('comment').value="";
    }

}*/


function jQuery(param) {

}

jQuery(function($) {
    $('#form_addjts').submit(function(){
        writeToFile({
            id: $(this).find('.id').val(),
            content: $(this).find('.content').val()
        });
        return false;
    });
    function writeToFile(data){
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var fh = fso.OpenTextFile("D:\\data.txt", 8);
        fh.WriteLine(data.id + ',' + data.content);
        fh.Close();
    }
});