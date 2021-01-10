var publicSpreadsheetUrl3 = 'https://docs.google.com/spreadsheets/d/1F22GljIN6SxXDKwd7IQv9_5PRNRf6kGqdH1o5EsfPRM/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl3,
                     callback: showInfo3,
                   simpleSheet: false} )
  }
var a2=[];
var b2=[];
var avg2=[];
var bavg2=[];
var sr2=[];
var eco2=[];
var r2=[];
var w2=[];
var inb2=[];
var inn2=[];
  function showInfo3(data, tabletop) {
    var ar=[];
    var br=[];
    var tr=[];
    var i=0;
    $.each(tabletop.sheets("OCC_Team_Rankings").all(),function(j, data1){
      tr[i]=data1.Ranking;
      console.log(tr[i]);
      i=i+1;
    });
    i=0;
    $.each(tabletop.sheets("Bat Test Championship").all(),function(j, data1){
      a2[i]=data1.player;
      avg2[i]=data1.Averages;
      r2[i]=data1.Run;
      inn2[i]=data1.Inning;
      sr2[i]=data1.strike_rate;
      ar[i]=data1.ratings;
      i=i+1;
    });
    i=0;
    $.each(tabletop.sheets("Bowl Test Championship").all(),function(j, data1){
      b2[i]=data1.player;
      bavg2[i]=data1.Averages;
      w2[i]=data1.Wicket;
      inb2[i]=data1.Inning;
      eco2[i]=data1.Econom;
      br[i]=data1.ratings;
      i=i+1;
    });
    tr.sort(function(a,b){return b-a});
    ar.sort(function(a,b){return b-a});
    br.sort(function(a,b){return b-a});
    for(i=0;i<8;i++)
    {
      var n=(i+1).toString();
      var idr="tb"+n;
      var rdr="rtb"+n;
      var bn= "tbo"+n;
      var brr="rtbo"+n;
      var trr="t"+n;
      var rtrr="rt"+n;
      $.each(tabletop.sheets("OCC_Team_Rankings").all(),function(j, data1){
      {
        if(tr[i]===data1.Ranking){
          document.getElementById(trr).innerHTML=data1.Team;
          return false;
        }
      }
      document.getElementById(rtrr).innerHTML=tr[i];
    });
      $.each(tabletop.sheets("Bat Test Championship").all(),function(j, data1){
      {
        if(ar[i]===data1.ratings){
          document.getElementById(idr).innerHTML=data1.player;
          return false;
        }
      }
      document.getElementById(rdr).innerHTML=ar[i];
    });
    $.each(tabletop.sheets("Bowl Test Championship").all(),function(j, data1){
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
      for(i=0;i<297;i++){
        if(na.toUpperCase()==a2[i].toUpperCase()){
          document.getElementById("innt").innerHTML= inn2[i];
          document.getElementById("runt").innerHTML= r2[i];
          document.getElementById("avgt").innerHTML= avg2[i];
          document.getElementById("srt").innerHTML= sr2[i];
          break;
        }
      }
      for(i=0;i<297;i++){
        if(na.toUpperCase()==b2[i].toUpperCase()){
          document.getElementById("tin").innerHTML= inb2[i];
          document.getElementById("twoo").innerHTML= w2[i];
          document.getElementById("toavg").innerHTML= bavg2[i];
          document.getElementById("toe").innerHTML= eco2[i];
          break;
        }
      }
    });

  window.addEventListener('DOMContentLoaded', init)
