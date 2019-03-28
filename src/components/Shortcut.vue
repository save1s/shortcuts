<template>
  <div>
    <el-card
      class="box-card"
      shadow="always"
      :style="{backgroundColor: color}"
      :body-style="{ padding: '10x 15px' }"
    >
      <div @click="dialogVisible = true" style="cursor: pointer">
        <div style="font-size: 30px">
          <i :class="icon_class"></i>
        </div>
        <div class="text">{{name}}</div>
      </div>
    </el-card>

    <el-dialog :title="name" :visible.sync="dialogVisible" width="60%">
      <p>{{description}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">退出</el-button>
        <el-button type="primary" @click="downloadShortcut">下载</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    icon_class: function() {
      return "fas fa-" + this.icon;
    }
  },
  name: "Shortcut",
  props: ["color", "name", "icon", "url", "description"],
  methods: {
    downloadShortcut: function() {
      window.open(this.url, "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-card {
  border-radius: 9px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 9px 18px 0 rgba(232, 237, 250, 0.8) !important;
}

.box-card:hover {
  margin-top: -5px;
  box-shadow: 0 16px 18px 0 rgba(232, 237, 250, 0.8) !important;
}
</style>
