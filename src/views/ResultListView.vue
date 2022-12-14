<template>
    <div class="test-form min-h-screen" >
        <HeaderBlock></HeaderBlock>
        <UserAuth></UserAuth>
        <ResultList></ResultList>
        <FooterBlock class="sticky top-[100vh]"></FooterBlock>
    </div>
</template>
  
<script>
// @ is an alias to /src
import HeaderBlock from '@/components/HeaderBlock.vue'
import ResultList from '@/components/ResultList.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import UserAuth from '@/components/UserAuth.vue'

export default {
name: 'ResultListView',
components: {
    HeaderBlock, ResultList, FooterBlock, UserAuth
}
}
</script>
  