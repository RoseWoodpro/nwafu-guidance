export const siteData = JSON.parse("{\"base\":\"/nwafu-guidance/\",\"lang\":\"zh-CN\",\"title\":\"西农新手村\",\"description\":\"西北农林科技大学新手指南，使用指南，此指南针对新生编写，为新生入学提供帮助\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
