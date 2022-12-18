import { createStore } from 'vuex'
import {globalModule} from "@/store/globalModule";
import {testModule} from "@/store/testModule";
import {resultTestModule} from "@/store/resultTestModule";
import {newTestModule} from "@/store/newTestModule";
import {creatorResultModule} from "@/store/creatorResultModule";

export default createStore({
  modules: {
    globalM: globalModule,
    testM: testModule,
    resultM: resultTestModule,
    newTestM: newTestModule,
    creatorM: creatorResultModule
  }
})
