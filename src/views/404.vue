<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="$router.push({ path: '/' })">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception'
}
</script>
