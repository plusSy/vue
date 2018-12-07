<template>
  <div>
    <br>
    b: {{ new Date() }}
  </div>
</template>

<script>
export default {
  name: 'B',
  created () {
    console.log(this.name)
  }
}
</script>
