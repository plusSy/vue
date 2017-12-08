<template lang="html">
  <div class="mock">
    <div class="content">
      <ul>
        <li
          class="conLi"
          :class="{active:anotherPage === item.codeValue}"
          v-for="(item, index) in mockData.componentList"
          @click="changeToAnother(item)"
        >
          {{ item.componentName }}
        </li>
      </ul>
      <div class="conDiv">
        <component :is="modal" :paramsData="paramsData"></component>
      </div>
    </div>
  </div>
</template>

<style src="./newMock.css" scoped></style>

<script>
import mockData from './mock.json'
import C001 from './child/c001.vue'
import C002 from './child/c002.vue'

export default {
  data () {
    return {
      modal: C001,
      mockData: {},
      anotherPage: 0,
      paramsData: {}
    }
  },
  created () {
    this.mockData = mockData
  },
  methods: {
    changeToAnother (cell) {
      const item = cell.codeValue
      this.anotherPage = item
      this.paramsData = cell
      if (item === 'C001') {
        this.modal = C001
      } else if (item === 'C002') {
        this.modal = C002
      }
    }
  }
}
</script>
