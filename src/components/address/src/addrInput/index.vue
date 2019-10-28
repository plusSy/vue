<template>
  <div class="addr-content">
    <div 
      :class="['cascaderEffect', 'el-input__inner', {'is-disabled': disabled}]"
      readonly
      @click="handleFocus"
    >
      <template v-if="effectValue.length > 0">
        <span 
          v-for="(val, index) in effectValue" 
          :key="index"
          :title="val.name"
          class="mulNam"
        > {{ val.name }} </span>
      </template>
      <template v-else>
        <span class="mulNam color-gray-700"> {{ placeholder }} </span>
      </template>
      <span class="mulIcon">
        <em :class="`el-icon-arrow-${downOrUp}`"></em>
      </span>
    </div>
  </div>
</template>

<script src="./index.js"></script>