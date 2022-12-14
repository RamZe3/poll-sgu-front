<template>
    <div class="test-form min-h-screen">
        <HeaderBlock></HeaderBlock>
        <AdminResultList></AdminResultList>
        <FooterBlock class="sticky top-[100vh]"></FooterBlock>
    </div>
</template>
  
<script>

// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import AdminResultList from '@/components/AdminResultList.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
name: 'ResultListView',
components: {
    HeaderBlock, AdminResultList, FooterBlock
}
}
</script>
  