var publicSpreadsheetUrl1 = 'https://docs.google.com/spreadsheets/d/1qGf6Mife_cBxSPv5gkKaqIgNKz1zwrN4gWbDy2Vz3Aw/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl1,
                     callback: showInfo1,
                   simpleSheet: false} )
  }
var a=[];
var b=[];
var avg=[];
var bavg=[];
var sr=[];
var eco=[];
var r=[];
var w=[];
var inb=[];
var inn=[];
  function showInfo1(data, tabletop) {
    var ar=[];
    var br=[];
    var tr1=[];
    var i=0;
    $.each(tabletop.sheets("Team Rank").all(),function(j, data1){
      tr1[i]=data1.Ranking;
      console.log(tr1[i]);
      i=i+1;
    });
    i=0;
    $.each(tabletop.sheets("Bat Champions Trophy").all(),function(j, data1){
      a[i]=data1.player;
      avg[i]=data1.Averages;
      r[i]=data1.Run;
      inn[i]=data1.Inning;
      sr[i]=data1.strike_rate;
      ar[i]=data1.ratings;
      i=i+1;
    });
    i=0;
    $.each(tabletop.sheets("Bowl Champions Trophy").all(),function(j, data1){
      b[i]=data1.player;
      bavg[i]=data1.Averages;
      w[i]=data1.Wicket;
      inb[i]=data1.Inning;
      eco[i]=data1.Econom;
      br[i]=data1.ratings;
      i=i+1;
    });
    tr1.sort(function(a,b){return b-a});
    ar.sort(function(a,b){return b-a});
    br.sort(function(a,b){return b-a});
    for(i=0;i<8;i++)
    {
      var n=(i+1).toString();
      var idr="Obat"+n;
      var rdr="RObat"+n;
      var bn= "obo"+n;
      var brr="rbo"+n;
      var trr="tr"+n;
      var rtrr="rtr"+n;
      $.each(tabletop.sheets("Team Rank").all(),function(j, data1){
      {
        if(tr1[i]===data1.Ranking){
          document.getElementById(trr).innerHTML=data1.Team;
          return false;
        }
      }
      document.getElementById(rtrr).innerHTML=tr1[i];
    });
      $.each(tabletop.sheets("Bat Champions Trophy").all(),function(j, data1){
      {
        if(ar[i]===data1.ratings){
          document.getElementById(idr).innerHTML=data1.player;
          return false;
        }
      }
      document.getElementById(rdr).innerHTML=ar[i];
    });
    $.each(tabletop.sheets("Bowl Champions Trophy").all(),function(j, data1){
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
        if(na.toUpperCase()==a[i].toUpperCase()){
          document.getElementById("inno").innerHTML= inn[i];
          document.getElementById("runo").innerHTML= r[i];
          document.getElementById("avgo").innerHTML= avg[i];
          document.getElementById("sro").innerHTML= sr[i];
          break;
        }
      }
      for(i=0;i<297;i++){
        if(na.toUpperCase()==b[i].toUpperCase()){
          document.getElementById("bin").innerHTML= inb[i];
          document.getElementById("bwo").innerHTML= w[i];
          document.getElementById("boavg").innerHTML= bavg[i];
          document.getElementById("boe").innerHTML= eco[i];
          break;
        }
      }
    });

  window.addEventListener('DOMContentLoaded', init)
