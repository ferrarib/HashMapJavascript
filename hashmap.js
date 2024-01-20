class LinkedList {
  
    constructor(head = null) {
      this.head = head;
    }
  
    head(){
      return this.head;
    }
  
    tail() {
      let node = this.head;
      while(node.next){
        node = node.next;
      }
  
      return node;
    }
  
    at(index) {
  
      if (index > this.size() - 1){
        return "Out of Bounds";
      }
  
      let node = this.head;
      for(let i = 0; i < index; i++){
        node = node.next;
      }
  
      return node;
    }
  
    append(value){
      let newNode = new Node();
      newNode.value = value;
  
      let node = this.head;
  
      if (node == null){
        this.head = newNode;
        return;
      }
      
      while(node.next){
        node = node.next;
      }
  
      node.next = newNode;
    }
  
      prepend(value){
      let newNode = new Node();
      newNode.value = value;
  
      let node = this.head;
  
      newNode.next = node;
      this.head = newNode;
    }
  
    size() {
      let node = this.head;
  
      let count = 0;
  
      while(node){
        count++;
        node = node.next;
      }
  
      return count;
    }
  
    pop() {
      let node = this.head;
      while(node.next.next){
        node = node.next;
      }
  
      node.next = null;
    }
  
    contains(value){
      let node = this.head;
  
      while(node){
        if (node.value === value)
          return true;
         
        node = node.next;
      }
  
      return false;
    }
  
    find(value){
      let node = this.head;
      let index = 0;
  
      while(node){
        if (node.value === value)
          return index;
         
        node = node.next;
        index++;
      }
  
      return null;
    }
  
    insertAt(value, index){
      let newNode = new Node();
      newNode.value = value;
  
      if (index === 0){
        this.prepend(value);
        return;
      }
  
      if (index >= this.size()){
        this.append(value);
        return;
      }
  
      let tail = this.at(index);
      newNode.next = tail;
  
      let head = this.head;
      for (let i = 0; i < index - 1; i++){
        head = head.next;
      }
  
      head.next = newNode;
  
    }
  
    removeAt(index){
      if (index == null || index === 0){
        this.head = this.head.next;
        return;
      }
  
      if (index > this.size() - 1){
        return;
      }
  
       let head = this.head;
      for (let i = 0; i < index - 1; i++){
        head = head.next;
      }
  
      head.next = head.next.next;
    }
  
    toString(){
      let node = this.head;
      let result = "";
      while(node){
        result += `( ${node.value} ) -> `;
        node = node.next;
      }
  
      result += 'null'
  
      return result;
    }
  
  }
  
  class Node {
    constructor(value = null){
      this.value = value;
      this.next = null;
    }
  }

  class HashMap {
    constructor(){
        let n = 16;
        this.arr = new Array(n).fill(null);
        this.loadFactor = 0.75;
    }
    
    hash(value){
        let res = 0;
        
        for(let i = 0; i < value.length; i++){
            res += i * value.charCodeAt(i);
        }
        
        return res % this.arr.length;
    }
    
    set(key, value){
        let hashCode = this.hash(key);
        if (hashCode < 0 || hashCode >= this.arr.length) {
   throw new Error("Trying to access index out of bound");
 }
        
        this.arr[hashCode] = {
            key, 
            bucket: new LinkedList(new Node(value))
        }
        
        this.resizeMap();
    }
    
    
    has(key){
        return this.arr[this.hash(key)] != null;
    }
    
    get(key){
        if (this.has(key))
            return this.arr[this.hash(key)].bucket.head.value;
        return null;
    }
    
    remove(key){
        if (this.has(key)){
            this.arr[this.hash(key)] = null;
        }
    }
    
    length() {
        let res = 0;
        for(let i = 0; i < this.arr.length; i++){
            if (this.arr[i] != null){
                res++;
            }
        }
        
        return res;
    }
    
    clear(){
        let n = 16;
        this.arr = new Array(n).fill(null);
    }
    
    keys(){
        let res = [];
        for(let i = 0; i < this.arr.length; i++){
            if (this.arr[i] != null){
                res.push(this.arr[i].key);
            }
        }
        
        return res;
    }
    
    values() {
        let res = [];
        
        for(let i = 0; i < this.arr.length; i++){
            if (this.arr[i] != null){
                res.push(this.arr[i].bucket.head.value);
            }
        }
        
        return res;
    }
    
    entries() {
        let res = [];
        for(let i = 0; i < this.arr.length; i++){
            if (this.arr[i] != null){
                res.push([this.arr[i].key, this.arr[i].bucket.head.value]);
            }
        }
        
        return res;
    }
    
    resizeMap() {
        let length = this.arr.length;
        let occupied = this.length();
        let currentLoad = occupied / length;
        
        if (currentLoad > this.loadFactor){
            this.arr = [...this.arr, ...Array(this.arr.length).fill(null)];
        }
    }
    
    toString(){
        for (let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i]);
        }
    }
  }
  
  let hashMap = new HashMap();
  
  hashMap.set("aa", 1);
  hashMap.set("bb", 2);
  hashMap.set("cc", 3);
  hashMap.set("dd", 4);
  hashMap.set("ee", 5);
  hashMap.set("ff", 6);
  hashMap.set("gg", 7);
  hashMap.set("hh", 8);
  hashMap.set("ii", 9);
  hashMap.set("jj", 10);
  hashMap.set("kk", 11);
  hashMap.set("ll", 12);
  hashMap.set("mm", 13);
  hashMap.set("nn", 14);
  hashMap.set("oo", 15);
  hashMap.set("pp", 16);
  hashMap.set("qq", 17);
  hashMap.set("rr", 18);
  hashMap.set("ss", 19);
  hashMap.set("tt", 20);
  hashMap.set("uu", 21);
  hashMap.set("vv", 22);
  hashMap.set("zzz", 23);
  console.log(hashMap.entries());
  hashMap.toString();