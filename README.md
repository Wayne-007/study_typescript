# study_typescript
学习typescript。

## 一、定义

TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。

## 二、安装

```bash
# 全局安装
npm install -g typescript
# 编译模式（如果创建了一个 hello.ts 文件）
tsc hello.ts
```

## 三、数据类型

JavaScript的类型：原始数据类型、对象类型。

### 1.对象类型（后面学习）

### 2.原始数据类型

包括：布尔值、数值、字符串、null、undefined、[Symbol](https://es6.ruanyifeng.com/#docs/symbol)（ES6中的新类型）

- 布尔值（boolean）

  在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样。

- 数值（number）

  二进制（0b）和八进制（0o）会编译为十进制数字。

- 字符串（string）

  可以用上ES6中的模板字符串；

- 空值（void）

  1、JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数；

  2、声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`。

-  Null 和 Undefined

  与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。

  

## 四、任意值

任意值（Any）用来表示允许赋值为任意类型。

### 1.允许被赋值为任意类型；

### 2.允许访问任何属性和调用任何方法（**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**）；

### 3.**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**；

```typescript
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```



## 	五、类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

![image-20200602214849413](/Users/wayne/Library/Application Support/typora-user-images/image-20200602214849413.png)



TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

![image-20200602214924718](/Users/wayne/Library/Application Support/typora-user-images/image-20200602214924718.png)

总结：在没指定明确的类型并赋值的话，会报错；如果先定义后赋值，定义时会被推论为“any”类型。

## 六、联合类型（Union Types）

联合类型（Union Types）表示取值可以为多种类型中的一种。

### 1.示例

![image-20200602220742229](/Users/wayne/Library/Application Support/typora-user-images/image-20200602220742229.png)

联合类型使用 `|` 分隔每个类型。

这里的 `let myFavoriteNumber: string | number` 的含义是，允许 `myFavoriteNumber` 的类型是 `string` 或者 `number`，但是不能是其他类型。

### 2.访问联合类型的属性或方法

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**

![image-20200602222634738](/Users/wayne/Library/Application Support/typora-user-images/image-20200602222634738.png)

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型。

![image-20200602222724363](/Users/wayne/Library/Application Support/typora-user-images/image-20200602222724363.png)

## 七、对象的类型——接口

- 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型；
- 接口是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）；
- 接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象](https://ts.xcatliu.com/advanced/class-and-interfaces.md#类实现接口)以外，也常用于对「对象的形状（Shape）」进行描述。
- 接口一般首字母大写。[有的编程语言中会建议接口的名称加上 `I` 前缀](https://msdn.microsoft.com/en-us/library/8bc1fexb(v=vs.71).aspx)

### 1.标准属性、可选属性、任意属性、只读属性

## 八、数组的类型

### 1、「类型+方括号」表示法

```typescript
// 数字数组
let num_arr: number[] = [1,2,3,4];

// 字符串数组
let str_arr: string[] = ['1','2'];
```

数组的一些方法参数也会根据数组在定义时约定的类型进行限制；

### 2、数组泛型

可以使用数组泛型Array<elemType>来表示数组

```typescript
let fibonacci: Array<number> = [1,2,3];
```

### 3、用接口表示数组（类数组用的比较多）

```typescript
interface NumberArray {
  	// 索引的类型是数字时，值的类型必须为数字
		[index:number]:number
}

let fibonacci:NumberArray = [1,2,3];
```

### 4、类数组（不是数组类型，eg：arguments）

arguments是一个类数组，不能用普通的数组方式来描述，应该使用接口：

```typescript
function sum(){
  let args:{
    [index:number]:number;
    length:number;
    callee:Function;
  } = arguments;
}
```

类数组都有自己的借口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

```typescript
//	IArguments相当于如下：
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```

### 5、any在数组中的应用

一个比较常见的做法是，用 `any` 表示数组中允许出现任意类型：

## 九、函数的类型

### 1、定义函数的两种方式（函数声明、函数表达式）

函数声明：

- 在ts中，函数的输入和输出都要进行约束；
- 一般情况下，输入多余的（或者少于要求的）参数，是不被允许的；

函数表达式：

- 在ts中，函数表达式定义函数的写法较为复杂：

![image-20200610155520395](/Users/wayne/Library/Application Support/typora-user-images/image-20200610155520395.png)



### 2、用接口定义函数的形状

```typescript
interface SearchFunc{
	(source: string,subString:string):boolean;
}

let mySearch: SearchFunc;
mySearch = function(source;string,subString:string){
	return source.search(subString) !== -1;
}
```

### 3、可选参数

- 与接口中的可选属性类似，用`?`表示可以选参数；
- 可选参数后面不允许再出现必需参数；

### 4、参数默认值

ts会将添加了默认值的参数识别为可选参数，此时不受“可选参数后面不允许有必需参数”的限制；

### 5、剩余参数

![image-20200610170307160](/Users/wayne/Library/Application Support/typora-user-images/image-20200610170307160.png)

### 6、重载

![image-20200610170817679](/Users/wayne/Library/Application Support/typora-user-images/image-20200610170817679.png)

## 十、类型断言

可以用来手动指定一个值的类型。

### 1、语法

![image-20200610211806630](/Users/wayne/Library/Application Support/typora-user-images/image-20200610211806630.png)

- 在tsx中，必需使用`值 as 类型`的方式；
- 第二种方式在tsx中表示的是一个ReactNode，在ts中除了表示类型断言，也可能是是一个泛型；

### 2、类型断言的用途

#### I、将一个联合类型断言为其中一个类型

类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误；

#### II、将一个父类断言为更加具体的子类

#### III、将任何一个类型断言为any

- 将一个变量断言为 `any` 可以说是解决 TypeScript 中类型问题的最后一个手段
- **一方面不能滥用 `as any`，另一方面也不要完全否定它的作用**

#### IV、将`any`断言为一个具体的类型

### 3、类型断言的限制

要使得 `A` 能够被断言为 `B`，只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可。

### 4、双重断言（as any as Foo）

**除非迫不得已，千万别用双重断言。**

### 5、类型断言 vs 类型转换

- 类型断言不是类型转换，它不会真的影响到变量的类型；
- 若要进行类型转换，需要直接调用类型转换的方法。

### 6、类型断言 vs 类型声明

 ### 7、类型断言 vs 泛型



