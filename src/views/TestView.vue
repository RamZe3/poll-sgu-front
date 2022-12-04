<template>
    <div class="test-form">
        <HeaderBlock></HeaderBlock>
        <TestForm></TestForm>
        <FooterBlock></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import TestForm from '@/components/TestForm.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
name: 'TestView',
components: {
    HeaderBlock, TestForm, FooterBlock
}
}
</script>
  