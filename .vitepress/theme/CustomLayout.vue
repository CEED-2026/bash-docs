<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout v-bind="frontmatter">
    <template #nav-bar-title-before>
      <div class="custom-nav-title">
        <img class="logo-dark" src="/icon_dark.svg" alt="BASH Fundamentos">
        <img class="logo-light" src="/icon_light.svg" alt="BASH Fundamentos">
        <span class="title">BASH Fundamentos</span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.VPNavBarTitle > a.title > img.VPImage,
.VPNavBarTitle > a.title > span {
  display: none !important;
}

.custom-nav-title {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.logo-dark,
.logo-light {
  width: 24px;
  height: 24px;
}

.logo-dark {
  display: none;
}

.dark .logo-dark {
  display: block;
}

.dark .logo-light {
  display: none;
}

.logo-light {
  display: block;
}
</style>
