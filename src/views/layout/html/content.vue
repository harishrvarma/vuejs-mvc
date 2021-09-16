<template>
  <div>
    <div class="container border pt-3 mt-3" v-for="(component, index) in getComponents()" :key="index">
      <component v-bind:is="component" :layout="getLayout()"></component>
    </div>
  </div>
</template>

<script>
import Template from './../../core/template';

export default {
  name : 'layoutContent',
  extends:Template,
  methods: {
    getComponents() 
    {
      return this.getLayout().getAction().getContent();
    }
  }
}
</script>