// Sample medicine data (you can add more items as needed)
const medicines = [
    {
        name: "Medicine 1",
        picture: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", // Replace with the actual image file name and path
        detail: "This medicine treats X and Y."
    },
    {
        name: "Medicine 2",
        picture: "https://www.shutterstock.com/shutterstock/photos/1061962874/display_1500/stock-photo-pharmaceuticals-antibiotics-pills-medicine-colorful-antibacterials-pills-on-white-background-1061962874.jpg",
        detail: "This medicine is used for Z and W."
    },
    // Add more medicine items here
];

// Function to generate HTML for medicine details
function generateMedicineDetails() {
    const mainElement = document.querySelector('main');

    medicines.forEach(medicine => {
        const medicineDiv = document.createElement('div');
        medicineDiv.classList.add('medicine');

        const medicineName = document.createElement('h2');
        medicineName.textContent = medicine.name;

        const medicineImage = document.createElement('img');
        medicineImage.src = medicine.picture;
        medicineImage.alt = medicine.name;

        const medicineDetail = document.createElement('p');
        medicineDetail.textContent = medicine.detail;

        medicineDiv.appendChild(medicineName);
        medicineDiv.appendChild(medicineImage);
        medicineDiv.appendChild(medicineDetail);

        mainElement.appendChild(medicineDiv);
    });
}

// Call the function to generate medicine details when the page loads
window.onload = generateMedicineDetails;
