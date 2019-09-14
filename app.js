const inText = document.querySelector("#inputText");
const conText = document.querySelector("#contentText");
const headText = document.querySelector("#headerText");

const t1 = new TimelineMax();

t1.fromTo(inText, 1, {y: "-150%", opacity: 0}, {y: "0%", opacity: 1});
t1.fromTo(headText, 1, {y: "-100%", opacity: 0}, {y: "0%", opacity: 1});
t1.fromTo(conText, 1, {y: "-100%", opacity: 0}, {y: "0%", opacity: 1});

    var content = "";
    var quill1Current = "";
    var quillContent = "";


    $('#btnSave').click(function(){
        window.deltaHeader = editorHeader.getContents();
        window.deltaContent = editorContent.getContents();
        console.log(deltaHeader);
        console.log(deltaContent);
    });

    function downClickEditor(){
        var range = editorInput.getSelection();
        if (window.event.ctrlKey){

            var selectedContent = editorInput.getSelection();
            if (selectedContent) {
            if (selectedContent.length == 0) {
                console.log('User cursor is at index', selectedContent.index);
            } else {
                var strContent = editorInput.getText(selectedContent.index, selectedContent.length);
                console.log('User has highlighted: ', strContent);
                
                quillContent += strContent;
                
                editorContent.setContents([
                    {insert: quillContent}
                ]);

            }
            } else {
            console.log('User cursor is not in editor');
            }
        } else if (window.event.shiftKey) {
            var text = editorInput.getText(range.index, range.length);
                console.log('User has highlighted: ', text);
                
                editorInput.formatText(range.index, range.length, {                   // unbolds 'hello' and set its color to blue
                    'bold': true,
                    'underline': true
                });
                
                quill1Current += text;
                
                editorHeader.setContents([
                    {insert: quill1Current}
                ]);

        }


    }

    
    function downClick(){
        
        if (window.event.shiftKey){

        } else {
        
            var range = editorInput.getSelection();
            if (range) {
            if (range.length == 0) {
                console.log('User cursor is at index', range.index);
            } else {
                var text = editorInput.getText(range.index, range.length);
                console.log('User has highlighted: ', text);
                
                editorInput.formatText(range.index, range.length, {                   // unbolds 'hello' and set its color to blue
                    'bold': true,
                    'underline': true
                });
                
                editorInput += text;
                
                editorHeader.setContents([
                    {insert: quill1Current}
                ]);

            }
            } else {
            console.log('User cursor is not in editor');
            }
        }
    }

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike']
    ];
    var reset = "";
    
    var editorInput = new Quill('#editor', {
        modules:{
            toolbar: toolbarOptions
        },

        theme: 'snow'
    });


    var editorHeader = new Quill('#header', {
        modules:{
            toolbar: toolbarOptions
        },

        theme: 'snow'
    });

    var editorContent = new Quill('#content', {
        modules:{
            toolbar: toolbarOptions
        },

        theme: 'snow'
    });