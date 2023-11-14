let imageURL;
let mediaPrefix;

// Dev Mode
imageURL = "assets/projects/";
mediaPrefix = "../";

// Production Mode
imageURL = "https://xm-portfolio.s3.us-east-2.amazonaws.com/projects/";
mediaPrefix = "";

export { imageURL, mediaPrefix };
