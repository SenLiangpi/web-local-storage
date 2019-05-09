<!--
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-04-01 14:18:20
 * @LastEditTime: 2019-05-09 09:28:41
 -->

# web本地存储解决方案
webStorage是一个用纯javascript的本地存储解决方案。他提供给你一个关系数据结构key和value。
支持的数据存储是：
* IndexdeDB - 浏览器提供的IndexedDB关系数据库存储。
* localStorage - 浏览器提供的localStorage关系型数据存储。
* cookies - 浏览器提供的cookies存储，可以设置时效性。
webStorage用简单易用的方式解决本地存储。

# 快速开始
```HTML
<script src="/dist/webStorage.min.js"></script>
<script>
    //cookies
    var cookies = new pipi_cookie();
    var localStorage = new pipi_localStorage();
    var indexedDB = new pipi_indexedDB();
<script>
```
# cookies
Cookie是计算机上存储在小文本文件中的数据。每个 Cookie 的大小一般不能超过4KB。
当Web服务器将网页发送到浏览器时，连接将关闭，服务器将忘记用户的所有内容。
Cookie是为了解决“如何记住用户信息”的问题 
Cookie的存储有时效性，可自主控制失效时间
Cookie 存储数据为同步操作
```HTML
<script>
var cookies = new pipi_cookie();
/**
 * @description: add 添加cookie
 * @param {name:cookie名字 string,
           val:cookie值 string,
           field:可调用域名下的路径 全局为/,
           time:cookie的生命时间1为一分钟 int
        } 
 * @return: 成功{ success: true, message: "ok" },
            失败{ success: false, message: "cookie name repeat" }
 */
cookie.add(name, val, field, time)
/**
 * @description: cookie 获取cookie
 * @param {name: cookie的名字}
 * @return: 成功{ success: true, message: cookie值 }
            失败{ success: false, message: "Not found" }
 */
 cookie.botain(name)
/**
 * @description: add 修改cookie
 * @param {name:cookie名字,
           val:cookie值,
           field:可调用域名下的路径 全局为/,
           time:cookie的生命时间1为一分钟 int
        } 
 * @return: 成功{ success: true, message: "ok" },
            失败{ success: false, message: "Name does not exist" }
 */
cookie.revise(name, val, field, time)
/**
 * @description: cookie 删除cookie
 * @param {name: cookie的名字}
 * @return: 成功{ success: true, message: ok }
            失败{ success: false, message: "Name does not exist" }
 */
cookie.delete(name)
</script>
```