var publicSpreadsheetUrl2 = 'https://docs.google.com/spreadsheets/d/1buRjjt9BYfNx2-_X6cuu5DQQhOcFNzPk0I4r_Al1CCY/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl2,
                     callback: showInfo2,
                   simpleSheet: false} )
  }
var a1=[];
var b1=[];
var avg1=[];
var bavg1=[];
var sr1=[];
var eco1=[];
var r1=[];
var w1=[];
var inb1=[];
var inn1=[];
  function showInfo2(data, tabletop) {
    var ar=[];
    var br=[];
    var tr=[];
    var i=0;
    $.each(tabletop.sheets("Team_Rank").all(),function(j, data1){
      tr[i]=data1.Ranking;
      console.log(tr[i]);
      i=i+1;
    });
    i=0;
    $.each(tabletop.sheets("Bat T20 WC").all(),function(j, data1){
      a1[i]=data1.player;
      avg1[i]=data1.Averages;
      r1[i]=data1.Run;
      inn1[i]=data1.Inning;
      sr1[i]=data1.strike_rate;
      ar[i]=data1.ratings;
      i=i+1;
    });
    i=0;
    $.each(tabletop.sheets("Bowl T20 WC").all(),function(j, data1){
      b1[i]=data1.player;
      bavg1[i]=data1.Averages;
      w1[i]=data1.Wicket;
      inb1[i]=data1.Inning;
      eco1[i]=data1.Econom;
      br[i]=data1.ratings;
      i=i+1;
    });
    tr.sort(function(a,b){return b-a});
    ar.sort(function(a,b){return b-a});
    br.sort(function(a,b){return b-a});
    for(i=0;i<8;i++)
    {
      var n=(i+1).toString();
      var idr="ttb"+n;
      var rdr="rttb"+n;
      var bn= "ttbo"+n;
      var brr="rttbo"+n;
      var trr="ttr"+n;
      var rtrr="rttr"+n;
      $.each(tabletop.sheets("Team_Rank").all(),function(j, data1){
      {
        if(tr[i]===data1.Ranking){
          document.getElementById(trr).innerHTML=data1.Team;
          return false;
        }
      }
      document.getElementById(rtrr).innerHTML=tr[i];
    });
      $.each(tabletop.sheets("Bat T20 WC").all(),function(j, data1){
      {
        if(ar[i]===data1.ratings){
          document.getElementById(idr).innerHTML=data1.player;
          return false;
        }
      }
      document.getElementById(rdr).innerHTML=ar[i];
    });
    $.each(tabletop.sheets("Bowl T20 WC").all(),function(j, data1){
    {
      if(br[i]===data1.ratings){
        document.getElementById(bn).innerHTML=data1.player;
        return false;
      }
    }
    document.getElementById(brr).innerHTML=br[i];
  });
    }
}
    document.getElementById("submit").addEventListener("click",function(){
      var na=document.getElementById("field").value;
      na=na.trim();
      for(i=0;i<297;i++){
        if(na.toUpperCase()==a1[i].toUpperCase()){
          document.getElementById("it").innerHTML= inn1[i];
          document.getElementById("runtt").innerHTML= r1[i];
          document.getElementById("avgtt").innerHTML= avg1[i];
          document.getElementById("srtt").innerHTML= sr1[i];
          break;
        }
      }
      for(i=0;i<297;i++){
        if(na.toUpperCase()==b1[i].toUpperCase()){
          document.getElementById("ttin").innerHTML= inb1[i];
          document.getElementById("ttwoo").innerHTML= w1[i];
          document.getElementById("ttoavg").innerHTML= bavg1[i];
          document.getElementById("ttoe").innerHTML= eco1[i];
          break;
        }
      }
    });

  window.addEventListener('DOMContentLoaded', init)
