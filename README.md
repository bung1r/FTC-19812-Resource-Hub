# FTC Resource Hub
## made by Bung1r

### Description
This Resource Hub Website is intended by use by all members of FTC, Software and Hardware. 

Its main purpose is to aggregate both software and hardware resources of all different formats (slideshows, documents, and videos) in order to not only centralize the learning of our FTC 19812 team, but also to give other teams the resources they need to kickstart their learning journeys or make their 

This website utilizes React as its frontend language, with Supabase serving as the Backend As A Service.

This website boasts neatly organized 'Folders' and 'Assignments' which can be added through the front-end by administrators, so anyone can edit the website. This makes the website easier to maintain and easier to 'pass down.' Additionally, google authentication is used to automatically assign FTC 19812 members with a 'member' role, instead of the standard Guest role.

### How to Run/Instructions (for Macondo or anyone I suppose)
The easiest way to access the website is to simply go to: <br>
https://ftc-19812-resource-hub.vercel.app/ <br><br>

However, if you want to run this locally, here are the instructions: 

1. Clone the repository:

git clone <https://github.com/bung1r/FTC-19812-Resource-Hub.git>


2. Navigate to the React project directory:

cd ftc-19812-react


3. Install dependencies:

npm install


4. Start the development server:

npm run dev


5. After the server starts, open the URL shown in the terminal (likely will be `http://localhost:5173`)


6. Do note that since some of the functions of the website rely on API Keys in an .env file (which is not present in this repo for obvious reasons), some features of the local website may not work. Because of this, I recommend just visiting https://ftc-19812-resource-hub.vercel.app/ (You can see that that website is actually using my github repo from the deployments tab)


