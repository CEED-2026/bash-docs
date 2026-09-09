---
title: ""
---

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
onMounted(() => {
  if (!route.path.endsWith('/en/')) {
    location.replace('/bash-docs/en/')
  }
})
</script>

# BASH

Theoretical fundamentals

System administration with BASH

![BASH Scripting Fundamentals](/hero_dark.svg){.hero-dark}
![BASH Scripting Fundamentals](/hero_light.svg){.hero-light}
