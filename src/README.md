## 收銀台

## Environment

* ues react.js

* node >= v16.14.x

* npm >= 8.5.x


## Script

* npm run start: 本地啟服務

* npm run deploy_cashier: 部署到測試環境

* npm run build: 編譯代碼，向運維 (OP) 發部署申請，部署到正式環境


## Flow Chart

* 商戶 APP 透過 API 跳轉到收銀台頁面，相關信息後端用 JWT Encode

* 收銀台 H5 從 URL 鏈接用 JWT decode 並展示相關信息

* 選擇支付方式，點擊 Pay

* 依據 API 信息，選擇是否開啟 KYC 頁面

* 開啟 KYC 頁面，填寫相關信息

* 跳轉到第三方支付頁面

![FlowChart](./readmeImg/flowChart.png)



## Coding Style

* 檔案內之 function，必須用 on 開頭，ex: const onChangeSomeone = () => {}，用於提高 function 辨別度

![action](./readmeImg/function.png)

* 變量名稱用小駝峰表示

![action](./readmeImg/parameter.png)

* classname 用底線區隔，'_'

![action](./readmeImg/classname.png)

* id 用減號區隔，並以 'id' 作為開頭，ex: 'id-'，若沒必要，請勿濫用 id

![action](./readmeImg/id.png)

* 所有 function 一律用 arrow function 表示

* 代碼中視情況，彈性加上適當註釋，以助於了解模塊流程

* 開發過程中的 console.log 需在發 MR 前刪除

* 元件內的代碼請分類並註釋

![action](./readmeImg/block.png)

* 元件引用須分類並註釋

![action](./readmeImg/import.png)