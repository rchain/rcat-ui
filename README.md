This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Setup enviroment files with your variables:

For development enviroment:
`cp env.example .env.development`

For staging enviroment:
`cp env.example .env.staging`

For QA enviroment:
`cp env.example .env.qa`

For production enviroment:
`cp env.example .env.production`

## Environment vars

Open relevant env file and setup following:

- `REACT_APP_FB_APP_ID`: This is you facebook application id. If you do not have it ask your admin or create it on https://developers.facebook.com/apps Be aware that the very same app id should be configured on the API side in order to work.

- `REACT_APP_GOOGLE_CLIENT_ID`: This is your google application id. If you do not have it ask your admin or create it on https://console.developers.google.com/apis/credentials Be aware that the very same app id should be configured on the API side in order to work.

- `REACT_APP_GOOGLE_CAPTCHA`: This is your google recaptchga key. If you do not have it ask your admin for it or create it going to https://www.google.com/recaptcha/ and then to `Admin console` and then create key.

- `REACT_APP_API_ENDPOINT`: Your API endpoint. To assure you API endpoint is working open in the browser `REACT_APP_API_ENDPOINT/status` and if all ok you should see following response:
``` 
{
status: "ok"
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Docker

#### Preconditions

You have to have `.env.production` file with appropriate values.
Docker build use `npm run build` for build and environment is  `production` so you have to create `.env.production` if you already do not have inside root of your project by executing:
```
cp env.example .env.production
```

and then setup enviroment variables inside `.env.production`. Check section `Environment vars` for more details

In order to **build the image** run the following command:

```
docker build -f Dockerfile -t asset-management-ui .
```

In order to **start the container** run the following command:

```
docker run -p 80:80 asset-management-ui
```

This will bring up docker with `ngnix` inside serving  on port 80 `build` folder previously build with command `npm run build` using `.env.production` env file.
If you have occupied port 80 and want to bind it on another, for example on 81, you execute:
```
docker run -p 81:80 asset-management-ui
```

If you want to run it in detached mode add param `-d`:
```
docker run -p 81:80 -d asset-management-ui
```


### Deployment

In order to buyild and deploy local files on AWS S3 development environment execute:
```
./bin/deploy
```

Preconditions:
- have installed `aws cli`
- have appropriate `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in the `env`

## How to reset your social logins/apps access

#### Reset Facebook App
Login into your facebook account and then goto https://www.facebook.com/settings?tab=applications. Remove your appropriate RSong app.


#### Reset Google App

Login into your google account and then goto https://myaccount.google.com/permissions?pli=1
You will see all apps having access to your account. Find relevant RSong app, click on it and then click on the button `REMOVE ACCESS`.

## Dependencies
- API: https://github.com/cramick-it/asset-management-api
- Google recaptcha: https://www.google.com/recaptcha `REQUIRE CREDENTIALS/TOKENS`.
- Facebook apps: https://developers.facebook.com/apps `REQUIRE CREDENTIALS/TOKENS`.
- Google apps: https://console.developers.google.com/apis/credentials `REQUIRE CREDENTIALS/TOKENS`.
- Sentry for logging errors: https://sentry.io  `REQUIRE CREDENTIALS/TOKENS`. `PAYABLE SERVICE`. `OPTIONAL`

### Additional Dependencies
- Sendgrid for sending email
- Twillio for sending SMS
- Dropbox token
- Google Cloud Storage bucket name and project id
- Sentry for errors logging
