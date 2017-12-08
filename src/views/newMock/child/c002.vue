<template lang="html">
  <div>
    <div class="table">
      <table border="1px solid #333" cellspacing='0' cellpadding='0'>
        <thead>
          <tr>
            <th>序号</th>
            <th v-for="(item, index) in paramsData.cmsPageTitleList" :key="index">{{ item.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tr, trIdx) in paramsData.pageValueList">
            <td>{{ trIdx+1 }}</td>
            <td v-for="(td, tdIdx) in paramsData.cmsPageTitleList">
              <span>{{tr[td.title]}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="foot">
      <button class="btn" type="button">保存</button>
    </div>
  </div>
</template>

<style src="../newMock.css"  scoped></style>

<script>
export default {
  props: ['paramsData'],
  created () {
    // console.log(`paramsData ${JSON.stringify(this.paramsData)}`)
  }
}
</script>
