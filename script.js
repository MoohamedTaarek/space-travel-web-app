
    function saveMyData(data, filename) {
        var blobfile = new Blob([data], { type: 'text/plain' });

        var temp = document.createElement('a');
        temp.href = window.URL.createObjectURL(blobfile);
        temp.download = filename;
        

        document.body.appendChild(temp);
        temp.click();   
        document.body.removeChild(temp);
    }
    
    var form = document.getElementById('Regestration-form');

    
    form.addEventListener('submit', function(event) {
        
        event.preventDefault(); 
        var formData = new FormData(form);

        
        var data = '';
        for (var pair of formData.entries()) {
            data += pair[0] + ': ' + pair[1] + '\n';
        }
        

        var filename = 'registrationForm data.txt';
    

        saveMyData(data, filename);
    });

