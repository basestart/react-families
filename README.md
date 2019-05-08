## react 家族

### 从0开始创建裸项目react-families
    
    create-react-app react-families
    
### 1. 创建Count组件， 替代App.js
    
##### 为了便于演示， 这里创建一个最原始的count计时器，后面逐渐进行升级， 功能分成两个功能， 立即增加和延时增加
    src/steps/1/Count.js

### 2. 组件中间传递信息
    组件之间传递信息， 一般分成 
    （a） 父子组件传递信息 : 父--->子 一般通过属性传递变量  子--->父 一般是父组件通过属性传递给子组件一个回调函数， 子组件调传递参数调用回调函数
    （b） 兄弟组件传递信息 : 兄弟组件传递信息一般是把数据放到父组件， 然后通过父组件传递的回调函数作用于父组件的数据， 从而影响兄弟组件的状态
    
    所以这个项目想实现子元素向父元素传递信息以及兄弟元素之间传递信息

### 3. 使用全局变量统一管理数据， 方法放过统一的地方管理
    这里使用redux重写count
    action是对方法的描述
    store用来存储数据
    reducer用来描述不同的action作用下， 旧的状态迁移返回新的状态的过程
    这里建议看一下redux源码中的createStore方法
### 4. 第三种方法虽然实现了redux的常规用法， 但是写起来比较啰嗦， 而且store 和组件放在一起，不太方便管理

### 5. 现在需要把redux抽象出来， 把状态store和方法放到组件外， 进行统一管理， 借助一个常规的工具react-redux
    react-redux 本质上是一个高阶函数， 把store和action通过属性绑定到相应的组件上
    在任何地方， 都可以借助react-redux的connect方法进行信息传递
    connect接受两个函数， 第一个函数 mapStateToProps 可以把全局state的数据传递到任何一个地方
    第二个函数mapDispatchToProps 把引入的action 通过一个高阶函数派发出去
    
    有时候当action比较多的时候， 会把action统一导出， 然后一次性绑定派发， react-redux提供一个方法： bindActionCreators(action, dispatch)

### 6. redux已经运行良好的情况下， 如果是异步的如何处理呢
    dispatch派发只接受方法对象， 不接受异步函数， 所以要借助redux-thunk， 做一次中转，
    在案例5的基础上， 新增一个Child3的独立组件, 


### 7. 一个完整的redux方案已经完成， 现在要结合react-router， 实现跨页面， 跨组件的数据传递



