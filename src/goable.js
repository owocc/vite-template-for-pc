import { ElMessage, ElMessageBox, ElLoading } from "element-plus";
export default {
  install: (app) => {
    app.config.globalProperties["$message"] = ElMessage;
    app.config.globalProperties["$messagebox"] = ElMessageBox;
    app.config.globalProperties["$loading"] = ElLoading;
  },
};
