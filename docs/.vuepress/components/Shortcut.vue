<template>
  <div class="shortcutBlock" :id="url">
    <p class="badge">
      <Badge text="需要API" type="tip" vertical="middle" v-if="needAPI"/>
      <Badge text="Siri友好" type="tip" vertical="middle" v-if="siriAsk"/>
    </p>
    <p class="author">
      作者:
      <a
        v-for="uid in author.split(' ')"
        :href="`https://github.com/${uid}`"
        target="_blank"
      >@{{ uid }}</a>
    </p>
    <p class="desc">描述: {{ desc }}</p>
    <p class="path">
      API路径:
      <code>{{ apiPath }}</code>
    </p>
    <div class="tip custom-block siri-block">
      <p class="custom-block-title">Siri案例</p>
      <p class="ask">提问: "{{siriAsk}}"</p>
      <p class="answer">回答: "{{siriAnswer}}"</p>
    </div>
    <a :href="url" target="_blank" style="margin-right: 20px">
      直接下载
      <OutboundLink/>
    </a>
    <a :href="`http://qr.liantu.com/api.php?text=${url}`" target="_blank">
      显示二维码
      <OutboundLink/>
    </a>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    author: {
      type: String,
      default: "save1s"
    },
    desc: {
      type: String,
      required: true
    },
    apiPath: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    needAPI: {
      type: String,
      default: null
    },
    siriAsk: {
      type: String,
      default: null
    },
    siriAnswer: {
      type: String,
      default: null
    }
  },
  methods: {
    renderMarkdown(item) {
      const md = require("markdown-it")({
        html: true
      });
      return md.render(item);
    }
  }
};
</script>
<style>
li.params p {
  display: inline;
}
.shortcutBlock {
  margin: 1rem 0 2rem;
}
#app .page .badge.tip {
  background-color: #ffb74d;
}

.siri-block {
  max-width: 20rem;
}
</style>