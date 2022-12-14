<template>
    <div class="test-form min-h-screen">
        <HeaderBlock></HeaderBlock>
        <CreateTest></CreateTest>
        <FooterBlock class="sticky top-[100vh]"></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import CreateTest from '@/components/CreateTest.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
name: 'CreateTestView',
components: {
    HeaderBlock, CreateTest, FooterBlock
}
}
</script>
  