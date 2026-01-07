const fs = require('node:fs');

let read_file = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            console.error('Error reading file', err);
            return;
        }
        console.log('File content:');
        console.log(data);
        
    });
}

let write_file = (file, contentToWrite) => {
    fs.writeFile(file, contentToWrite, (err) => {
        if(err){
            console.error('Error writing to file', err);
            return;
        }
        console.log('Content successfully written to file.');
    });
}

let append_file = (file, contentToAppend) => {
    fs.appendFile(file, contentToAppend, (err) => {
        if(err){
            console.error('Error appending to file', err);
            return;
        }
        console.log('Content successfully append to file.');
    });
}

let delete_file = (file) => {
    fs.unlink(file,(err) => {
        if(err){
            console.error('Error deleting file', err);
            return;
        }
        console.log('File deleted successfully.');
    });
}

let file_name1 = "one1.text"
let file_name2= "two.text"
let some_content = "\n\nGood Day!!"

//read_file(file_name1)
// write_file(file_name2, some_content)
// append_file(file_name1, some_content)
delete_file(file_name2)

