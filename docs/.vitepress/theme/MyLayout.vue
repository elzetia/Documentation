<script setup>
  import DefaultTheme from 'vitepress/theme'
  import { onContentUpdated, useRoute } from 'vitepress'
  import { computed, ref, onMounted } from "vue";
  import { useSidebar } from 'vitepress/theme'
  import mediumZoom from 'medium-zoom/dist/pure'
  const route = useRoute()

  const { sidebar } = useSidebar()
  const { Layout } = DefaultTheme

  let tempItems = []
  let currentLevel = 0

  function isPageIn(link, item, level) {
    tempItems[level] = item
    level ++
    currentLevel = level
    if (item.link == link)
      return true
    if (item.items) {
      for (let index = 0; index < item.items.length; index++) {
        const element = item.items[index];
        if (isPageIn(link,element, level))
         return true
      }
    }
    return false
  }

  const home = {icon: 'pi pi-home', link: '/', text:''}
  let items = computed(() => {
    const currentPath = route.path
    let found = false
    for (let index = 0; index < sidebar.value.length; index++) {
      const item = sidebar.value[index];
      tempItems = []
      if (isPageIn(currentPath, item, 0)) {
        found = true
        break
      }
    }
    if (!found) return []
    return tempItems.slice(0,currentLevel)
  })


  function stripHtml(html)
  {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";
    return text.replace(/\p{Emoji}/gu, '');
  }

  onMounted(() => {
    mediumZoom('[data-zoomable]', { background: 'var(--zoom-bg)' });
  });
</script>

<template>
  <Layout>
    <template #doc-before >
      <Breadcrumb :home="home" :model="items">
          <template #item="{ item }">
            <a class="cursor-pointer" :href="item.link" v-if="items.length > 0">
              <i :class="item.icon" v-if="item.icon"/>
              {{ stripHtml(item.text) }}
            </a>
          </template>
      </Breadcrumb>
    </template>
  </Layout>
</template>

