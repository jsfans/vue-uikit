<template>
  <div>
    <h1>layout</h1>
    <x-row>
      <x-col>1</x-col>
      <x-col :span="2">2</x-col>
    </x-row>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
