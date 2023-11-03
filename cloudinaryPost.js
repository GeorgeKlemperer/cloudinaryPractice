// Define the image URL you want to upload
var imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/440px-SNice.svg.png";

// Cloudinary upload URL
var cloudinaryUploadURL =
  "https://api.cloudinary.com/v1_1/theartofstarkness/upload";

// Specify your Cloudinary upload preset
var uploadPreset = "objuyq3s"; // Replace with your actual upload preset

// Specify the folder where you want to store the image
var folderName = "testImages"; // Replace with the desired folder name

// Prepare the form data for the HTTP POST request
var formData = new FormData();
formData.append("file", imageUrl);
formData.append("upload_preset", uploadPreset);
formData.append("folder", folderName); // Include the folder parameter

// Make the HTTP POST request
fetch(cloudinaryUploadURL, {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    // console.log("Image uploaded to Cloudinary:", data);
    console.log(data.url);
    // You can use the data returned by Cloudinary as needed, e.g., to display the image or get the URL to pass on to DynamoDB.
  })
  .catch((error) => {
    console.error("Error uploading image to Cloudinary:", error);
  });
