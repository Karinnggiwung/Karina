// Data pengunjung
const visitors = 
    
// Function to populate the table with visitor data
function populateTable() {
    const tableBody = document.getElementById('visitorTableBody');
    visitors.forEach(visitor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${visitor.no}</td>
            <td>${visitor.name}</td>
            <td>${visitor.address}</td>
            <td>${visitor.destination}</td>
            <td>${visitor.visitDate}</td>
            <td>${visitor.cost}</td>
        `;
        tableBody.appendChild(row);
    });
}


