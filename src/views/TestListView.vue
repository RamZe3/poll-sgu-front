<template>
    <div class="test-form min-h-screen">
        <HeaderBlock></HeaderBlock>
        <TestList></TestList>
        <TestFormStartPage></TestFormStartPage>
        <FooterBlock class="sticky top-[100vh]"></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import TestList from '@/components/TestList.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import TestFormStartPage from '@/components/TestFormStartPage.vue';

export default {
name: 'TestListView',
components: {
    HeaderBlock, TestList, FooterBlock, TestFormStartPage
}
}
</script>
  