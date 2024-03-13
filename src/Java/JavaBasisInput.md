---
title: Java 基础学习输入
category: Java
tag:
  - Java 基础
head:
  - - meta
    - name: keywords
      content: 面向对象,构造方法,接口,抽象类,String,Object
  - - meta
    - name: description
      content: 知识输入
---
## String类常用方法
String 类在 Java 中是非常基础且常用的一个类，其方法可以粗略地被分为几个类别：

1. **查询类方法** - 用于字符串的查询信息，如长度、字符位置等
   - `length()` - 返回字符串长度。<br />
      ><em>使用示例：在用户输入验证时检查字符串是否为空或者达到了一定的长度要求。</em>
   - `charAt(index)` - 返回指定索引处的字符。<br />
     ><em>使用示例：在循环中逐个分析字符串的每个字符，如在编写编码器、解码器等场合。</em>
   - `indexOf(str)` - 返回指定子字符串首次出现的字符串内的索引。
   - `lastIndexOf(str)` - 返回指定子字符串最后一次出现的字符串内的索引。<br />
      ><em>使用示例：在搜索功能中，找到用户输入关键词在文档中的位置。</em>
   - `startsWith(prefix)` - 判断字符串是否以指定前缀开始。
   - `endsWith(suffix)` - 判断字符串是否以指定后缀结束。<br />
      ><em>使用示例：在文件处理中，判断文件的扩展名或者是检测URL的协议类型。</em>

2. **比较类方法** - 用于两个字符串之间的比较
   - `equals(otherString)` - 比较两个字符串是否相等。
   - `equalsIgnoreCase(otherString)` - 与`equals`方法类似，但忽略大小写差异。<br />
      ><em>使用示例：在登录功能中，比较用户输入的密码与数据库中存储的密码是否一致。</em>
   - `compareTo(otherString)` - 比较两个字符串的大小（字典顺序）。
   - `compareToIgnoreCase(otherString)` - 与`compareTo`方法类似，但忽略大小写差异。<br />
      ><em>使用示例：在排序应用中，根据字符串字典顺序进行排序操作。</em>

3. **操作类方法** - 对字符串进行某些操作，如转换、替换等
   - `concat(str)` - 将指定字符串连接到此字符串的末尾。<br />
      ><em>使用示例：在文本编辑器中，进行文本的合并操作。</em>
   - `replace(oldChar,newChar)` - 返回一个新的字符串，它是通过用`newChar`替换此字符串中出现的所有`oldChar`得到的。<br />
      ><em>使用示例：在处理用户输入内容时，去除或替换不合法字符。</em>
   - `substring(beginIndex)` 或 `substring(beginIndex, endIndex)` - 返回一个新的字符串，它是此字符串的一个子字符串。<br />
      ><em>使用示例：在文本分析时，提取指定范围内的字符串。tips:一般是格式化字符串</em>
   - `toLowerCase()` - 使用默认语言环境的规则将此`String`中的所有字符转换为小写。
   - `toUpperCase()` - 使用默认语言环境的规则将此`String`中的所有字符转换为大写。<br />
      ><em>使用示例：处理搜索查询时，忽略大小写的差异，以提供更灵活的搜索。</em>
   - `trim()` - 返回字符串的副本，忽略前导空白和尾部空白。<br />
      ><em>使用示例：</em>

4. **分割类方法** - 将字符串分割为若干部分
   - `split(regex)` - 根据匹配给定的正则表达式来分割字符串。<br />
      ><em>使用示例：读取CSV文件时，按逗号分隔取得每一列数据。</em>

5. **转换类方法** - 与其他数据类型之间的转换
   - `getBytes()` - 使用默认字符集将此`String`编码为一系列字节，将结果存储到一个新的字节数组中。<br />
      ><em>使用示例：在网络传输中，将字符串转换成字节流进行发送。</em>
   - `valueOf(param)` - 返回`param`数据类型的字符串表现形式。例如，可以是`valueOf(int)`，`valueOf(boolean)`等。<br />
      ><em>使用示例：在记录日志或显示消息时，将各种类型数据转换为字符串形式进行拼接和展示。</em>

每一个类别包含了针对String对象可以执行的相关操作和查询。在编程时，你可以选择合适的方法来完成你的需求。

### 移位运算
移位运算符是最基本的运算符之一，几乎每种编程语言都包含这一运算符。移位操作中，被操作的数据被视为二进制数，移位就是将其向左或向右移动若干位的运算。

移位运算符在各种框架以及 JDK 自身的源码中使用还是挺广泛的，`HashMap`（JDK1.8） 中的 `hash` 方法的源码就用到了移位运算符：

```java
static final int hash(Object key) {
    int h;
    // key.hashCode()：返回散列值也就是hashcode
    // ^：按位异或
    // >>>:无符号右移，忽略符号位，空位都以0补齐
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
  }

```
Java中的移位运算符主要用于对二进制数进行操作。移位运算符包括左移(`<<`)、右移(`>>`)和无符号右移(`>>>`)。下面分别对这三种运算符进行详细解释：
- `<<` :左移运算符，向左移若干位，高位丢弃，低位补零。`x << 1`,相当于 x 乘以 2(不溢出的情况下)。
- `>>` :带符号右移，向右移若干位，高位补符号位，低位丢弃。正数高位补 0,负数高位补 1。`x >> 1`,相当于 x 除以 2。
- `>>>` :无符号右移，忽略符号位，空位都以 0 补齐。

由于 `double`，`float` 在二进制中的表现比较特殊，因此不能来进行移位操作。

移位操作符实际上支持的类型只有`int`和`long`，编译器在对`short`、`byte`、`char`类型进行移位前，都会将其转换为`int`类型再操作。

Java中的移位运算符可以用于快速进行乘除运算，例如：
- `x << n` 相当于 `x * (2^n)`。
- `x >> n` 相当于 `x / (2^n)`，但只适用于整数运算。
- `x >>> n` 在某些情况下用于保持正数的符号，同时将数值除以`2^n`。
需要注意的是，当对负数进行右移操作时，由于负数以补码形式表示，高位补1，因此结果可能不是直观的除以2的幂。而无符号右移运算符则不会遇到这个问题，因为它总是补0。<br />
对于任何负整数，如果进行足够多的有符号右移操作，最终都会得到-1，因为每次右移都会保持符号位不变，并且逐渐将其他位移出，直到只剩下符号位。这是补码表示法的一个特性，它确保了负数在进行右移操作时保持其负号。<br />
移位运算符在处理较大数的乘除运算时非常高效，但使用时也要注意不要超出数据类型的范围，例如，对`int`类型进行左移操作时，如果移动的位数过大，可能会导致数据溢出。


### 运算符
在Java中，整数之间的除法运算会得到整数结果，并且是截断小数部分。因此，10除以3的结果是3（而不是3.3333…）

### 基本类型和包装类型的区别？

 ![基本类型 vs 包装类型](https://cdn.jsdelivr.net/gh/Dhb-150/Personal-access@main/CodeAscetic/pictures/primitive-type-vs-packaging-type.png)


- **用途**：除了定义一些常量和局部变量之外，我们在其他地方比如方法参数、对象属性中很少会使用基本类型来定义变量。并且，包装类型可用于泛型，而基本类型不可以。
- **存储方式**：基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中，基本数据类型的成员变量（未被 `static` 修饰 ）存放在 Java 虚拟机的堆中。包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。
- **占用空间**：相比于包装类型（对象类型）， 基本数据类型占用的空间往往非常小。
- **默认值**：成员变量包装类型不赋值就是 `null` ，而基本类型有默认值且不是 `null`。
- **比较方式**：对于基本数据类型来说，`==` 比较的是值。对于包装数据类型来说，`==` 比较的是对象的内存地址。所有整型包装类对象之间值的比较，全部使用 `equals()` 方法。


### 自动装箱与拆箱了解吗？原理是什么？

**什么是自动拆装箱？**

- **装箱**：将基本类型用它们对应的引用类型包装起来；
- **拆箱**：将包装类型转换为基本数据类型；

举例：

```java
Integer i = 10;  //装箱
int n = i;   //拆箱
```

上面这两行代码对应的字节码为：

```java
   L1

    LINENUMBER 8 L1

    ALOAD 0

    BIPUSH 10

    INVOKESTATIC java/lang/Integer.valueOf (I)Ljava/lang/Integer;

    PUTFIELD AutoBoxTest.i : Ljava/lang/Integer;

   L2

    LINENUMBER 9 L2

    ALOAD 0

    ALOAD 0

    GETFIELD AutoBoxTest.i : Ljava/lang/Integer;

    INVOKEVIRTUAL java/lang/Integer.intValue ()I

    PUTFIELD AutoBoxTest.n : I

    RETURN
```

从字节码中，我们发现装箱其实就是调用了 包装类的`valueOf()`方法，拆箱其实就是调用了 `xxxValue()`方法。

因此，

- `Integer i = 10` 等价于 `Integer i = Integer.valueOf(10)`
- `int n = i` 等价于 `int n = i.intValue()`;

注意：**如果频繁拆装箱的话，也会严重影响系统的性能。我们应该尽量避免不必要的拆装箱操作。**
```java
private static long sum() {
    // 应该使用 long 而不是 Long
    // Long sum = 0L;
    long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++)
        sum += i;
    return sum;
}
```

### hashCode() 有什么用？

`hashCode()` 的作用是获取哈希码（`int` 整数），也称为散列码。这个哈希码的作用是确定该对象在哈希表中的索引位置。

![hashCode() 方法](https://oss.javaguide.cn/github/javaguide/java/basis/java-hashcode-method.png)

`hashCode()` 定义在 JDK 的 `Object` 类中，这就意味着 Java 中的任何类都包含有 `hashCode()` 函数。另外需要注意的是：`Object` 的 `hashCode()` 方法是本地方法，也就是用 C 语言或 C++ 实现的。

> ⚠️ 注意：该方法在 **Oracle OpenJDK8** 中默认是 "使用线程局部状态来实现 Marsaglia's xor-shift 随机数生成", 并不是 "地址" 或者 "地址转换而来", 不同 JDK/VM 可能不同在 **Oracle OpenJDK8** 中有六种生成方式 (其中第五种是返回地址), 通过添加 VM 参数: -XX:hashCode=4 启用第五种。参考源码:
>
> - <https://hg.openjdk.org/jdk8u/jdk8u/hotspot/file/87ee5ee27509/src/share/vm/runtime/globals.hpp>（1127 行）
> - <https://hg.openjdk.org/jdk8u/jdk8u/hotspot/file/87ee5ee27509/src/share/vm/runtime/synchronizer.cpp>（537 行开始）

```java
public native int hashCode();
```

散列表存储的是键值对(key-value)，它的特点是：**能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）**

### 为什么要有 hashCode？

我们以“`HashSet` 如何检查重复”为例子来说明为什么要有 `hashCode`？

下面这段内容摘自我的 Java 启蒙书《Head First Java》:

> 当你把对象加入 `HashSet` 时，`HashSet` 会先计算对象的 `hashCode` 值来判断对象加入的位置，同时也会与其他已经加入的对象的 `hashCode` 值作比较，如果没有相符的 `hashCode`，`HashSet` 会假设对象没有重复出现。但是如果发现有相同 `hashCode` 值的对象，这时会调用 `equals()` 方法来检查 `hashCode` 相等的对象是否真的相同。如果两者相同，`HashSet` 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。这样我们就大大减少了 `equals` 的次数，相应就大大提高了执行速度。

其实， `hashCode()` 和 `equals()`都是用于比较两个对象是否相等。

**那为什么 JDK 还要同时提供这两个方法呢？**

这是因为在一些容器（比如 `HashMap`、`HashSet`）中，有了 `hashCode()` 之后，判断元素是否在对应容器中的效率会更高（参考添加元素进`HashSet`的过程）！

我们在前面也提到了添加元素进`HashSet`的过程，如果 `HashSet` 在对比的时候，同样的 `hashCode` 有多个对象，它会继续使用 `equals()` 来判断是否真的相同。也就是说 `hashCode` 帮助我们大大缩小了查找成本。

**那为什么不只提供 `hashCode()` 方法呢？**

这是因为两个对象的`hashCode` 值相等并不代表两个对象就相等。

**那为什么两个对象有相同的 `hashCode` 值，它们也不一定是相等的？**

因为 `hashCode()` 所使用的哈希算法也许刚好会让多个对象传回相同的哈希值。越糟糕的哈希算法越容易碰撞，但这也与数据值域分布的特性有关（所谓哈希碰撞也就是指的是不同的对象得到相同的 `hashCode` )。

总结下来就是：

- 如果两个对象的`hashCode` 值相等，那这两个对象不一定相等（哈希碰撞）。
- 如果两个对象的`hashCode` 值相等并且`equals()`方法也返回 `true`，我们才认为这两个对象相等。
- 如果两个对象的`hashCode` 值不相等，我们就可以直接认为这两个对象不相等。

相信大家看了我前面对 `hashCode()` 和 `equals()` 的介绍之后，下面这个问题已经难不倒你们了。

### 为什么重写 equals() 时必须重写 hashCode() 方法？

如果你只重写了equals()方法而没有重写hashCode()方法，当你使用这些对象作为HashMap的键时，可能会出现以下问题：
- 性能下降：HashMap使用哈希码来快速定位存储桶（bucket），如果哈希码不适当，HashMap的性能会受到影响，因为它需要更多的比较来找到或插入键值对。
- 违反规约：根据Object类的规范，如果两个对象通过equals()方法比较返回true，那么它们调用hashCode()方法必须返回相同的整数结果。不遵守这个约定会导致HashMap（以及所有基于哈希的Collection）表现出不稳定和不可预测的行为。
- 无法正确检索对象：如果两个相等的对象（根据重写的equals()方法）有不同的哈希码，当你尝试从HashMap中获取其中一个对象时，HashMap可能会返回null或者错误的对象，因为它会根据哈希码查找存储桶，而不同的哈希码会导致对象被存储在不同的位置。
- 死循环：在某些情况下，不正确的hashCode()实现可能导致HashMap在添加或检索元素时进入死循环，这会消耗大量的CPU资源，并可能导致程序冻结。<br />
因此，重写equals()方法时，务必也重写hashCode()方法，并确保它们一致：如果equals()方法认为两个对象相等，hashCode()方法必须为这两个对象返回相同的哈希码。这样可以保证HashMap和其他基于哈希的集合的正常和高效运行。

因为两个相等的对象的 `hashCode` 值必须是相等。也就是说如果 `equals` 方法判断两个对象是相等的，那这两个对象的 `hashCode` 值也要相等。

如果重写 `equals()` 时没有重写 `hashCode()` 方法的话就可能会导致 `equals` 方法判断是相等的两个对象，`hashCode` 值却不相等。

**思考**：重写 `equals()` 时没有重写 `hashCode()` 方法的话，使用 `HashMap` 可能会出现什么问题。
<details>
  <summary>点击展开或折叠</summary>
  如果类重写 `equals()` 时没有重写 `hashCode()` 方法, 在创建类对应散列表, 例如HashMap时, 当 `equals()` 相等时

```java
   // 创建两个 equals() 相等的实例
   Person alice1 = new Person("Alice", 30);
   Person alice2 = new Person("Alice", 30);

   // 创建类对应HashMap
   Map<Person, String> map = new HashMap<>();
   map.put(alice1, "Alice's info");

   String info = map.get(alice2); // 期望得到 "Alice's info"，但实际上可能会得到 null
   System.out.println("Retrieved info: " + info);
```

</details>

**总结**：

- `equals` 方法判断两个对象是相等的，那这两个对象的 `hashCode` 值也要相等。
- 两个对象有相同的 `hashCode` 值，他们也不一定是相等的（哈希碰撞）。

更多关于 `hashCode()` 和 `equals()` 的内容可以查看：[Java hashCode() 和 equals()的若干问题解答](https://www.cnblogs.com/skywang12345/p/3324958.html)


## SPI

关于 SPI 的详细解读，请看这篇文章 [Java SPI 机制详解](./spi.md) 。

### 何谓 SPI?

SPI 即 Service Provider Interface ，字面意思就是：“服务提供者的接口”，我的理解是：专门提供给服务提供者或者扩展框架功能的开发者去使用的一个接口。

SPI 将服务接口和具体的服务实现分离开来，将服务调用方和服务实现者解耦，能够提升程序的扩展性、可维护性。修改或者替换服务实现并不需要修改调用方。

很多框架都使用了 Java 的 SPI 机制，比如：Spring 框架、数据库加载驱动、日志接口、以及 Dubbo 的扩展实现等等。

![](https://oss.javaguide.cn/github/javaguide/java/basis/spi/22e1830e0b0e4115a882751f6c417857tplv-k3u1fbpfcp-zoom-1.jpeg)

### SPI 和 API 有什么区别？

**那 SPI 和 API 有啥区别？**

说到 SPI 就不得不说一下 API 了，从广义上来说它们都属于接口，而且很容易混淆。下面先用一张图说明一下：

![](https://oss.javaguide.cn/github/javaguide/java/basis/spi/1ebd1df862c34880bc26b9d494535b3dtplv-k3u1fbpfcp-watermark.png)

一般模块之间都是通过接口进行通讯，那我们在服务调用方和服务实现方（也称服务提供者）之间引入一个“接口”。

当实现方提供了接口和实现，我们可以通过调用实现方的接口从而拥有实现方给我们提供的能力，这就是 API ，这种接口和实现都是放在实现方的。

当接口存在于调用方这边时，就是 SPI ，由接口调用方确定接口规则，然后由不同的厂商去根据这个规则对这个接口进行实现，从而提供服务。

举个通俗易懂的例子：公司 H 是一家科技公司，新设计了一款芯片，然后现在需要量产了，而市面上有好几家芯片制造业公司，这个时候，只要 H 公司指定好了这芯片生产的标准（定义好了接口标准），那么这些合作的芯片公司（服务提供者）就按照标准交付自家特色的芯片（提供不同方案的实现，但是给出来的结果是一样的）。

> 我的理解: SPI是调用方制定接口规则;API是实现方提供接口能力

### SPI 的优缺点？

通过 SPI 机制能够大大地提高接口设计的灵活性，但是 SPI 机制也存在一些缺点，比如：

- 需要遍历加载所有的实现类，不能做到按需加载，这样效率还是相对较低的。
- 当多个 `ServiceLoader` 同时 `load` 时，会有并发问题。

