<script setup>
import { articleGetChannelsService } from '@/api/article'
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])

const channelList = ref([])
const getChannelList = async () => {
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
}

getChannelList()

</script>


<template>
  <el-select :style="{ width }" :modelValue="modelValue" @update:modelValue="emit('update:modelValue', $event)">
    <el-option v-for="channel in channelList" :label="channel.cate_name" :value="channel.id" :key="channel.id"></el-option>
  </el-select>
</template>