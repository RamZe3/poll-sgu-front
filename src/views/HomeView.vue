<template>
  <div class="home">
      <HeaderBlock></HeaderBlock>
      <WelcomeSection></WelcomeSection>
      <FooterBlock></FooterBlock>
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
