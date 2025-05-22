<template>
  <div class="container">
    <h1 class="title">Contact Us</h1>
    <p>
      If you have any questions or concerns, please don't hesitate to reach out to us.
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted')
      // TODO: Implement form submission logic
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
