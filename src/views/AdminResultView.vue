<template>
    <div class="test-form min-h-screen">
        <HeaderBlock></HeaderBlock>
        <AdminResultForm></AdminResultForm>
        <FooterBlock class="sticky top-[100vh]"></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import AdminResultForm from '@/components/AdminResultForm.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
name: 'CreateTestView',
components: {
    HeaderBlock, AdminResultForm, FooterBlock
}
}
</script>
  