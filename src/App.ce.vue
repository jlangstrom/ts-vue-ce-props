<script setup lang="ts">
import { withDefaults } from "vue";
interface Props {
  foo: number;
  bar?: number;
  baz?: string;
}

const props = withDefaults(defineProps<Props>(), { bar: 0, baz: "test" });
</script>

<template>
  <div>
    <p t-id="propFoo">{{typeof foo}}</p>
    <p t-id="propBar">{{typeof bar}}</p>
    <p t-id="propBaz">{{typeof baz}}</p>
  </div>
</template>

<style scoped>
div {
  background: red;
}
p {
  color: white;
}
</style>
