
if (window.File && window.FileReader && window.FileList && window.Blob) {
    function saveDataToFile(data, filename) {
        var blob = new Blob([data], { type: 'text/plain' });

        var temp = document.createElement('a');
        temp.href = window.URL.createObjectURL(blob);
        temp.download = filename;
        
        document.body.appendChild(temp);

        
        temp.click();

        
        document.body.removeChild(temp);
    }

    
     form = document.getElementById('Regestration-form');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        var formData = new FormData(form);

        
        var data = '';
        for (var pair of formData.entries()) {
            data += pair[0] + ': ' + pair[1] + '\n';
        }

        var filename = 'registrationForm_data.txt';

        saveDataToFile(data, filename);
    });
} else {
    console.log('File System is not supported.');
}
