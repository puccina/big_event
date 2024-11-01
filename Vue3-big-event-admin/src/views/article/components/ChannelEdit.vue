<script setup>
import { articleAddChannelService, articleEditChannelService } from '@/api/article';
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
const dialogVisible = ref(false)
const formRef = ref()
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message:'请输入分类名称', triggrt: 'blur' },
    { 
      pattern: /^\S{1,10}$/,
      message: '分类名必须是1-10位的非空字符串',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message:'请输入分类别名', triggrt: 'blur' },
    { 
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类名必须是1-15位的字母或数字',
      trigger: 'blur'
    }
  ]
}

const open = (row) => {
  dialogVisible.value = true
  formModel.value = { ...row }
}

const emit = defineEmits(['success'])
const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    // console.log('编辑', formModel.value)
    await articleEditChannelService(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    // console.log('添加', formModel.value)
    await articleAddChannelService(formModel.value)
    ElMessage.success('添加成功')
  }
  dialogVisible.value = false
  emit('success')
}



defineExpose({
  open
})
</script>

<template>
  <el-dialog :title="formModel.id ? '编辑分类' : '添加分类'" v-model="dialogVisible" title="添加弹层" width="30%">
  <el-form ref="formRef" :model="formModel" :rules="rules" label-width="100px" style="padding-right: 30px">
    <el-form-item prop="cate_name" label="分类名称">
      <el-input v-model="formModel.cate_name" placeholder="请输入分类名称"></el-input>
    </el-form-item>
    <el-form-item prop="cate_alias" label="分类别名">
      <el-input v-model="formModel.cate_alias" placeholder="请输入分类别名"></el-input>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="onSubmit"> 确认 </el-button>
    </span>
  </template>
</el-dialog>
</template>