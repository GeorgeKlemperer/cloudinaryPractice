import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "theartofstarkness",
  api_key: "411123687267436",
  api_secret: "j0a2gGz2NunnWOho5AmnsmS9ndo",
});

cloudinary.v2.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  }
);

cloudinary.v2.uploader.upload(
  "https://res.cloudinary.com/theartofstarkness/image/upload/v1698937759/testImages/4e645e1f9fd76b902f330ca8db5479f6_nxw0jh.png",
  function (error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  }
);
