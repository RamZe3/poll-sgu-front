<template>
    <div class="result-form min-h-screen">
        <HeaderBlock></HeaderBlock>
        <ResultForm></ResultForm>
        <FooterBlock class="sticky top-[100vh]"></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import ResultForm from '@/components/ResultForm.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
name: 'ResultView',
components: {
    HeaderBlock, ResultForm, FooterBlock
}
}
</script>
  