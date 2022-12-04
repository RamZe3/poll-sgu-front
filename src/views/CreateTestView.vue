<template>
    <div class="test-form">
        <HeaderBlock></HeaderBlock>
        <CreateTest></CreateTest>
        <FooterBlock></FooterBlock>
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
  