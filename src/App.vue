<template>
  <div>
    <div v-if="authState !== 'signedin'">You are signed out.</div>
    <amplify-authenticator>
      <div v-if="authState === 'signedin' && user">
        <div>Hello, {{user.username}} </div>
        <p class="show-token"><span>IdToken: <br> </span>{{user.signInUserSession.idToken.jwtToken}}</p>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'AuthStateApp',
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      console.log(this.user)
    })
  },
  data() {
    console.log(this.user)
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined
    }
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  }
}


</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.show-token {
 margin: 20px;
 font-size: 20px;
 max-width: 500px;
 text-align: start;
 overflow: hidden;
}
</style>
