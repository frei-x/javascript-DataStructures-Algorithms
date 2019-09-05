var http = require('http');
/**
 * js 树的数据结构实现
 */
//二叉搜索树
//特殊性:相对本节点较小的值保存在左节点，相对本节点较大的值保存在右节点
class BinarySearchTree {
    constructor() {
        class Node {
            constructor(key) {
                this.key = key;
                this.left = null;
                this.right = null;
            }
        }
        let that = this;
        let root = null;
        //根节点不为空时插入的新节点 
        let insertNode = function (node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                }
                else {
                    //旧节点的左节点有值,继续查找这个有值的节点的左节点,把它作为旧节点递归 ,
                    //直到查找到某个左节点为空,占领这个空位,赋值为newNode
                    insertNode(node.left, newNode);
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                }
                else {
                    insertNode(node.right, newNode);
                }
            }
        };
        //中序遍历
        let inOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                //上面一行代码被反复执行了,直到最左边节点为空,返回这个空节点的父节点就是最小值
                callback(node.key);
                //
                inOrderTraverseNode(node.right, callback);
            }
        };
        this.insert = function (key) {
            let newNode = new Node(key);
            if (root === null) {
                root = newNode;
            }
            else {
                insertNode(root, newNode);
            }
            that.root = root;
        };
        this.inOrderTraverse = function (callback) {
            inOrderTraverseNode(root, callback);
        };
        this.min = function () {
            function min(node) {
                if (node) {
                    while (node && node.left) {
                        node = node.left;
                    }
                    //如果node.left在while后变为错误条件  ,就返回key
                    return node.key;
                }
                else {
                    return null;
                }
            }
            return min(root);
        };
        this.max = function () {
            function max(node) {
                if (node) {
                    while (node && node.right) {
                        node = node.right;
                    }
                    return node.key;
                }
                else {
                    return null;
                }
            }
            return max(root);
        };
    }
}
let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(11);
tree.insert(22);
tree.insert(-2);
tree.insert(8);
tree.insert(0);
tree.insert(-99);
tree.insert(10);
tree.insert(148.9);
tree.insert(-118.95);
console.log(tree.root);
console.time('t');
tree.inOrderTraverse(function (value) {
    // console.log(value)
});
console.timeEnd('t');
console.log('最小值:', tree.min());
console.log('最大值', tree.max());
//监听端口,防止node退出后vscode控制台无法展开数据的bug
http.createServer().listen(8090);