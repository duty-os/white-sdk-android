
## Question
* 原WhiteSdk通过WhiteSdkConfiguration初始化构建，存在向JS端发送初始化配置，需要根据业务构建
* WhiteSdkConfiguration内部pptParams、fonts等参数是否必须在启动初始化时设置
* 当前WhiteSdkConfiguration不仅仅是WebView的初始化数据，同时具有每次重连时的请求数据，不能用于类似Map的createFromAttr。
* WhiteSdkConfiguration API在整个运行时是否会更改
* Room创建完成的第一条事件状态

## TODO
* Room内部属性全部为包装类型是否有特殊需求（对于Null的假定，gson转换中的特殊需求）
* RoomCallbacksImpl只绑定Room，不处理RomeCallback逻辑，接受到的js调用被代理/转发到Room对象中，由Room对象处理及出发RomeCallback回调
* 讨论项目中的TODO项，考虑资源清理及处理线程切换
* 关于类访问域的限定，（包权限 vs internal目录）
    * 同包内相互引用，不会有import记录
    * internal目录内文件需要声明为public
* RoomCallbacks vs PlayerEventListener 确定回调名称
* 统一暴露的Promise接口是否有必要替换成类似OnRoomJoinCallback更具体接口
* domain -> model
* JsInterface调用异常统一处理

## 类定义
RoomJsInterfaceImpl 用于提供Js调用Native接口
XXXImpl

Room Player
* 提供Native调用Js接口

SyncDisplayerState
* 可观察状态类

