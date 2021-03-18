## 后续接口变更计划
| 源类及目录 | 目标 | 备注 |
| --- | --- | --- |
| domain/ | model/ | 目录迁移 |
| domain/XXXConfiguration | domain/XXXOptions | model类重命名 |
| combinePlayer/ | play/ | 目录迁移 |
| ConverterXXX | converter/ConverterXXX | 迁移Converter相关类至converter目录 |
| XXXJsInterfaceImpl | internal/XXXJsInterfaceImpl | 迁移JsInterfaceImpl至internal（内部接口保持主包文件干净）|
| WhiteSdkConfiguration.XXX | model/XXX | 迁移WhiteSdkConfiguration内部模型类至model目录 |

## 关于测试
为减少后续重构过程中错误，需要提供一下测试
* model类的序列化保证
* Room实体类接口调用mock测试
* SetAndGet及基本逻辑集成测试
