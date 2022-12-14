<template>
  <div class="home min-h-screen">
      <HeaderBlock></HeaderBlock>
      <WelcomeSection></WelcomeSection>
      <FooterBlock class="sticky top-[100vh]"></FooterBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import WelcomeSection from '@/components/WelcomeSection.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderBlock, WelcomeSection, FooterBlock
  }
}
</script>
