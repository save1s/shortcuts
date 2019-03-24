<template>
  <div>
    <el-container>
      <el-header>
        <div class="bs-container">
          <el-menu mode="horizontal">
            <el-menu-item index="1" style="font-size: 18px">Shortcut save 1s!</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <div class="bs-container">
          <!-- 四列布局 -->
          <el-row
            :gutter="20"
            type="flex"
            justify="left"
            style="padding:5px"
          >
            <el-col :span="24">
              <el-badge :value="shortcuts_count" class="item" type="primary">
                <el-button  type="text">南京邮电大学捷径</el-button>
              </el-badge>
            </el-col>
          </el-row>
          <el-row
            :gutter="20"
            type="flex"
            justify="left"
            class="hidden-xs-only"
            v-for="(row_shortcuts, index) in four_cols_shortcuts"
            :key="index"
            style="padding:5px"
          >
            <el-col :sm="6" v-for="shortcut in row_shortcuts" :key="shortcut.name">
              <Shortcut
                :name="shortcut.name"
                :icon="shortcut.icon"
                :color="shortcut.color"
                :url="shortcut.url"
                :description="shortcut.description"
              />
            </el-col>
          </el-row>

          <!-- 两列布局 -->
          <el-row
            :gutter="20"
            type="flex"
            justify="left"
            class="hidden-sm-and-up"
            v-for="(row_shortcuts, index) in two_cols_shortcuts"
            :key="1000 + index"
            style="padding:5px"
          >
            <el-col :span="12" v-for="shortcut in row_shortcuts" :key="shortcut.name">
              <Shortcut
                :name="shortcut.name"
                :icon="shortcut.icon"
                :color="shortcut.color"
                :url="shortcut.url"
                :description="shortcut.description"
              />
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>
        <div class="bs-container">
          <el-tag type="info" @click="save1s" style="cursor: pointer; font-size: 14px">
            <font-awesome-icon :icon="['fab', 'github']"/>A save1s project.
          </el-tag>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Shortcut from "@/components/Shortcut";
import "element-ui/lib/theme-chalk/display.css";
import shortcutService from "@/services/shortcutService";
export default {
  components: {
    Shortcut
  },
  data() {
    return {
      shortcuts: [],
      shortcuts_count: 0,
      msgBody: ""
    };
  },
  computed: {
    two_cols_shortcuts: function() {
      return arrTrans(2, this.shortcuts);
    },
    four_cols_shortcuts: function() {
      return arrTrans(4, this.shortcuts);
    }
  },
  methods: {
    save1s: function() {
      window.open("https://github.com/save1s", "_blank");
    }
  },
  mounted() {
    shortcutService.fetchShortcuts().then(data => {
      this.shortcuts = data;
      this.shortcuts_count = data.length;
    });
  },
  name: "Main",
  props: {}
};
function arrTrans(num, arr) {
  // 一维数组转换为二维数组
  let arrs = []; // 声明数组
  for (let i = 0; i < Math.ceil(arr.length / num); i++) {
    arrs[i] = []; // 声明该数组第一个元素为一个数组
    for (let j = 0; j < num && j + num * i < arr.length; j++) {
      arrs[i].push(arr[j + num * i]);
    }
  }
  return arrs;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 山寨一个Boostrap的固定宽度container */
.el-main {
  padding: 15px !important;
}
.bs-container {
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 576px) {
  .bs-container {
    width: 540px;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .bs-container {
    width: 720px;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .bs-container {
    width: 960px;
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  .bs-container {
    width: 1140px;
    max-width: 100%;
  }
}

.el-main {
  min-height: calc(100vh - 140px);
}
</style>
