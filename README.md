## Requirement
---
- Node.js
- <a href="https://www.youtube.com/watch?v=yrtANCYlm14&ab_channel=GotStucked%3F"> pnpm/ yarn (optional)</a>
- <a href="https://www.youtube.com/watch?time_continue=1&v=q3ix08OdGHE&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY&feature=emb_logo&ab_channel=DevelopersDiary">Mongo atlas account</a>
- VScode

## How to Install This Project
--- 
- clone this repository
- go inside next-auth-demo-2 folder
- run pnpm install/ npm install/ yarn install in terminal
- create a database in mongo atlas 
- get connection string of mongoDB cluster
- create a file inside next-auth-demo-2 folder named .env
- copy the following format & modify the strings
```
DATABASE_URL=<mongodb atlas connection string VScode variant>
NEXTAUTH_JWT_SECRET=<random string of atleast 8 characters>
NEXTAUTH_SECRET=<random string of atleast 8 characters>
```

  - run pnpm run dev/ npm run dev/ yarn run dev in terminal to start the app
  - go to http://localhost:3000 
  - You should be able to connect

### If you are facing any issue contact me through LinkedIn/ Facebook

- Facebook: https://www.facebook.com/masudalimran93
- LinkedIn: https://www.linkedin.com/in/masud-al-imran/

--- 

Running App Link: https://next-js-next-auth-demo1.vercel.app/

> if you are not able to login/ register in running app. It means I have removed the database as it was built for my testing. Don't Worry if you have followed the steps you can make yours work just fine

YouTube Video Demonstration: https://www.youtube.com/watch?v=7En4e7jjyXs&ab_channel=Masudalimran-web-dev

> # My Portfolio Site Link: 
> https://masud-al-imran.netlify.app/
