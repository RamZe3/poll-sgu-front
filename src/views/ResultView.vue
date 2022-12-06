<template>
    <div class="result-form">
        <HeaderBlock></HeaderBlock>
        <ResultForm></ResultForm>
        <FooterBlock></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import ResultForm from '@/components/ResultForm.vue'
import FooterBlock from '@/components/FooterBlock.vue'

document.title = 'Результат теста';

export default {
name: 'ResultView',
components: {
    HeaderBlock, ResultForm, FooterBlock
}
}
</script>
  