import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: "ap-northeast-1",

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "USER_POOL_ID",

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "USER_Pool_Web_Client_ID",
  },
});

// You can get the current config object
const currentConfig = Auth.configure();

export default currentConfig;
