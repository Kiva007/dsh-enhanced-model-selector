# dsh-enhanced-model-selector

DSH (DeepSeek Harness) 客户端插件：增强模型选择器，新增**提供方筛选栏**和**折叠态提供方显示**。

## 功能

在多提供方（multi-provider）场景下更容易选择模型：

1. **折叠态触发器显示提供方名称**：未展开模型卡片时，触发器显示格式为 `{提供方 模型名 · 推理等级}`，例如 `DeepSeek DeepSeek-V4-Flash · Max`。
2. **模型列表提供方筛选栏**：展开模型选择卡片后，在模型列表顶部新增一栏提供方筛选 chip（All + 各提供方名），点击即可过滤显示该提供方下的模型。当只有一个提供方时不显示筛选栏（无意义）。

**不改变推理等级功能**——推理等级（Effort）面板完全保留原行为。

## 截图对比

### 原版触发器
```
GLM-5.2 ›
```

### 增强版触发器
```
QianFan GLM-5.2 · Max ›
```

### 增强版模型列表（展开后顶部新增筛选栏）
```
┌─────────────────────────┐
│ PROVIDER  [All] [QianFan] [DeepSeek] │
├─────────────────────────┤
│ QIANFAN                            │
│   ○ GLM-5.2                        │
│   ○ GLM-5.2-Air                    │
│ DEEPSEEK                           │
│   ● DeepSeek-V4-Flash              │
└─────────────────────────┘
```

## 安装

### 方式一：link 安装（开发推荐）

```bash
git clone https://github.com/Kiva007/dsh-enhanced-model-selector.git
cd dsh-enhanced-model-selector
npm run build  # 需要 DSH source checkout，见下方构建说明
dsh plugin --profile web add link:./
```

### 方式二：git URL 安装

```bash
dsh plugin --profile web add github:Kiva007/dsh-enhanced-model-selector
```

安装后重启 DSH Web 即可生效。

## 构建

构建依赖 esbuild，它从 DSH source checkout 中解析：

```bash
# 设置 DSH source 路径（如果不在默认位置 ~/.dsh/source/current）
export DSH_SOURCE=/path/to/deepseek-harness

npm run build
```

构建产物为 `lib/client.js`，采用 `window.__ModuleLoader__.load()` 包裹格式。

## 技术细节

- 替换 `conversation.input.model` Slot 的 occupant（`single` 类型，完整替换）
- 复用 `ctx.modelDirectories` 服务获取模型目录数据，不额外增加 RPC 调用
- 样式用 `styles.insert()` 注入 `emps-` 前缀 CSS，复用 DSH theme CSS 变量（`--dsw-alias-*`），自动适配深浅色主题
- 完整保留原 ModelSelect 的所有功能：两级菜单（Model / Effort）、键盘导航、错误重试、toast 通知等

## 兼容性

- DSH ≥ 0.1.1-rc.2

## License

MIT
