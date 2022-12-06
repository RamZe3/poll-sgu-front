<template>
    <div class="test-form">
        <HeaderBlock></HeaderBlock>
        <AdminResultForm></AdminResultForm>
        <FooterBlock></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import AdminResultForm from '@/components/AdminResultForm.vue'
import FooterBlock from '@/components/FooterBlock.vue'

document.title = 'Результат пользователя';

export default {
name: 'CreateTestView',
components: {
    HeaderBlock, AdminResultForm, FooterBlock
}
}
</script>
  