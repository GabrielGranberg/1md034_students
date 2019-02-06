function MenuItem(namn, kCal, häst, img) {
    this.namn = namn; // The this keyword refers to the object itself
    this.kCal = kCal;
    this.häst = häst;
    this.img = img
    this.a = function() {
        return this.namn + ' ' + this.häst;
    };
}



var menuArray = [];

for(i = 0;i<mat.length;i++){
    menuArray[i] = new MenuItem(mat[i].namn,mat[i].kCal,mat[i].häst,mat[i].img);
}


var BS = new Vue({
	el:"#BS",
    data:{
      VäljEnBurgare: "Välj en Hamburgare",
        menuArray:menuArray
      
  }
})

function clog(){
    var aArray=[document.getElementById('För och efternamn').value,document.getElementById('email').value,document.getElementById('Gatauadress').value,document.getElementById('Husnummer').value,document.querySelector("input[name=K]:checked").value,document.getElementById('Betalsätt').value]
    if(document.querySelector("input[name=burgaa]:checked")!=null){
        var tmp = document.getElementsByName('burgaa');
        for(i=0;i<tmp.length;i++){
            if(tmp[i].checked){ 
                aArray[aArray.length]=tmp[i].value
            }
        }
    }
    return aArray;
}

var clik = new Vue({
    el:'#order',
    data:{
        output:null
    },
    methods:{
        markDone:function(){
            this.output=clog();
        }
    }
    
})



