document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    const columns = 14;
    const rows = 50;
    const cellHeight = 40;
    const startX = 0;
    const startY = 0;

    const headers = ["Email", "Name", "Country", "State", "City", "Phone" , "Add1","Add2" , "DOB", "2019-20" , "2020-21" , "2021-22" , "2022-23" , "2023-24"];
    const data = ["ncooper@hotmail.com", "Kristen Robinson", "Jordan", "North Dakota", "West Valerieland", "(187)741-6224x24308", "2002 Seth Roads Suite 553", "Apt. 132", "1973-07-15", "92,890.00", "128,252.00", "123,602.00", "148,513.00", "78,362.00"];

 
    const cellWidths = headers.map((header, index) => {``
        context.font = '14px Arial';
        const headerWidth = context.measureText(header).width + 30;
        const dataWidth = context.measureText(data[index]).width + 20;
        return Math.max(headerWidth, dataWidth);
    });

    let x = startX;
    headers.forEach((header, index) => {
        const cellWidth = cellWidths[index];
        

        context.fillStyle = '#f2f2f2';
        context.fillRect(x, startY, cellWidth, cellHeight);
        context.strokeStyle = 'black';
        context.strokeRect(x, startY, cellWidth, cellHeight);
        
  
        context.fillStyle = 'black';
        context.font = '16px Quicksand';
        context.fillText(header, x + 10, startY + cellHeight / 2 + 6);
        
        x += cellWidth;
    });

    for (let j = 1; j <= rows; j++) {
        x = startX;
        for (let i = 0; i < columns; i++) {
            const cellWidth = cellWidths[i];
            const y = startY + j * cellHeight;

            context.fillStyle = 'white';
            context.fillRect(x, y, cellWidth, cellHeight);
            context.strokeStyle = 'black';
            context.strokeRect(x, y, cellWidth, cellHeight);

            context.fillStyle = 'black';
            context.font = '14px Arial';
            context.fillText(data[i], x + 10, y + cellHeight / 2 + 7);
            
            x += cellWidth;
        }
    }
});
