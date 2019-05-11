<!--
 * @Author: pipi
 * @Email: pisenliang@gmail.com
 * @LastEditors: pipi
 * @Date: 2019-04-01 14:18:20
 * @LastEditTime: 2019-05-11 14:30:33
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
var cookies = new pipi_localStorage();
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
 * @description: botain 获取cookie
 * @param {name: cookie的名字}
 * @return: 成功{ success: true, message: cookie值 }
            失败{ success: false, message: "Not found" }
 */
 cookie.botain(name)
/**
 * @description: revise 修改cookie
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
 * @description: delete 删除cookie
 * @param {name: cookie的名字}
 * @return: 成功{ success: true, message: ok }
            失败{ success: false, message: "Name does not exist" }
 */
cookie.delete(name)
</script>
```
# localStorage
容量:目前业界基本上统一为5M
localStorage在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份localStorage数据。
由于浏览器的安全策略，localstorage是无法跨域的，也无法让子域名继承父域名的localstorage数据。
localStorage 存储数据为同步操作
```HTML
<script>
var localStorage = new pipi_localStorage();
/**
 * @description: add 添加localStorage
 * @param {name:localStorage名字 string,
           val:localStorage值 string
        } 
 * @return: 成功{ success: true, message: "ok" },
            失败{ success: false, message: "localStorage name repeat" }
 */
localStorage.add(name, val)
/**
 * @description: botain 获取localStorage
 * @param {name: localStorage的名字}
 * @return: 成功{ success: true, message: cookie值 }
            失败{ success: false, message: "Not found" }
 */
 localStorage.botain(name)
/**
 * @description: revise 修改localStorage
 * @param {name:localStorage名字,
           val:localStorage值
        } 
 * @return: 成功{ success: true, message: "ok" },
            失败{ success: false, message: "Name does not exist" }
 */
localStorage.revise(name, val)
/**
 * @description: delete 删除localStorage
 * @param {name: localStorage的名字}
 * @return: 成功{ success: true, message: ok }
            失败{ success: false, message: "Name does not exist" }
 */
localStorage.delete(name)
</script>
```
# indexedDB
IndexedDB是一个事务型数据库系统，类似于基于SQL的RDBMS。 然而不同的是它使用固定列表，IndexedDB是一个基于JavaScript的面向对象的数据库。 IndexedDB允许您存储和检索用键索引的对象。
异步 API 方法调用完后会立即返回，而不会阻塞调用线程。
一个单独的数据库项目的大小没有限制。然而可能会限制每个 IndexedDB 数据库的大小。在各个浏览器上也可能有所不同.
使用IndexedDB，你可以存储或者获取数据，使用一个key索引的。
IndexedDB 是 WebSQL 数据库的取代品, W3C组织在2010年11月18日废弃了webSql.  IndexedDB 和WebSQL的不同点在于WebSQL 是关系型数据库（复杂）IndexedDB 是key-value型数据库（简单好使）.
```HTML
<script>
//待更新。。。。
</script>
```
