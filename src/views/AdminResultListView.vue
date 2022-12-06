<template>
    <div class="test-form">
        <HeaderBlock></HeaderBlock>
        <AdminResultList></AdminResultList>
        <FooterBlock></FooterBlock>
    </div>
</template>
  
<script>

// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import AdminResultList from '@/components/AdminResultList.vue'
import FooterBlock from '@/components/FooterBlock.vue'

document.title = 'Мои тесты';

export default {
name: 'ResultListView',
components: {
    HeaderBlock, AdminResultList, FooterBlock
}
}
</script>
  