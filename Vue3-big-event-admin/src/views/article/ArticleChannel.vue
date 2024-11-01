<script setup>
import { ref } from 'vue'
import { articleDelChannelService, articleGetChannelsService } from '@/api/article';
// import { Edit } from '@element-plus/icons-vue/dist/types';
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue';
import { ElMessage } from 'element-plus';

const channelList = ref([])

const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
  console.log(channelList.value)
}
getChannelList()

const onEditChannel = (row) => {
  dialog.value.open(row)
}

const onDelChannel = async (row) => {
  await ElMessageBox.confirm('确认要删除该分类么？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await articleDelChannelService(row.id)
  ElMessage.success('删除成功')
  getChannelList()
}

const onAddChannel = () => {
  dialog.value.open({})
}

const onSuccess = () => {
  getChannelList()
}

</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%;">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button :icon="Edit" circle plain type="primary" @click="onEditChannel(row, $index)"></el-button>
          <el-button :icon="Delete" circle plain type="danger" @click="onDelChannel(row, $index)"></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <ChannelEdit ref="dialog" @success="onSuccess"></ChannelEdit>
    
    
  </page-container>
</template>

<style lang="scss" scoped>

</style>